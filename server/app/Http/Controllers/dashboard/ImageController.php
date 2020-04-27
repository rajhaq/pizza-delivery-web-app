<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Image;
use App\ImageFolder;
use Auth;
use URL;
class ImageController extends Controller
{
    public function index(Request $request)
    {
        $auth_id=Auth::id();
        $data=Image::orderBy('id','ASC')
        ->where('user_id',$auth_id);    
        if(isset($request->image_folder_id) && !empty($request->image_folder_id))
        {
            $data= $data->where('image_folder_id',$request->image_folder_id);
        }
        $data= $data->get();
        return $data;
    }
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $auth_id=Auth::id();
        $response=array();
        $response['status']=false;
        $response['data'] ='';
        // dd($request->all());
        $validator = Validator::make(
            $request->all(), [
                'folder_id' => 'required',
                'myFile.*' => 'required|image|max:3000'
                ]);
        if ($validator->fails()) {
            $response['data'] =$validator->errors();
            return response()->json($response,200);
        }
        DB::beginTransaction();

        try {
            $response['data']=array();
            foreach($request->myFile as $media)
            {
                // dd($doc);
                $name=$media->getClientOriginalName();
                $src= $media->hashName();
                $media->store('public/uploads/files');
                $data=Image::create([
                    'user_id' => $auth_id,
                    'image_folder_id' => $request->folder_id,
                    'name' => $name,
                    'type' => '',
                    'src' => URL::to('/').'/storage/uploads/files/'.$src,

                ]);
                
                array_push($response['data'],$data);
            }
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage();
            DB::rollback();
        }

        return response()->json($response);
    }
    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }
    
    public function update(Request $request, $id)
    {
        $response=array();
        $response['status']=false;
        $response['data'] ='';
        $validator = Validator::make(
            $request->all(), [
            'name' => 'required|string|max:255',
            'parent_id' => 'required',
        ]);
        if ($validator->fails()) {
            $response['data'] =$validator->errors();
            return response()->json($response,200);
        }

        DB::beginTransaction();
        try {
            $response['data']=ImageFolder::where('id',$id)
            ->update($request->all());
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage();
            $response['status'] = false;
            DB::rollback();
        }
            
        return response()->json($response);
    }
    public function destroy($id)
    {
        $response=array();
        $response['status']=false;
        $response['data'] = Image::find($id);
        if($response['data'])
        {
                $response['data']=$response['data']->delete();
                $response['status']=true;
        }
        else
        {
            $response['data']="Status not Exist";  
        }
        return response()->json($response);

    }
    
}
