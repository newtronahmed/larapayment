<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = ['user_from', 'user_to', 'amount'];
    public function userFrom()
    {
        return $this->belongsTo(User::class, 'user_from', 'id');
    }

    public function userTo()
    {
        return $this->belongsTo(User::class, 'user_to', 'id');
    }

}
