@extends('template')

@section('cv')
  {!! HTML::style('assets/css/miniaturecv.css') !!}
@endSection


@section('contenu')
@if($mes_cv)

    
      @foreach ($mes_cv as $index => $cv)


        <div class="col-lg-3">


            <div class="portlet-widgets">
                  <a href="{{ URL::route('createcv', $cv['id']) }}"><i class="ion-edit"></i></a>
                  <span class="divider"></span>
                  <a data-toggle="collapse" data-parent="#accordion1" href="#bg-default">&nbsp;</i></a>
                  <span class="divider"></span>
                  <a href="{{ URL::route('deletecv', $cv['id']) }}" data-toggle="remove"><i class="ion-close-round"></i></a>
              </div>

            <div class="card-box"  style="height:400px;">
              
              
                
              <a href="{{ URL::route('cv.show', $cv['id']) }}">


                <div class="page">
                  <div class="infophoto">
                    <div class="info">
                      <p>
                        <strong>{{$nom}}&nbsp;{{$prenom}}</strong><br/>
                        
                      </p>
                     
                    </div>
                    <div class="photo">
                      <img src='{{ asset("../storage/uploads/team1.jpg")}}' alt="Photo diallo imran" height="45" width="35">
                    </div>
                  </div>

                  <div class="section">
                    <h2>Formation</h2><hr/>
                    
                  </div>

                  <div class="section">
                    <h2>Expériences Professionneles</h2><hr/>
                    
                  </div>

                  <div class="section">
                    <h2>Langues parlées</h2><hr/>
                    
                  </div>

                  <div class="section">
                    <h2>Centres d'interet</h2><hr/>
                    
                  </div>
                </div>

              </a>



              <div id="autre">&nbsp;</div>
                
                <div id="infosPersonnel">

                    <div><strong><a href="{{ URL::route('cv.show', $cv['id']) }}">{{ $cv['nomcv'] }}</a></strong></div>
                    
                    @if ($cv['lienVideo'])
                        <div><strong> lien video : </strong> {{ $cv['lienVideo'] }}</div>
                    @endif
                    
              </div>

            </div>
        </div>

              
            
        @endforeach                        
   @else
   <center><h3>vous n'avez aucun cv</h3></center>
   @endif
      
                            
                    
@stop