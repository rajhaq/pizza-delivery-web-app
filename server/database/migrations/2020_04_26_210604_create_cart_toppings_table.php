<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartToppingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_toppings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cart_id')->nullable();
            $table->unsignedBigInteger('topping_id')->nullable();
            $table->string('name')->nullable();
            $table->integer('price')->nullable();
            $table->integer('image')->nullable();
            $table->timestamps();

            $table->foreign('cart_id')
            ->references('id')->on('carts')
            ->onDelete('cascade');
            $table->foreign('topping_id')
            ->references('id')->on('toppings')
            ->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart_toppings');
    }
}
