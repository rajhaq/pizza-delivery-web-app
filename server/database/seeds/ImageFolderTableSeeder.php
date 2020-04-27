<?php

use Illuminate\Database\Seeder;

class ImageFolderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('image_folders')->insert([
            'id'=> 1,
            'user_id'=> 1,
            'name' => 'Root',
            'description' => '',
            'parent_id' => 1,
            'status' => 1,
        ]);
    }
}
