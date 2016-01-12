<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

	protected $table = 'users' ;

	private function getData()
	{
		return [	                
					[
						'name' => 'dialloimrana',
			            'email' => 'dialloimran@gmail.com',
			            'password' => bcrypt('lelouma'),
			            'admin' => true,
			            'etudiant_id' => 1,

					],

					[
						'name' => 'elfakhryzakaria',
			            'email' => 'elfakhry.zakaria@gmail.com',
			            'password' => bcrypt('zakaria'),
			            'admin' => false,
			            'etudiant_id' => 2,

					],

					[
						'name' => 'boudcharnawal',
			            'email' => 'boudchar.nawal@gmail.com',
			            'password' => bcrypt('nawal'),
			            'admin' => false,
			            'etudiant_id' => 3,

					]
			   ];
	}

	/**
     * Run the database seeds.
     *
     * @return void
     */
	public function run()
	{
		if (!isset($this->table)) {
			throw new Exception("No table specified", 1);
			
		}

		DB::table($this->table)->delete() ;

		DB::table($this->table)->insert($this->getData());
	}
    
  
}
