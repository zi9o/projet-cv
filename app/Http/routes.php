


<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::group (['prefix' =>  'api'], function ()
{
	Route::resource('etudiant', 'Api\EtudiantController');
	Route::group(['prefix' =>  'etudiant'], function (){
		Route::resource('cv', 'Api\CvController');
		Route::get('filiere/{id}', [
			'uses' => 'Api\EtudiantController@etudiantsfiliere',
			'as' => 'filiere.etudiants'
		])->where('id', '[0-9]+');
		Route::group (['prefix' =>  'cv'], function ()
		{
			// Route::get('/etudiant/{id}', 'CvController@');
			// Route::get('/', 'CvController');
			Route::resource('formation', 'Api\FormationController') ;
			Route::resource('etablissement', 'Api\EtablissementController') ;
			Route::resource('competence', 'Api\CompetenceController') ;

				/******           nawal           *******/

			Route::resource('experience', 'Api\ExperienceController') ;
			Route::resource('loisir', 'Api\LoisirController') ;
			Route::resource('langue', 'Api\LangueController') ;
		});
	});
});



Route::get('home', '\Bestmomo\Scafold\Http\Controllers\HomeController@index');

// Authentication routes...
Route::get('login', 'Auth\AuthController@getLogin');
Route::post('login', 'Auth\AuthController@postLogin');
Route::get('logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('register', 'Auth\AuthController@getRegister');
Route::post('register', 'Auth\AuthController@postRegister');

// Password reset link request routes...
Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');

// Password reset routes...
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');

// etudiant



Route::get('etudiant',[
		'uses' => 'etudiantController@index',
		'as' => 'etudiant'
	]);

Route::group (['prefix' =>  'etudiant'], function ()
{
	Route::get('cv/{id}',[
		'uses' => 'etudiantController@view',
		'as' => 'cv.show'
	])->where('id', '[0-9]+');
	Route::get('cv/create',[
		'uses' => 'etudiantController@create',
		'as' => 'createcv'
	]);
	Route::get('cv',[
		'uses' => 'etudiantController@cv',
		'as' => 'cv'
	]);

});


// // Admin
// Route::get('admin', [
// 	'uses' => 'AdminCvController@admin',
// 	'as' => 'admin',
// 	'middleware' => 'admin'
// ]);

// Route::get('edit/{id}', [
// 	'uses' => 'etudiantCvController@edit',
// 	'as' => 'edit'
// ])->where('id', '[0-9]+');

// Route::post('edit/{id}', [
// 	'uses' => 'etudiantCvController@update',
// 	'as' => 'edit'
// ])->where('id', '[0-9]+');


// Route::get('create', [
// 	'uses' => 'etudiantCvController@create',
// 	'as' => 'create'
// ]);

// Route::get('show', [
// 	'uses' => 'etudiantCvController@show',
// 	'as' => 'show'
// ]);
// Route::get('view', [
// 	'uses' => 'etudiantCvController@view',
// 	'as' => 'view'
// ]);

// Route::post('create', [
// 	'uses' => 'etudiantCvController@store',
// 	'as' => 'store'
// ]);

// Route::get('help', [
// 	'uses' => 'etudiantCvController@help',
// 	'as' => 'help'
// ]);


// Route::get('/', function () {
//     return view('welcome');
// });


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

// Route::group(['middleware' => ['web']], function () {
//     //
// });
