<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Auth;
use DB;
use App\Order;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data=Order::orderBy('id','DESC');
        if(isset($request->start) && !empty($request->start))
        {
            $start= new Carbon($request->start);
            $start=$start->startOfDay();
            $data=$data->where('created_at','>=',$start);
    
        } 
        if(isset($request->end) && !empty($request->end))
        {
            $end= new Carbon($request->end);
            $end=$end->endOfDay();
            $data=$data->where('created_at','<=',$end);
    
        } 
        
        if(isset($request->status) && !empty($request->status))
        {
            $order_status_id=$request->status;
            $data=$data->where('status',$order_status_id);
    
        }        
        if(isset($request->show) && !empty($request->show))
        {
            $show=$request->show;
            $data=$data->with('item')->paginate($show);
    
        }
        else
        {
            $data=$data->with('item')->paginate(20);
        }
        return $data;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $response=array();
        $response['status']=false;
        $response['data'] ='';
        DB::beginTransaction();
        try {
            $response['data']=Order::where('id',$id)
            ->update([
                'status' => $request->status,
            ]);         
            DB::commit();
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data']=$e->getMessage();
            $response['status'] = false;
            DB::rollback();
        }
            
        return response()->json($response);
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
