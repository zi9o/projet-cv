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
						{{$etudiant->dateNaissance}} <br/>
						{{$etudiant->email}}
					</p>
					
				</div>
				<div class="photo">
					<img src="{{$etudiant->photo}}" alt="{{$etudiant->nom}}" height="160" width="130">
				</div>
			</div>

			<!-- @if ($formations:: ?>
				
			@endif ?> -->
			<div class="section">
				<h2>Formation</h2>
				<div class="sec-gauche" id="forma-gauche">
					@foreach ($formations as $formation)
					 	<p>2013-2016</p>
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

			<div class="section">
				<h2>Expériences Professionneles</h2>
				<div class="sec-gauche">
					<p>2016<br/><span class="duree">(6 mois)</span></p>
					<p>2013-2016<br/><span class="duree">(6 mois)</span></p>
					<p>2011-2013<br/><span class="duree">(14 mois)</span></p>
					<p>2008-2011<br/><span class="duree">(16 mois)</span></p>
				</div>
				<div class="sec-droite">
					<p><span class="titre">imrandiallo.com : </span><br/>crétion du blog pour tutoriels de programmation, conseil en e-commerce, e-marketing et referencement</p>
					<p><span class="titre">Prestashop, services addons</span><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
					<p><span class="titre">Prestashop, services addons</span><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<p><span class="titre">Mon parcours : </span><br/>élève ingénieure en Génie Informatique à l’Ecole Nationale des Sciences appliquées de Tanger, passionné des nouvelles technologies, j’aspire devenir développeur.</p>
					
				</div>
			</div>

			<div class="section">
				<h2>Langues parlées & autres compérences</h2>
				<div class="sec-gauche">
					<p>Anglais<br/>Espagnol</p>
					<p>Informatique</p>
				</div>
				<div class="sec-droite">
					<p>Courant (TOEIF : 910)<br/>Courant (TOEIF : 910)</p>
					<p>Vero minus velit molestiae.</p>
					
				</div>
			</div>

			<div class="section">
				<h2>Autres exp & centres d'interet</h2>
				<div class="sec-gauche">
					<p>2013-2016</p>
					<p>Mai 2016<br/><span class="duree">(24 jours)</span></p>
					<p>interets :</p>
				</div>
				<div class="sec-droite">
					<p><span class="titre">Membre du club CSC (Computer Science Club), </span><br/></p>
					<p><span class="titre">Intérêt pour les nouvelles technologies, la littérature,  le sport et les jeux de société.</span><br/></p>
					<p><span class="titre">Intérêt pour les nouvelles technologies, la littérature,  le sport et les jeux de société.</span><br/></p>
				</div>
			</div>


		</div>
	
@stop