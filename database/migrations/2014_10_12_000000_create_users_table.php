<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     *
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')-> unique();
            $table->string('email')-> unique();
            $table->string('password', 60);
            $table->boolean('admin')->default(false);
            $table->integer('etudiant_id')->unsigned();
            $table->foreign('etudiant_id')
                    ->references('id')->on('etudiants')
                    ->onDelete('cascade');$table->rememberToken();
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
        Schema::drop('users');
    }
}
