<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('guest_id')->nullable();
            $table->unsignedBigInteger('pizza_id')->nullable();
            $table->string('name')->nullable();
            $table->string('image')->nullable();
            $table->string('size')->nullable();
            $table->string('type')->nullable();
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->text('note')->nullable();
            $table->integer('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
