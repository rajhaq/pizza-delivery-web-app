<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;
use App\User;
use Session;
use Redirect;
use DateTime;
use Mail;
class UserController extends Controller
{
    public function index(Request $request)
    {
        $data=User::orderBy('id','ASC');    
        if(isset($request->type) && !empty($request->type))
        {
            $data= $data->where('type',$request->type);
        }
        $data= $data->get();
        return $data;
    }
    public function profile()
    {
        $data=Auth::user();
        return $data;
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'mobile' => ['required', 'string','min:8'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => false
        ],200);
        }

        if( isset($request->name) && isset($request->password) && isset($request->email))
        {
            DB::beginTransaction();
            try {
            
                $data=new User;
                $data->name=$request->input('name');
                $data->email=$request->input('email');
                $data->mobile=$request->input('mobile');
                $data->address=$request->input('address');
                $data->password=bcrypt($request->input('password'));
                $data->save();               
                DB::commit();
                $status = true;
            } catch (\Exception $e) {
                $data=$e->getMessage();
                $status = false;
                DB::rollback();
            }
            
        }
        else 
        {
            return response()->json([
                'data' => 'Attributes are missing',
                'status' => false
        ],200);
        }

        return response()->json([
            'data' => $data,
            'status' => $status
        ],200);
    }
    public function update(Request $request, $id)
    {        
             $update=User::where('id',$id)->update(
                 [
                     'name' => $request->name,
                     'address' => $request->address,
                     'mobile' => $request->mobile,
                     'type' => $request->type,
                     'status' => $request->status
 
                 ]);
             if($update)
             {
                 return response()->json(
                     [
                         'status'=> true,
                         'message'=> 'Success'
                     ], 200);    
             }
         return response()->json(
             [
                 'status'=> false,
                 'message'=> 'Failed, Try Again'
             ], 200);    
     }
     public function logout()
     {
         $clientIP = request()->ip();
         $user_id = Auth::id();
         // $now = new DateTime();
         // $max_id=ActivityLog::where('user_id', $user_id)->max('id');
         // ActivityLog::where('id', $max_id)->update([
         //     'updated_at'=> $now]);  // logout activity updated
        
        //  $userlog=new ActivityLog([      //to create user activity log..
        //      'admin_id' => $user_id,
        //      'user_id' => $user_id,
        //      'flag' => 'Log out',
        //      'ip' => $clientIP,
        //       ]);
        //  $userlog->save();
         Auth::logout();
         Session::flush();
         return Redirect::to('/');
     }
     public function avatar(Request $request)
     {
         $user_id = Auth::id();
         //return $request->all();
         $request->file('myFile')->store('public/uploads/avatar');
         $pic= '/storage/uploads/avatar/'.$request->myFile->hashName();   
         $update=User::where('id', $user_id)->update([
             'image' => $pic
         ]);
         if($update)
         {
          return response()->json([
              'data' => $pic,
              'status' => true
          ],200);
          }
          return response()->json([
              'data' => 'Failed',
              'status' => false
          ],200);
     }
     public function updatepassword(Request $request)
     {
          $update=User::where('id',$request->id)->update(
             [
                 'password'=>bcrypt($request->password),
                 'status' => 2
             ]
          );
          $data['password'] =$request->password;
          $data['email'] =$request->email;
          Mail::send('mailview', $data, function($message) use ($request) {
              $message->to( $request->email , $request->name )
              ->subject('Agent Password for Homeyfi');
          });
         return $update;
     }
     public function changePass(Request $request)
     {
         
 
         $request->validate([
             'newPassword' => ['required'],
             'confirmPassword' => ['same:newPassword'],
         ]);
         if(!Hash::check($request->oldPassword,Auth::user()->password))
         {
             return response()->json(
                 [
                     'status'=> false,
                     'message'=> 'Current Password dose not matched'
                 ], 200);
         }
         else
         {                     
             $update=User::find(auth()->user()->id)->update(['password'=> Hash::make($request->newPassword)]);  
             if($update)   
             {
                 return response()->json(
                     [
                         'status'=> true,
                         'message'=> 'Successfuly Changed'
                     ], 200);
             } 
             else
             {
                 return response()->json(
                     [
                         'status'=> false,
                         'message'=> 'Failed, Try again'
                     ], 200);
             }
 
         }
     }
}
