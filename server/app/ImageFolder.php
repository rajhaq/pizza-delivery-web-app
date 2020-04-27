<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ImageFolder extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    protected $dates = ['deleted_at'];
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
    public function scopeNoRoot($query)
    {
        return $query->where('id','!=', 1);
    }
    
}
