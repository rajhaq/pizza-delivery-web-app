<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Pizza extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    public function toppings()
    {
       return $this->belongsTomany('App\Topping', 'pizza_toppings', 'pizza_id', 'topping_id');
    }
    public function topping()
    {
       return $this->belongsTomany('App\Topping', 'pizza_toppings', 'pizza_id', 'topping_id');
    }
}

