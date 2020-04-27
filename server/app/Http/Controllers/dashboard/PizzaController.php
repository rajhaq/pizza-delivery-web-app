<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Pizza;
use App\PizzaTopping;
use Auth;
use DB;
use Illuminate\Support\Facades\Validator;
class PizzaController extends Controller
{
    public function index()
    {
        $data=Pizza::orderBy('id','ASC');    
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
            $response['data']=Pizza::create(
                [
                    "user_id" => $user_id,
                    "category_id" => $request->category_id,
                    "name" => $request->name,
                    "description" => $request->description,
                    "image" => $request->image,
                    "base_image" => $request->base_image,
                    "large" => $request->large,
                    "medium" => $request->medium,
                    "small" => $request->small,
                    "pan" => $request->pan,
                    "thin" => $request->thin,
                    "cheesy" => $request->cheesy,
                    "sfo" => $request->sfo,
                    "status" => $request->status,
                ]
            );     
            if(count($request->toppings))
            {
                foreach($request->toppings as $topping)
                {
                    // dd($product['product_id']);
                    // $product=json_decode($product);
                    // dd($product['quantity']);
                    PizzaTopping::create([
                        'pizza_id' => $response['data']->id,
                        'topping_id' => $topping,
                    ]);
                }
            }      
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
            $user_id = Auth::id();
            $response['data']=Pizza::where('id',$id)
            ->update(
                [
                    "category_id" => $request->category_id,
                    "name" => $request->name,
                    "description" => $request->description,
                    "image" => $request->image,
                    "base_image" => $request->base_image,
                    "large" => $request->large,
                    "medium" => $request->medium,
                    "small" => $request->small,
                    "pan" => $request->pan,
                    "thin" => $request->thin,
                    "cheesy" => $request->cheesy,
                    "sfo" => $request->sfo,
                    "status" => $request->status,
                ]
            );  
            PizzaTopping::where('pizza_id',$id)->delete();
            if(count($request->toppings))
            {
                foreach($request->toppings as $topping)
                {
                    // dd($product['product_id']);
                    // $product=json_decode($product);
                    // dd($product['quantity']);
                    PizzaTopping::create([
                        'pizza_id' => $id,
                        'topping_id' => $topping,
                    ]);
                }
            }            
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage()."line".$e->getLine();
            DB::rollback();
        }

        return response()->json($response);
    }
    public function destroy($id)
    {
        $response=array();
        $response['status']=false;
        $response['data'] = Pizza::find($id);
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

