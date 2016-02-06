@extends('template')

@section('contenu')

<div class="search-page search-content-3" ng-controller="listeCVController" ng-init="init()">
    <div class="row">
        <div class="col-lg-4">
            <div class="search-filter ">
                
                <div class="search-label uppercase">Recherche par</div>
                <div class="input-icon right">
                    <i class="icon-magnifier"></i>
                    <input ng-model="q.$" id="search" type="text" class="form-control" placeholder="Filtrer par mots clés"> 
                </div>
                <div class="search-label uppercase">Filtrage par filière</div>
                <select class="form-control" ng-model="q.filiere.id">
                    <option value="">Tout</option>
                    <option value="1">GINF</option>
                    <option value="2">GIND</option>
                    <option value="3">GSEA</option>
                    <option value="4">GSTR</option>
                    <option value="5">G3EI</option>
                </select>
<!--                <div class="search-label uppercase">Date</div>
                <div class="input-icon right">
                    <i class="icon-calendar"></i>
                    <input class="form-control date-picker"  data-date-format="dd/mm/yyyy" type="text" placeholder="Date" />
                </div>-->
<button class="btn green bold uppercase btn-block" ng-click="init()">Update Search Results
    <i ng-show="loading" class="fa fa-spinner fa-spin"></i>
</button>
                <div class="search-filter-divider bg-grey-steel"></div>
<!--                <div class="row">
                    <div class="col-xs-6">
                        <button class="btn grey bold uppercase btn-block">Reset Search</button>
                    </div>
                    <div class="col-xs-6">
                        <button class="btn grey-cararra font-blue bold btn-block">Advanced Search</button>
                    </div>
                </div>-->
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
<div class="search-pagination pagination-rounded">
                <dir-pagination-controls boundary-links="true" ></dir-pagination-controls>
                
            </div>
                <div class="col-lg-12" ng-cloak dir-paginate="etudiant in etudiants | filter:q | itemsPerPage: pageSize" current-page="currentPage">

                    <div class="card-box m-b-10">
                        <div class="table-box opport-box" id="etudiant<%=etudiant.id%>">
                            <div class="table-detail">
                                <img ng-src="<%= '{{ asset('../storage/uploads')}}/' + etudiant.photo %>" alt="photo" class="img-circle thumb-lg m-r-15" />
                            </div>

                            <div class="table-detail" ng-cloak>
                                <div class="member-info">
                                    <h4 class="m-t-0"><b><%=etudiant.nom %> &nbsp;<%=etudiant.prenom %> </b></h4>
                                    <p class="text-dark m-b-5"><b>E-mail: </b> <span class="text-muted"><%=etudiant.email %></span></p>
                                </div>
                            </div>
                            <!-- 
                            <div class="table-detail lable-detail">
                                    <span class="label label-info">Hot</span>
                            </div>
                            -->
                            <div class="table-detail table-actions-bar">
                                <a class="accordion-toggle accordion-toggle-styled collapsed" 
                                   data-toggle="collapse" data-parent="#etudiant<%=etudiant.id%>" href="#etud<%=etudiant.id%>">Les CVs
                                </a>
                            </div>
                        </div>
                        <div id="etud<%=etudiant.id%>" class="panel-collapse collapse">
                            <div class="panel-body" style=" overflow-y:auto;">
                                <div class="col-md-12 col-sm-12">
                                    <div class="portlet-body">
                                        <div class="row static-info">
                                            <a ng-cloak style="margin-right: 10px;" ng-repeat="cv in etudiant.mes_cv" href="<%= '{{ url('etudiant/cv')}}/'+ cv.id%>"
                                               class="btn btn-sm btn-primary waves-effect waves-light"><%=cv.nomcv%>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-pagination pagination-rounded">
                <dir-pagination-controls boundary-links="true" ></dir-pagination-controls>
                
            </div>
        </div>
    </div>
</div>




@stop
@section('scriptsBefore')




@endsection
@section('scriptsAfter')


{!! HTML::script('AngularScripts/controllers/listeCVController.js') !!}
@endsection
