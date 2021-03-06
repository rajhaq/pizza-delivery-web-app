<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePizzasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('category_id');
            $table->string('name');
            $table->string('description');
            $table->string('image');
            $table->string('base_image')->nullabel();
            $table->string('size')->default('large');
            $table->integer('large');
            $table->integer('medium');
            $table->integer('small');
            $table->string('type')->default('pan');
            $table->integer('pan')->nullable();
            $table->integer('thin');
            $table->integer('cheesy');
            $table->integer('sfo')->nullable();
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
        Schema::dropIfExists('pizzas');
    }
}
