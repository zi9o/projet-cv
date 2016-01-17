@extends('template')

@section('contenu')
	
    <div>page d'accueil de l'étudiant</div>
                	{{var_dump(Auth::user()->admin)}}

                	{{var_dump(Auth::user()->etudiant)}}
@stop