


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

Route::get('confirm','ConfirmController@confirm');

Route::group (['prefix' =>  'api'], function ()
{
	Route::resource('etudiant', 'Api\EtudiantController');
        Route::post('etudiant/upload', 'Api\EtudiantController@upload');
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



// etudiant





//Routes AngularJS views

//Route::get('cv-section-basic', function()
//{
//    return view('etudiant.sections.informationsBasic');
//});

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

Route::get('/', function()
{
	return view('welcome');
});


Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');

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

});
