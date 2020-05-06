<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cart;
use App\OrderItem;
use App\Order;
use Auth;
use DB;
use Illuminate\Support\Facades\Validator;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
        public function store(Request $request)
    {
        $response=array();
        $response['status']=false;
        $response['data'] ='';
        // dd($request->all());
        $validator = Validator::make(
            $request->all(), [
                'name' => 'required|string|max:255',
                'number' => 'required|string|max:255',
                'address' => 'required|string|max:255',
                ]);
        if ($validator->fails()) {
            $response['data'] =$validator->errors();
            return response()->json($response,400);
        }
        DB::beginTransaction();

        try {
            $response['data']=Order::create(
                [
                    "user_id" => 0,
                    "guest_id" => $request->guest_id,
                    "total_price" => $request->total_price,
                    "type" => "Online Order",
                    "name" => $request->name,
                    "number" => $request->number,
                    "address" => $request->address.', '.$request->state.', '.$request->city.', '.$request->country,
                    "note" => $request->note,
                    "lat" => 0,
                    "lon" => 0,
                ]
            );     
            $cart=Cart::where('guest_id',$request->guest_id)->get();

            if(count($cart))
            {
                foreach($cart as $item)
                {
                    OrderItem::create([
                        'order_id' => $response['data']->id,
                        'pizza_id' => $item->pizza_id,
                        'name' => $item->name,
                        'size' => $item->size,
                        'type' => $item->type,
                        'price' => $item->price,
                        'quantity' => $item->quantity,
                        'note' => $item->note,
                    ]);
                }
            }
            else
            {
                $response['status'] = false;
                $response['data']="Empty cart";
            }
            $cart=Cart::where('guest_id',$request->guest_id)->delete();      
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage()."line".$e->getLine();
            DB::rollback();
        }

        return response()->json($response);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=Order::with('item')->find($id);
        // dd($data);
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
