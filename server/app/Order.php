<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Order extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    public function item()
    {
       return $this->HasMany('App\OrderItem');
    }
}
