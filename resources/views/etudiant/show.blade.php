@extends('template')

@section('contenu')
    <?php  if (isset($etudiant['mes_cv'])) { extract($etudiant);  ?>
    	<p>mes cv</p>
    	@foreach ($mes_cv as $index => $cv)
            <div id="autre">&nbsp;</div>
               	<div id="photoProfil">
                    <img src="{{$photo}}" alt=""  width="100" height="100"/>
                </div>
                <div id="infosPersonnel">
                    <div><strong> nom du cv : </strong> {{ $cv->nom_cv }}</div>
                    <div><strong> lien video : </strong> {{ $cv->lienVideo }}</div>
       				{!! link_to_route('cv.show', 'details', [$cv->id], ['class' => 'lien']) !!}
            	</div>
            
        @endforeach                        
   <?php } else{?>

   		<center><h3>vous n'avez aucun cv</h3></center>
   	<?php }?>
      
                            
                    
@stop