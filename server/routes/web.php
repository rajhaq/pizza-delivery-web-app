<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/logoutuser', 'dashboard\UserController@logout');
//resources
Route::prefix('/app')->group(function () {
    Route::resource('/dashboard', 'dashboard\DashboardController');
    Route::resource('/user', 'dashboard\UserController');
    Route::resource('/category', 'dashboard\CategoryController');
    Route::resource('/topping', 'dashboard\ToppingController');
    Route::resource('/pizza', 'dashboard\PizzaController');
    Route::resource('/folder', 'dashboard\ImageFolderController');
    Route::resource('/image', 'dashboard\ImageController');
    Route::resource('/order', 'dashboard\OrderController');

     
});
Route::prefix('/web')->group(function () {
    Route::resource('/category', 'api\CategoryController');
    Route::resource('/pizza', 'api\PizzaController');
    Route::resource('/cart', 'api\CartController');
    Route::resource('/order', 'api\OrderController');
    Route::resource('/topping', 'api\ToppingController');

     
});
Route::post('/app/changepassword', 'dashboard\UserController@changePass');
Route::post('/app/avatar','dashboard\UserController@avatar');
Route::get('/app/profile', 'dashboard\UserController@profile');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/{slug}', 'HomeController@index');
Route::get('/{slug}/{child}', 'HomeController@index');
