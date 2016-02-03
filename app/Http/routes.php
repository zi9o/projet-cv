


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

Route::get('confirm/{cne}','ConfirmController@confirm');


Route::group (['prefix' =>  'api'], function ()
{	
	Route::get('statFiliere', [
			'uses' => 'Api\CvController@statFiliere',
			'as' => 'statFiliere'
		]);

	Route::get('statCompetence/{filiere}', [
			'uses' => 'Api\CvController@statCompetence',
			'as' => 'statCompetence'
		])->where('filiere', '[0-9]+');

	Route::get('statCompetence', [
			'uses' => 'Api\CvController@statCompetence',
			'as' => 'statCompetence'
		])->where('filiere', '[0-9]+');

	Route::get('statVille', [
			'uses' => 'Api\CvController@statVille',
			'as' => 'statVille'
		]);

	Route::get('statVille/{filiere}', [
			'uses' => 'Api\CvController@statVille',
			'as' => 'statVille'
		])->where('filiere', '[0-9]+');


	Route::get('statEntreprise', [
			'uses' => 'Api\CvController@statEntreprise',
			'as' => 'statEntreprise'
		]);

	Route::get('statEntreprise/{filiere}', [
			'uses' => 'Api\CvController@statEntreprise',
			'as' => 'statEntreprise'
		])->where('filiere', '[0-9]+');

	Route::resource('etablissement', 'Api\EtablissementController') ;
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
			
			Route::resource('formation', 'Api\FormationController') ;
			Route::get('{id}/formation', [
				'uses' => 'Api\FormationController@formations',
				'as' => 'cv.formations'
			])->where('id', '[0-9]+');
			
			Route::resource('competence', 'Api\CompetenceController') ;
			Route::get('{id}/competence', [
				'uses' => 'Api\CompetenceController@competences',
				'as' => 'cv.competences'
			])->where('id', '[0-9]+');			
			
			Route::resource('experience', 'Api\ExperienceController') ;
			Route::get('{id}/experience', [
				'uses' => 'Api\ExperienceController@experiences',
				'as' => 'cv.experiences'
			])->where('id', '[0-9]+');
			
			Route::resource('loisir', 'Api\LoisirController') ;
			Route::get('{id}/loisir', [
				'uses' => 'Api\LoisirController@loisirs',
				'as' => 'cv.loisirs'
			])->where('id', '[0-9]+');
			
			Route::resource('langue', 'Api\LangueController') ;
			Route::get('{id}/langue', [
				'uses' => 'Api\LangueController@langues',
				'as' => 'cv.langues'
			])->where('id', '[0-9]+');
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

Route::get('/', function ()
{
	return view('welcome');
});


Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('api','Api\AuthController@logged');

    Route::get('home', 'HomeController@index');

    Route::get('user',[
		'uses' => 'UserController@index',
		'as' => 'user'
	]);

    Route::get('admin',[
		'uses' => 'AdminController@index',
		'as' => 'admin'
	]);

    Route::get('listecv',[
		'uses' => 'AdminController@liste',
		'as' => 'listecv'
	]);

    Route::get('etudiant',[
		'uses' => 'etudiantController@index',
		'as' => 'etudiant'
	]);

	Route::group (['prefix' =>  'etudiant'], function ()
	{
		Route::get('cv/{id}',[
			'uses' => 'cvController@show',
			'as' => 'cv.show'
		])->where('id', '[0-9]+');
		
		Route::get('cv/{id}/create',[
			'uses' => 'etudiantController@create',
			'as' => 'createcv'
		])->where('id', '[0-9]+');


		Route::get('cv/{id}/delete',[
			'uses' => 'etudiantController@destroy',
			'as' => 'deletecv'
		])->where('id', '[0-9]+');


		Route::post('cv/create',[
			'uses' => 'etudiantController@store',
			'as' => 'storecv'
		]);

		
		Route::get('cv',[
			'uses' => 'etudiantController@cv',
			'as' => 'cv'
		]);

		Route::get('cv/help', [
			'uses' => 'ConfirmController@help',
			'as' => 'cv.help'
		]);

});

});
