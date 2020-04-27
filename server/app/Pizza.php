<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Pizza extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    public function topping()
    {
       return $this->HasMany('App\PizzaTopping');
    }
}

