@extends('template')

@section('cv')
    {!! HTML::style('assets/css/cv.css') !!}
@endsection

@section('contenu')                  
    <?php extract($cv) ?>

    <div id="main">
        <div id="photo">
        <img src="{{$etudiant->photo}}" alt="" />
    </div>
    <div class="header photo">
    
        <h1 id="title">{{$etudiant->nom}} {{ $etudiant->prenom}}</h1>
        <div class="basic-info section">
            <div class="set">
                    <div class="r">
                        <p class="address"><span class="value">{{$etudiant->adresse}}</span></p>
                        <p class="email"><span class="value">{{$etudiant->email}}</span></p>
                        <p class="phone"><span class="value">{{$etudiant->telephone}}</span></p>
                        <p class="phone"><span class="value">{{$etudiant->situation}}</span></p>
                    </div>
                <div class="clear"> </div>
            </div><!-- set //-->
            <div class="clear"> </div>
        </div><!-- basic-info //-->
    </div><div class="clear"> </div> 
    <div class="section section-work">
        <h2 class="title">Expérience professionnelle</h2>
        <div class="set">
            <div class="item">
                @foreach ($experiences as $experience)
                    <h3><span class="company l">{{$experience->organisation}}</span>
                        <span class="date r">{{$experience->date_dedut}} &mdash; {{$experience->date_fin}}</span>
                    </h3>
                    <span class="clear"> </span>
                    <span class="job_title">desciption : </span><span class="info"></span>{{$experiences[0]->description}}<span class="clear"> </span>
                @endforeach
            </div>
        </div>
        <div class="clear"> </div>
    </div>
    <div class="section section-education">
            <h2 class="title">Formation</h2>
            <div class="set">
                @foreach ($formations as $formation)
                    <div class="item">
                            <h3><span class="course l">{{$formation->intitule}}</span>
                        <span class="date r">{{$formation->date_dedut}} &mdash; {{$formation->date_fin}}</span>
                            </h3>
                        <span class="clear"> </span>
                        <span class="school">ecole : {{$formation->etablissement->code}} de {{$formation->etablissement->ville}}</span>
                        <br/>
                        <span class="info">
                            {{$formation->diplome}}
                        </span><span class="clear"> </span>
                    </div>
                @endforeach
            </div>
            <div class="clear"> </div>
        </div>
            <div class="section section-interests">
            <h2 class="title">Centres d'intêret</h2>
            <div class="set">
                        <div class="item">
                            <span class="info"><strong>football,</strong> baskelball</span>
                        </div>
                    </div>
            <div class="clear"> </div>
        </div>
            <div class="section section-references">
            <h2 class="title">Références</h2>
            <div class="set">
                        <div class="item">
                            <span class="info">Références disponibles sur demande.</span>
                        </div>
                    </div>
            <div class="clear"> </div>
        </div>
    </div>
    
                    
@endsection