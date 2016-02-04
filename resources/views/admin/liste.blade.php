@extends('template')

@section('contenu')
<div class="row">
    <div class="col-sm-8">
        <form role="form">
            <div class="form-group contact-search m-b-30">
                <input type="text" id="search" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white"><i class="fa fa-search"></i></button>
            </div> <!-- form-group -->
        </form>
    </div>


    <div class="col-md-4">
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
    </div>

</div>
<div class="row">
    <div class="col-sm-8">
        <center><h3><b>listes des étudiants</b></h3></center>
    </div>
</div>
<div class="row">
    <div class="col-lg-8">

        <div class="card-box m-b-10">
            <div class="table-box opport-box" id="etudiants">
                <div class="table-detail">
                    <img src='{{ asset("../storage/uploads/hqdefault.__33485.jpg")}}' alt="imrana" alt="img" class="img-circle thumb-lg m-r-15" />
                </div>

                <div class="table-detail">
                    <div class="member-info">
                        <h4 class="m-t-0"><b>DIALLO &nbsp;Imrana </b></h4>
                        <p class="text-dark m-b-5"><b>E-mail: </b> <span class="text-muted">dialloimran@gmail.com</span></p>
                    </div>
                </div>
                <!-- 
                <div class="table-detail lable-detail">
                        <span class="label label-info">Hot</span>
                </div>
                -->
                <div class="table-detail table-actions-bar">


                    <a class="accordion-toggle accordion-toggle-styled collapsed" 
                       data-toggle="collapse" data-parent="#etudiants" href="#etud">  mes cv</a>
                    <!-- <a href="#" class="btn btn-sm btn-primary waves-effect waves-light">mes cv</a>
                    -->
                </div>


            </div>

            <div id="etud" class="panel-collapse collapse">
                <div class="panel-body" style=" overflow-y:auto;">
                    <div class="col-md-12 col-sm-12">

                        <div class="portlet-body">
                            <div class="row static-info">

                                <a href="#" class="btn btn-sm btn-primary waves-effect waves-light">le nom du 1er cv</a>
                                <a href="#" class="btn btn-sm btn-primary waves-effect waves-light">le nom du 2ème cv</a>
                                <a href="#" class="btn btn-sm btn-primary waves-effect waves-light">...</a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>


        <br/><br/>




    </div>
</div>



@stop