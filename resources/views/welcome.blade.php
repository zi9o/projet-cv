@extends('template')

@section('contenu')

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box">
                                    
                                    <div class="row">
                                   
                                        <div class="col-md-8">
                                            
                                            <center>
                                        
                                     
                                            <!-- START carousel-->
                                            <div id="carousel-example-captions" data-ride="carousel" class="carousel slide">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carousel-example-captions" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carousel-example-captions" data-slide-to="1"></li>
                                                    <li data-target="#carousel-example-captions" data-slide-to="2"></li>
                                                    <li data-target="#carousel-example-captions" data-slide-to="3"></li>
                                                </ol>
                                                <div role="listbox" class="carousel-inner">
                                                    <div class="item active">
                                                        <img src="assets/images/big/img2.jpg" alt="First slide image">
                                                        <div class="carousel-caption">
                                                            <h3 class="text-white font-600">Bienvenue dans votre platform <strong class="text-custom">cv-generator</strong></h3>
                                                            <p>
                                                                Vous étes Ensatiens? plus bésoin de vous tracassez pour créer votre CV.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <img src="assets/images/big/img3.jpg" alt="Second slide image">
                                                        <div class="carousel-caption">
                                                            <h3 class="text-green font-600">Qu'est ce que donc cv-générator?</h3>
                                                            <p>
                                                                C'est un platform de création de cv dédié aux étudiants de l'ENSA de Tanger
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                         <a href="{{ URL::route('cv.help') }}">
                                                             <img src="assets/images/big/img4.jpg" alt="Third slide image">
                                                            <div class="carousel-caption">
                                                                <h3 class="text-white font-600">Comment proceder?</h3>
                                                                <p>
                                                                    Et bien c'est simple, connectez-vous et renseigner vos informations nécessaires pour la génération d'un cv.
                                                                </p>
                                                            </div>
                                                         </a>
                                                    </div>

                                                    <div class="item">
                                                         <a href="{{ URL::route('cv.help') }}">
                                                             <img src="assets/images/big/img6.jpg" alt="Third slide image">
                                                            <div class="carousel-caption">
                                                                <h3 class="text-white font-600">&nbsp;</h3>
                                                                <p>&nbsp;</p>
                                                            </div>
                                                         </a>
                                                    </div>
                                                </div>
                                                <a href="#carousel-example-captions" role="button" data-slide="prev" class="left carousel-control"> <span aria-hidden="true" class="fa fa-angle-left"></span> <span class="sr-only">Previous</span> </a>
                                                <a href="#carousel-example-captions" role="button" data-slide="next" class="right carousel-control"> <span aria-hidden="true" class="fa fa-angle-right"></span> <span class="sr-only">Next</span> </a>
                                            </div>
                                            <!-- END carousel-->
                                             </center> 
                                        
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>            
@stop
