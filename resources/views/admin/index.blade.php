@extends('template')

@section('contenu')

{!! HTML::style('assets/plugins/nvd3/build/nv.d3.min.css') !!}

<!-- bienvenue dans l'espace admin -->


<div class="row" ng-controller="statisticController">
    <div class="col-md-12">
        <!-- BEGIN ROW -->
        <div class="row" id="sortable_portlets" >
            <div class="col-md-6 column sortable">
                <!-- BEGIN CHART PORTLET-->
                <div class="portlet portlet-sortable light bordered" ng-init="initStatisticFiliere();">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="icon-bar-chart font-green-haze"></i>
                            <span class="caption-subject bold uppercase font-green-haze"><i ng-show="loadingStatisticFiliere" class="fa fa-spinner fa-spin"></i> Nombre de CV par filière</span>
                            <span class="caption-helper">    Illustrer les filieres active    </span>
                        </div>
                        
                        <div class="tools">
                            
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="javascript:;" class="fullscreen"> </a>
                            <a href="javascript:;" class="remove"> </a>

                        </div>
                        
                        <div class="actions col-md-3 col-md-offset-7">
                        <a href="#" class="btn btn-circle green btn-outline btn-sm">
                            <i class="fa fa-print"></i> Print </a>
                    </div>
                    </div>
                    
                    <div class="portlet-body">
                        <div id="chart_statFiliere" class="chart" style="height: 320px"> </div>
                    </div>
                </div>
                <!-- END CHART PORTLET-->
                <!-- empty sortable porlet required for each columns! -->
                <div class="portlet portlet-sortable-empty"> </div>
            </div>
            <div class="col-md-6 column sortable">
                <!-- END ROW -->
                <!-- BEGIN ROW -->

                <!-- BEGIN CHART PORTLET-->
                <div class="portlet portlet-sortable light bordered" ng-init="initStatisticCompetence();">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="icon-bar-chart font-green-haze"></i>
                            <span class="caption-subject bold uppercase font-green-haze"><i ng-show="loadingStatisticCompetence" class="fa fa-spinner fa-spin"></i>
                                Niveau de compétences</span>
                            <span class="caption-helper">      Niveau de compétences         </span>
                        </div>
                        
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="javascript:;" class="fullscreen"> </a>
                            <a href="javascript:;" class="remove"> </a>
                        </div>
                        <div class="actions col-md-10 ">

                        <div class="btn-group">
                            <a href="" class="btn dark btn-outline btn-circle btn-sm dropdown-toggle" 
                               data-toggle="dropdown" data-hover="dropdown" 
                               data-close-others="true"> Filtrage par filière
                                <span class="fa fa-angle-down"> </span>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li ng-class="{active :All}">
                                    <a href="javascript:;" ng-click="idFiliere = 0;
                                                initStatisticCompetence();"> Tout

                                    </a>
                                </li>
                                <li ng-class="{active :isGINFActive}">
                                    <a href="javascript:;" ng-click="idFiliere = 1;
                                                getStatisticCompetence();"> GINF

                                    </a>
                                </li>
                                <li ng-class="{active :isGINDActive}">
                                    <a href="javascript:;" ng-click="idFiliere = 2;
                                                getStatisticCompetence();"> GIND

                                    </a>
                                </li>
                                <li ng-class="{active :isGSEAActive}">
                                    <a href="javascript:;" ng-click="idFiliere = 3;
                                                getStatisticCompetence();"> GSEA

                                    </a>
                                </li>
                                <li ng-class="{active :isGSTRActive}">
                                    <a href="javascript:;" ng-click="idFiliere = 4;
                                                getStatisticCompetence();"> GSTR

                                    </a>
                                </li>
                                <li ng-class="{active :isG3EIActive}">
                                    <a href="javascript:;" ng-click="idFiliere = 5;
                                                getStatisticCompetence();"> G3EI

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <a href="" class="btn dark btn-outline btn-circle btn-sm dropdown-toggle" 
                               data-toggle="dropdown" data-hover="dropdown" 
                               data-close-others="true"> Filtrage par niveau
                                <span class="fa fa-angle-down"> </span>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li ng-class="{active :AllNiveau}">
                                    <a href="javascript:;" ng-click="idNiveau = 0;initStatisticCompetence();"> Tout

                                    </a>
                                </li>
                                <li ng-class="{active :isDebActive}">
                                    <a href="javascript:;" ng-click="idNiveau = 1;getStatisticCompetence();"> Débutant

                                    </a>
                                </li>
                                <li ng-class="{active :isIntActive}">
                                    <a href="javascript:;" ng-click="idNiveau = 2;getStatisticCompetence();"> Intermédiaire

                                    </a>
                                </li>
                                <li ng-class="{active :isAvaActive}">
                                    <a href="javascript:;" ng-click="idNiveau = 3;getStatisticCompetence();"> Avancé

                                    </a>
                                </li>
                                <li ng-class="{active :isExpActive}">
                                    <a href="javascript:;" ng-click="idNiveau = 4;getStatisticCompetence();"> Expert

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="btn btn-circle green btn-outline btn-sm">
                            <i class="fa fa-print"></i> Print </a>
                    </div>
                    </div>
                    


                    <div class="portlet-body">
                        <div id="chart_statCompetence" class="chart" style="height: 200px"> </div>
                        <div class="well margin-top-20">
                            <div class="row">
                                <div class="col-sm-3">
                                    <label class="text-left">Top Radius:</label>
                                    <input class="chart_statCompetence_chart_input" data-property="topRadius" type="range" min="0" max="1.5" value="1" step="0.01" /> </div>
                                <div class="col-sm-3">
                                    <label class="text-left">Angle:</label>
                                    <input class="chart_statCompetence_chart_input" data-property="angle" type="range" min="0" max="89" value="30" step="1" /> </div>
                                <div class="col-sm-3">
                                    <label class="text-left">Depth:</label>
                                    <input class="chart_statCompetence_chart_input" data-property="depth3D" type="range" min="1" max="120" value="40" step="1" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END CHART PORTLET-->
                <!-- empty sortable porlet required for each columns! -->
                <div class="portlet portlet-sortable-empty"> </div>
            </div>
        </div>
        <!-- END ROW -->
    </div>
</div>
@stop
