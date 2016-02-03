@extends('template')

@section('cv')
  {!! HTML::style('assets/css/miniaturecv.css') !!}
@endSection


@section('contenu')


<div class="row">
    <div class="col-sm-12">
        <div class="card-box">
            <!-- Slider/ Carousel -->
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default text-center slider-bg m-b-0" style="background: url(assets/images/big/img5.jpg);">
                        <div class="panel-body p-0">
                            <div class="">
                                <div id="owl-slider" class="owl-carousel">
                                    <div class="item">
                                        <h1><a href="#" class="text-custom font-600">Hey! Bienvenu(e) dans le générateur de cv...</a></h1>
                                        <p>&nbsp;</p>
                                        <p>
                                        <h4 style="color:#666666">
                                            Rédiger un curriculum vitae (cv) est un exercice ennuyeux mais capital. Elle doit être avant tout personnelle et la rédiger soi-même c'est mieux ! Néanmoins on peut parfois manquer d'imagination pour organiser son parcours, dans le cas de certains jobs. <br /><br />Heureusement <strong>cv-generator</strong>, vous propose un outil qui permet
                                            de créer, générer des <i><strong>cv</strong></i> de qualité en moins de 15 min et personnalisables à volonté. <br />
                                            <br />Oubliez les modèles de cv compliqués qui nous laissent souvent devant une feuille vierge ou presque. Créez un cv simple, entièrement gratuit, sans pub!
                                            <br />
                                        </h4>
                                        </p>

                                        <button class="btn btn-danger" 
                                                data-target="#custom-modal-CreateCV" data-toggle="modal"
                                                class="btn btn-primary waves-effect waves-light" data-animation="slidetogether" 
                                                data-overlaySpeed="200" data-overlayColor="#36404a">
                                            Commencez tout de suite...
                                        </button>
                                    </div><!-- /.item -->
                                </div><!-- /#tiles-slide-1 -->
                            </div><!-- /.panel-body -->
                        </div>
                    </div>
                </div>
            </div>  <!-- End row -->
        </div>
    </div>
</div> <!-- end row -->


<div class="row">
    <div class="col-sm-12">
        <div class="card-box">
            <!-- Slider/ Carousel -->
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default text-center slider-bg m-b-0" style="background: url(assets/images/big/img5.jpg);">
                        <div class="panel-body p-0">

                        <div class="">
                                <div id="owl-slider" class="owl-carousel">
                                    <div class="item">
                              

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

                                            <div style="clear:both; padding:0.95em;">
                                                <button class="btn btn-danger" 
                                                  data-target="#custom-modal-CreateCV" data-toggle="modal"
                                                      class="btn btn-primary waves-effect waves-light" data-animation="slidetogether" 
                                                        data-overlaySpeed="200" data-overlayColor="#36404a">
                                                      Commencez tout de suite...
                                                </button>
                                                
                                            </div>
                      
                              @endforeach                        
                           @else
                           <center><h3>vous n'avez aucun cv</h3></center>
                           @endif
                


                            </div>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

                
       
        </div>
    </div>
</div>
                     
                    
@stop