<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->nullable();
            $table->unsignedBigInteger('pizza_id')->nullable();
            $table->string('name')->nullable();
            $table->string('size')->nullable();
            $table->string('type')->nullable();
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->text('note')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('order_id')
            ->references('id')->on('orders')
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
        Schema::dropIfExists('order_items');
    }
}
