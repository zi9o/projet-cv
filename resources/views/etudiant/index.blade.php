@extends('template')

@section('contenu')

<!-- BEGIN PAGE LEVEL PLUGINS -->
{!! HTML::style('assets/assets/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css') !!}
{!! HTML::style('assets/assets/global/plugins/bootstrap-modal/css/bootstrap-modal.css') !!}
<!-- END PAGE LEVEL PLUGINS -->

<!-- page d'accueil de l'étudiant -->
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
                                        <p class="small">{{$aujourdhui}}</p>
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


@stop