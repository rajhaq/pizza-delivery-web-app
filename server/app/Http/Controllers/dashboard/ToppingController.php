<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Topping;
use Auth;
use DB;
use Illuminate\Support\Facades\Validator;
class ToppingController extends Controller
{
    public function index()
    {
        $data=Topping::orderBy('id','ASC');    
        if(isset($request->type) && !empty($request->type))
        {
            $data= $data->where('type',$request->type);
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
        $response=array();
        $response['status']=false;
        $response['data'] ='';
        // dd($request->all());
        $validator = Validator::make(
            $request->all(), [
            'name' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            $response['data'] =$validator->errors();
            return response()->json($response,200);
        }
        DB::beginTransaction();

        try {
            $user_id = Auth::id();
            $request['user_id']=$user_id;    
            $response['data']=Topping::create($request->all());           
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage()."line".$e->getLine();
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
        // dd($request->all());
        $validator = Validator::make(
            $request->all(), [
            'name' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            $response['data'] =$validator->errors();
            return response()->json($response,200);
        }
        DB::beginTransaction();

        try {
            $response['data']=Topping::where('id',$id)
            ->update(
                [
                    'name'=>$request->name,
                    'image'=>$request->image,
                    'price'=>$request->price,
                    'status'=>$request->status
                ]
            );           
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage().', Line: '.$e->getLine();
            $response['status'] = true;
            DB::rollback();
        }

        return response()->json($response);
    }
    public function destroy($id)
    {
        $response=array();
        $response['status']=false;
        $response['data'] = Topping::find($id);
        if($response['data'])
        {
                $response['data']=$response['data']->delete();
                $response['status']=true;
        }
        else
        {
            $response['data']="Not Exist";  
        }
        return response()->json($response);

    }
}
