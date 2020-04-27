<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePizzaToppingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizza_toppings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pizza_id')->nullable();
            $table->unsignedBigInteger('topping_id')->nullable();
            $table->timestamps();

            $table->foreign('topping_id')
            ->references('id')->on('toppings')
            ->onDelete('cascade');
            $table->foreign('pizza_id')
            ->references('id')->on('pizzas')
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
        Schema::dropIfExists('pizza_toppings');
    }
}
