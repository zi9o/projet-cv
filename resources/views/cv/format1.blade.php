@extends('template')

@section('cv')
	{!! HTML::style('assets/css/format1.css') !!}
@endSection

@section('contenu')
    <?php extract($cv) ?>
		<div class="page">
			<div class="infophoto">
				<div class="info">
					<p>
						<strong>{{$etudiant->nom}}&nbsp;{{$etudiant->prenom}}</strong><br/>
						Né le {{$etudiant->dateNaissance}}
					</p>
					<p>
						{{$etudiant->adresse}}<br/>
						{{$etudiant->telephone}}<br/>
						{{$etudiant->email}}
					</p>
					
				</div>
				<div class="photo">
					<img src='{{ asset("../storage/uploads/$etudiant->photo")}}' alt="{{$etudiant->nom}}" height="160" width="130">
				</div>
			</div>

			@if($formations)
				<div class="section">
					<h2>Formations</h2>
					<div class="sec-gauche" id="forma-gauche">
						@foreach ($formations as $formation)
						 	<p>{{$formation->date_dedut}}-{{$formation->date_fin}}</p>
						@endforeach
					</div>
					<div class="sec-droite">
						@foreach ($formations as $formation)
						 	<p>
						 		<span class="titre">{{$formation->intitule}} : {{$formation->mention}}</span><br/>
						 		{{$formation->diplome}}
						 	</p>							
						@endforeach
					</div>
				</div>

			@endif

			@if($experiences)
				<div class="section">
					<h2>Expériences Professionneles</h2>
					<div class="sec-gauche" id="forma-gauche">
						@foreach ($experiences as $experience)
						 	<p>{{$experience->date_dedut}}-{{$experience->date_fin}}</p>
						@endforeach
					</div>
					<div class="sec-droite">
						@foreach ($experiences as $experience)
						 	<p>
						 		<span class="titre">{{$experience->intitule}} : {{$experience->organisation}} ({{$experience->ville}})</span><br/>
						 		{{$experience->description}}
						 	</p>							
						@endforeach
					</div>
			    </div>

			@endif
			
			@if($langues)
				<div class="section">
					<h2>Langues parlées </h2>
					<div class="sec-gauche" id="lan-gauche">
						@foreach ($langues as $langue)
							<p>{{$langue->intitule}} : </p>
						@endforeach
					</div>
					<div class="sec-droite">
						@foreach ($langues as $langue)
							<p>
							 	<span>{{$langue->niveau}}</span><br/>
							 	
							</p>							
						@endforeach
					</div>
				</div>

			@endif
			
			@if($loisirs)
				<div class="section">
					<h2>Centre d'interets </h2>
					<div class="sec" id="loi-gauche">
						@foreach ($loisirs as $loisir)
							<p>{{$loisir->description}} </p>
						@endforeach
					</div>
					
				</div>

			@endif

		</div>
	
@stop