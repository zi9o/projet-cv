@extends('template')

@section('contenu')

<!-- BEGIN PAGE LEVEL PLUGINS -->
{!! HTML::style('assets/assets/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css') !!}
{!! HTML::style('assets/assets/global/plugins/bootstrap-modal/css/bootstrap-modal.css') !!}
<!-- END PAGE LEVEL PLUGINS -->

<!-- BEGIN PAGE LEVEL PLUGINS -->
{!! HTML::style('assets/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css') !!}

{!! HTML::style('assets/assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css') !!}
<!-- END PAGE LEVEL PLUGINS -->   
<style type="text/css">
    input[type=text],input[type=email]
    {
        width: 90%;
    }
</style>
<!--            <div class="controls">
                            <span id="notice" class="notice"> </span>
                            <a href="https://cvmkr.com/Pages/help" target="_blank" class="button" id="bt-help">
                                <span class="ui-icon ui-icon-info"></span> Help</a>
                            <a href="#" class="button" id="bt-preview"><span class="ui-icon ui-icon-search"></span> Quick preview</a>
                            <a href="#" class="button" id="bt-save"><span class="ui-icon ui-icon-disk"></span> Save</a>
            
                            <a href="#" class="button" id="bt-download"><span class="ui-icon ui-icon-check"></span> Download</a>
                        </div>-->
<div class="row"> 
    <div class="col-lg-12"> 
        <div class="tabs-vertical-env"> 
            <ul class="nav tabs-vertical"> 
                <li class="active">
                    <a href="#section-basic" data-toggle="tab" aria-expanded="true">Informations</a>
                </li> 
                <li class="">
                    <a href="#section-work" data-toggle="tab" aria-expanded="false">Expérience professionnelle</a>
                </li> 
                <li class="">
                    <a href="#section-competance" data-toggle="tab" aria-expanded="false">Compétences</a>
                </li> 
                <li class="">
                    <a href="#section-formation" data-toggle="tab" aria-expanded="false">Formations</a>
                </li> 
                <li class="">
                    <a href="#section-langue" data-toggle="tab" aria-expanded="false">Langues</a>
                </li> 
                <li class="">
                    <a href="#section-interest" data-toggle="tab" aria-expanded="false">Centres d'intêret</a>
                </li> 
            </ul> 

            <div class="tab-content"> 

                <div class="tab-pane active" id="section-basic" ng-controller="infoBasicController"> 
                    <form class="form-horizontal " role="form" id="form_sample_2" enctype="multipart/form-data" >
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="col-sm-8">
                                                <h4 class="m-t-0 header-title"><b>Informations</b></h4>
                                                <p class="text-muted font-13 m-b-30">
                                                    Some basic informations.
                                                </p>
                                            </div>
                                            <div class="col-sm-4">
                                                <button type="submit" class="btn btn-primary btn-lg" ng-click="updateInfoBasic(etudiant)" >Sauvegarder   <i ng-show="loading" class="fa fa-spinner fa-spin"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-body">
                                                <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button> You have some form errors. Please check below. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button> Your form validation is successful! </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label" for="etudiant_nom">Nom de famille
                                                                <span class="required"> * </span>
                                                            </label>
                                                        </div>
                                                        <div class="input-icon right">
                                                            <i class="fa"></i>
                                                            <input maxlength="25" type="text" id="etudiant_nom" class="form-control" ng-model="etudiant.nom" placeholder="Nom">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label"  for="etudiant_prenom">Prénom
                                                                <span class="required"> * </span>
                                                            </label>
                                                        </div>
                                                        <div class="input-icon right">
                                                            <i class="fa"></i>
                                                            <input maxlength="25" id="etudiant_prenom" type="text" class="form-control" ng-model="etudiant.prenom" placeholder="Prénom" >
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label" for="etudiant_email">Addresse E-mail
                                                                <span class="required"> * </span>
                                                            </label>
                                                        </div>
                                                        <div class="input-icon right">
                                                            <i class="fa"></i>
                                                            <input maxlength="100" required="" type="email" ng-model="etudiant.email" id="etudiant_email" class="form-control" placeholder="Email">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label" for="etudiant_numTelephone" >Numéro de téléphone
                                                                <span class="required"> * </span>
                                                            </label>
                                                        </div>
                                                        <div class="input-icon right">
                                                            <i class="fa"></i>
                                                            <input maxlength="25" ng-model="etudiant.telephone" id="etudiant_numTelephone" placeholder='+(212)' type="text" class="form-control" >
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label"for="etudiant_adresse">Adresse</label>
                                                        </div>
                                                        <input type="text" class="form-control" id="etudiant_adresse" maxlength="100" ng-model="etudiant.adresse" placeholder="Hay Lalla Meriem">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="control-label" for="etudiant_situation">Situation familialle</label>
                                                        </div>

                                                        <select ng-cloak="" style="width: 90%" class="form-control" id="etudiant_situation" ng-model="etudiant.situation">
                                                            <option ng-repeat="option in situation.availableOptions" value="<%= option.name %>">
                                                                <%= option.name %>
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="row">

                                                            <div class="col-md-1">
                                                                <label for="etudiant_photo">Photo</label>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <img id="etudiant_photo" class="img img-responsive" ng-cloack 
                                                                     ng-src="<%= '{{ asset('../storage/uploads')}}/' + etudiant.photo %>"
                                                                     style="width: inherit; height: inherit;">
                                                                <span class="info">gif, jpg, png, jpeg<br>320 x 400 px</span>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="btn btn-primary" ngf-select="upload($file,2)" ngf-pattern="'image/*'"
                                                                     ngf-accept="'image/*'" ngf-max-size="20MB" >Uploader une nouvelle photo  <i ng-show="loadingUploadPhoto" class="fa fa-spinner fa-spin"></i>
                                                                </div> 

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {{-- < img src = "{{asset('assets/images/').'/'.$imgsrc}}"> --}}



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="tab-pane" id="section-work" ng-controller="experienceController"> 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-box"  ng-init="initExperience();" >
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="m-t-0 header-title"><b>Expérience professionnelle</b></h4>
                                        <p class="text-muted font-13 m-b-30">
                                            Informations sur vos experiences.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-lg-12">

                                        <div class="panel-group accordion" id="experiences">

                                            <div class="panel panel-default" ng-repeat='exp in Experiences track by exp.id'>
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a class="accordion-toggle accordion-toggle-styled collapsed" 
                                                           data-toggle="collapse" data-parent="#experiences" href="#experience<%=exp.id %>">  <%=exp.intitule %></a>
                                                    </h4>
                                                </div>
                                                <div id="experience<%=exp.id %>" class="panel-collapse collapse">
                                                    <div class="panel-body" style="height:200px; overflow-y:auto;">
                                                        <div class="col-md-12 col-sm-12">

                                                            <div class="portlet-body">
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Entreprise: </div>
                                                                    <div class="col-md-7 value"> <%=exp.organisation %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Date début: </div>
                                                                    <div class="col-md-7 value"> <%=exp.date_dedut | date:'dd/MM/yyyy' %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Date fin: </div>
                                                                    <div class="col-md-7 value"> <%=exp.date_fin | date:'dd/MM/yyyy' %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Ville: </div>
                                                                    <div class="col-md-7 value"> <%=exp.ville %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Description: </div>
                                                                    <div class="col-md-7 value"> <%=exp.description %></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="panel-footer clearfix">
                                                        <div class="pull-right">
                                                            <button class="btn btn-success btn-xs" ng-click="prepareUpdateExperience(exp, $index)"
                                                                    data-target="#custom-modal-EditExperience" data-toggle="modal"
                                                                    class="btn btn-primary waves-effect waves-light" data-animation="fadein" 
                                                                    data-overlaySpeed="200" data-overlayColor="#36404a">
                                                                <span class="glyphicon glyphicon-edit" ></span>Modifier
                                                            </button>
                                                            <button class="btn btn-danger btn-xs" ng-click="prepareDeleteExperience($index)"
                                                                    data-target="#custom-modal-DeleteExperience" data-toggle="modal"
                                                                    class="btn btn-primary waves-effect waves-light" data-animation="slidetogether" 
                                                                    data-overlaySpeed="200" data-overlayColor="#36404a">
                                                                <span class="glyphicon glyphicon-remove" ></span>Supprimer
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <a
                                            data-target="#custom-modal-AddExperience" data-toggle="modal"
                                            class="btn btn-primary waves-effect waves-light" data-animation="fadein" 
                                            data-overlaySpeed="200" data-overlayColor="#36404a">Ajouter une expérience
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Add Experience Modal -->
                    <div id="custom-modal-AddExperience" class="modal fade" data-width="780" tabindex="-1" data-backdrop="static" data-keyboard="false">
                        <form class="form-horizontal " >
                            <div class="modal-header">
                                <h4 class="custom-modal-title">Expérience professionnelle</h4> 
                            </div> 
                            <div class="modal-body">
                                <div class="row"> 
                                    <div class="col-md-12"> 
                                        <div class="form-group"> 
                                            <label for="field-1" class="control-label">Experience</label> 
                                            <input type="text" class="form-control" required ng-model="experience.intitule" id="field-1" placeholder="Website Developer"> 
                                        </div> 
                                    </div> 

                                </div> 
                                <div class="row"> 
                                    <div class="col-md-6"> 
                                        <div class="form-group"> 
                                            <label for="field-3" class="control-label">Entreprise</label> 
                                            <input type="text" class="form-control" required ng-model="experience.organisation" id="field-2" placeholder="Evosolution"> 
                                        </div> 
                                    </div> 
                                    <div class="col-md-6"> 
                                        <div class="form-group"> 
                                            <label for="field-1" class="control-label">Ville</label> 
                                            <input type="text" class="form-control" required ng-model="experience.ville" id="field-3" placeholder="Casablanca"> 
                                        </div> 
                                    </div> 
                                </div> 
                                <div class="row"> 
                                    <div class="col-md-6"> 
                                        <div class="form-group"> 
                                            <label for="field-4" class="control-label">Date début</label> 
                                            <input type="date" class="form-control" required ng-model="experience.date_dedut" id="field-4" placeholder="01/03/2016" > 
                                        </div> 
                                    </div> 
                                    <div class="col-md-6"> 
                                        <div class="form-group"> 
                                            <label for="field-5" class="control-label">Date fin</label> 
                                            <input type="date" class="form-control" required ng-model="experience.date_fin" id="field-5" placeholder="30/09/2016" > 
                                        </div> 
                                    </div>
                                </div> 
                                <div class="row"> 
                                    <div class="col-md-12"> 
                                        <div class="form-group no-margin"> 
                                            <label for="field-7" class="control-label">Autres informations</label> 
                                            <textarea class="form-control autogrow" ng-model="experience.description" id="field-7" placeholder="Décrire votre expérience" style="overflow: auto; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                                            <span class="info">Détails supplémentaires comme les responsabilités, résultats, etc.</span>
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                            <div class="modal-footer"> 
                                <button type="button" data-dismiss="modal" ng-click="experience = null" class="btn btn-default waves-effect" >Annuler</button> 
                                <button type="submit" data-dismiss="modal" class="btn btn-info waves-effect waves-light" ng-click="addExperience()">Sauvegarder</button> 
                            </div> 
                        </form>
                    </div><!-- End Add Experience Modal -->
                    <!-- Delete Experience Modal-->
                    <div id="custom-modal-DeleteExperience" class="modal fade" data-width="780" tabindex="-1" data-backdrop="static" data-keyboard="false">
                        <div class="modal-header">
                            <button aria-hidden="true" class="bootbox-close-button close"
                                    data-dismiss="modal" type="button">×</button>
                            <h4 class="modal-title">Confirmation</h4>
                        </div>
                        <div class="modal-body">
                            <div class="bootbox-body">
                               Êtes-vous sûr de vouloir supprimer ?
                            </div>
                        </div>
                        <div class="modal-footer">
                            
                            <button class="btn red"  data-dismiss="modal" type="button" ng-click="deleteExperience()">Supprimer
                            </button>
                            <button class="btn blue"
                                     data-dismiss="modal" type="button">Annuler
                            </button>
                        </div>
                    </div><!-- End Delete Experience Modal -->
                    <!-- Edit Experience Modal -->
                    <div id="custom-modal-EditExperience" class="modal fade" data-width="780" tabindex="-1" data-backdrop="static" data-keyboard="false">

                        <div class="modal-header">
                            <h4 class="custom-modal-title">Expérience professionnelle</h4> 
                        </div> 
                        <div class="modal-body">
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label for="field-1" class="control-label">Experience</label> 
                                        <input type="text" class="form-control" required ng-model="EditExperience.intitule" id="field-1" placeholder="Website Developer"> 
                                    </div> 
                                </div> 

                            </div> 
                            <div class="row"> 
                                <div class="col-md-6"> 
                                    <div class="form-group"> 
                                        <label for="field-3" class="control-label">Entreprise</label> 
                                        <input type="text" class="form-control" required ng-model="EditExperience.organisation" id="field-2" placeholder="Evosolution"> 
                                    </div> 
                                </div> 
                                <div class="col-md-6"> 
                                    <div class="form-group"> 
                                        <label for="field-1" class="control-label">Ville</label> 
                                        <input type="text" class="form-control" required ng-model="EditExperience.ville" id="field-3" placeholder="Casablanca"> 
                                    </div> 
                                </div> 
                            </div> 
                            <div class="row"> 
                                <div class="col-md-6"> 
                                    <div class="form-group"> 
                                        <label for="field-4" class="control-label">Date début</label> 
                                        <input type="date" class="form-control" required ng-model="EditExperience.date_dedut" id="field-4" placeholder="01/03/2016" > 
                                    </div> 
                                </div> 
                                <div class="col-md-6"> 
                                    <div class="form-group"> 
                                        <label for="field-5" class="control-label">Date fin</label> 
                                        <input type="date" class="form-control" required ng-model="EditExperience.date_fin" id="field-5" placeholder="30/09/2016" > 
                                    </div> 
                                </div>
                            </div> 
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group no-margin"> 
                                        <label for="field-7" class="control-label">Autres informations</label> 
                                        <textarea class="form-control autogrow" ng-model="EditExperience.description" id="field-7" placeholder="Décrire votre expérience" style="overflow: auto; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                                        <span class="info">Détails supplémentaires comme les responsabilités, résultats, etc.</span>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div class="modal-footer"> 
                            <button type="button" data-dismiss="modal" ng-click="EditExperience = null" class="btn btn-default waves-effect" >Annuler</button> 
                            <button type="button" data-dismiss="modal" class="btn btn-info waves-effect waves-light" ng-click="updateExperience(EditExperience)">Sauvegarder</button> 
                        </div> 

                    </div><!-- End Edit Experience Modal -->
                </div> 
                <div class="tab-pane" id="section-competance"> 

                </div> 
                <div class="tab-pane" id="section-formation" ng-controller="formationController"> 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-box"  ng-init="initFormation();" >
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="m-t-0 header-title"><b>Formation</b></h4>
                                        <p class="text-muted font-13 m-b-30">
                                            Informations sur vos formations .
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-lg-12">

                                        <div class="panel-group accordion" id="formations">

                                            <div class="panel panel-default" ng-repeat='formation in Formations track by formation.id'>
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a class="accordion-toggle accordion-toggle-styled collapsed" 
                                                           data-toggle="collapse" data-parent="#formations" href="#formation<%=formation.id %>">  <%=formation.intitule %></a>
                                                    </h4>
                                                </div>
                                                <div id="formation<%=formation.id %>" class="panel-collapse collapse">
                                                    <div class="panel-body" style="height:200px; overflow-y:auto;">
                                                        <div class="col-md-12 col-sm-12">

                                                            <div class="portlet-body">
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Établissement: </div>
                                                                    <div class="col-md-7 value"> <%=formation.etablissement.code %> / <%=formation.etablissement.ville %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Date début: </div>
                                                                    <div class="col-md-7 value"> <%=formation.date_dedut | date:'dd/MM/yyyy' %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Date fin: </div>
                                                                    <div class="col-md-7 value"> <%=formation.date_fin | date:'dd/MM/yyyy' %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Diplôme: </div>
                                                                    <div class="col-md-7 value"> <%=formation.diplome %></div>
                                                                </div>
                                                                <div class="row static-info">
                                                                    <div class="col-md-5 name"> Mention: </div>
                                                                    <div class="col-md-7 value"> <%=formation.mention %></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="panel-footer clearfix">
                                                        <div class="pull-right">
                                                            <button class="btn btn-success btn-xs" ng-click="prepareUpdateFormation(formation, $index)"
                                                                    data-target="#custom-modal-EditFormation" data-toggle="modal"
                                                                    class="btn btn-primary waves-effect waves-light" data-animation="fadein" 
                                                                    data-overlaySpeed="200" data-overlayColor="#36404a">
                                                                <span class="glyphicon glyphicon-edit" ></span>Modifier
                                                            </button>
                                                            <button class="btn btn-danger btn-xs" ng-click="prepareDeleteFormation($index)"
                                                                    data-target="#custom-modal-DeleteFormation" data-toggle="modal"
                                                                    class="btn btn-primary waves-effect waves-light" data-animation="slidetogether" 
                                                                    data-overlaySpeed="200" data-overlayColor="#36404a">
                                                                <span class="glyphicon glyphicon-remove" ></span>Supprimer
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <a
                                            data-target="#custom-modal-AddFormation" data-toggle="modal"
                                            class="btn btn-primary waves-effect waves-light" data-animation="fadein" 
                                            data-overlaySpeed="200" data-overlayColor="#36404a">Ajouter une formation
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
                <div class="tab-pane" id="section-langue"> 
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p> 
                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p> 
                </div> 
                <div class="tab-pane" id="section-interest"> 
                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p> 
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div> 
            </div> 
        </div> 
    </div> 
</div>
<div class="CV"> <!-- Start content -->	
    <div id="main">
        <div id="cv">


            <div class="clear"> </div>




            <form name="cv" id="cvform" class="edit" enctype="multipart/form-data" target="postframe" novalidate="">




                <div id="section-qualifications" class="section addable ui-sortable" style="display: none;">
                    <input type="hidden" class="section_name" name="sections[qualifications][section_name]" value="Compétences">
                    <h2 class="title">
                        <span class="name">Compétences</span>
                        <!--<a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>-->
                    </h2>
                    <div class="sets">
                        <div class="set">
                            <p class="field field_"><label>Compétences</label>
                            <div class="cleditorMain" style="width: 658px; height: 250px;">
                                <div class="cleditorToolbar" style="height: 27px;">
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bold" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Italic" style="background-position: -24px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Underline" style="background-position: -48px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bullets" style="background-position: -288px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Numbering" style="background-position: -312px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Indent" style="background-position: -360px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Outdent" style="background-position: -336px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Insert page-break" style="background-position: -648px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Undo" disabled="disabled" style="background-position: -480px 50%;"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Redo" disabled="disabled" style="background-position: -504px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Remove Formatting" disabled="disabled" style="background-position: -264px 50%;"></div>
                                    </div>
                                </div>
                                <textarea name="sections[qualifications][data][info][]" class="textarea" style="display: none; width: 658px; height: 223px;"></textarea>
                                <iframe frameborder="0" src="javascript:true;" style="width: 658px; height: 223px;"></iframe>
                            </div>
                            <span class="info">Certifications, accréditations que vous avez reçu par exemple</span></p>
                            <hr>
                        </div>
                    </div>
                </div>

                <div id="section-education" class="section addable ui-sortable" style="display: none;">
                    <h2 class="title">
                        <span class="name">Formation</span>
                        <!--                        <a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>
                                                <a href="#" class="ui-icon ui-icon-carat-2-n-s collapse" title="Regrouper les éléments pour faciliter leur tri">Développer / Regrouper</a>-->
                    </h2>
                    <div class="sets">
                        <div class="set">
                            <input type="hidden" class="section_name" name="sections[education][section_name]" value="Formation">
                            <p class="field field_"><label>Titre</label><input maxlength="100" type="text" name="sections[education][data][course][]" class="text" value=""></p>
                            <p class="field field_"><label>Établissement</label><input maxlength="100" type="text" name="sections[education][data][school][]" class="text" value=""></p>
                            <p class="field field_"><label>Date de début</label><input maxlength="100" type="text" name="sections[education][data][start][]" class="text" value="">
                                <span class="info">Ex: Janvier 2005</span>
                            </p>
                            <p class="field field_"><label>Date de fin</label><input maxlength="100" type="text" name="sections[education][data][end][]" class="text" value="">
                                <span class="info">Ex: Janvier 2009, ou Actuellement</span>
                            </p>
                            <p class="field field_"><label>Autres informations</label>
                            <div class="cleditorMain" style="width: 658px; height: 250px;">
                                <div class="cleditorToolbar" style="height: 27px;">
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bold" style="background-color: transparent;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Italic" style="background-color: transparent; background-position: -24px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Underline" style="background-position: -48px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bullets" style="background-position: -288px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Numbering" style="background-position: -312px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Indent" style="background-position: -360px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Outdent" style="background-position: -336px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Insert page-break" style="background-position: -648px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Undo" style="background-position: -480px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Redo" style="background-position: -504px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Remove Formatting" style="background-position: -264px 50%;" disabled="disabled"></div>
                                    </div>
                                </div>
                                <textarea name="sections[education][data][info][]" class="textarea" id="t1" style="display: none; width: 658px; height: 223px;"></textarea>
                                <iframe frameborder="0" src="javascript:true;" style="width: 658px; height: 223px;"></iframe>
                            </div>
                            <span class="info">Détails supplémentaires comme la description de la formation, notes, etc.</span></p>
                            <hr>
                            <a href="#" class="button bt_delete_set"><span class="ui-icon ui-icon-closethick"></span>Supprimer</a>
                        </div>
                    </div>
                    <a href="#" class="button bt_cloneset"><span class="ui-icon ui-icon-plusthick"></span> Ajouter un élément</a>
                </div>

                <div id="section-interests" class="section addable ui-sortable" style="display: none;">
                    <input type="hidden" class="section_name" name="sections[interests][section_name]" value="Centres d'intêret">
                    <h2 class="title">
                        <span class="name">Centres d'intêret</span>
                        <!--<a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>-->
                    </h2>
                    <div class="sets">
                        <div class="set">
                            <p class="field field_"><label>Centres d'intêret</label>
                            <div class="cleditorMain" style="width: 658px; height: 250px;">
                                <div class="cleditorToolbar" style="height: 27px;">
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bold" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Italic" style="background-position: -24px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Underline" style="background-position: -48px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Bullets" style="background-position: -288px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Numbering" style="background-position: -312px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Indent" style="background-position: -360px 50%;" disabled="disabled"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Outdent" style="background-position: -336px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Insert page-break" style="background-position: -648px 50%;" disabled="disabled"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Undo" disabled="disabled" style="background-position: -480px 50%;"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Redo" disabled="disabled" style="background-position: -504px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Remove Formatting" disabled="disabled" style="background-position: -264px 50%;"></div>
                                    </div>
                                </div>
                                <textarea name="sections[interests][data][info][]" class="textarea" style="display: none; width: 658px; height: 223px;"></textarea>
                                <iframe frameborder="0" src="javascript:true;" style="width: 658px; height: 223px;"></iframe>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="section-references" class="section addable ui-sortable" style="display: none;">
                    <input type="hidden" class="section_name" name="sections[references][section_name]" value="Références">
                    <h2 class="title">
                        <span class="name">Références</span>
                        <!--<a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>-->
                    </h2>
                    <div class="sets">
                        <div class="set">
                            <p class="field field_"><label>Références</label>
                            <div class="cleditorMain" style="width: 658px; height: 250px;">
                                <div class="cleditorToolbar" style="height: 27px;">
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton" title="Bold"></div>
                                        <div class="cleditorButton" title="Italic" style="background-position: -24px 50%;"></div>
                                        <div class="cleditorButton" title="Underline" style="background-position: -48px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton" title="Bullets" style="background-position: -288px 50%;"></div>
                                        <div class="cleditorButton" title="Numbering" style="background-color: transparent; background-position: -312px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton" title="Indent" style="background-position: -360px 50%;"></div>
                                        <div class="cleditorButton" title="Outdent" style="background-position: -336px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton" title="Insert page-break" style="background-position: -648px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Undo" disabled="disabled" style="background-position: -480px 50%;"></div>
                                        <div class="cleditorButton cleditorDisabled" title="Redo" disabled="disabled" style="background-color: transparent; background-position: -504px 50%;"></div>
                                        <div class="cleditorDivider"></div>
                                    </div>
                                    <div class="cleditorGroup">
                                        <div class="cleditorButton cleditorDisabled" title="Remove Formatting" disabled="disabled" style="background-position: -264px 50%;"></div>
                                    </div>
                                </div>
                                <textarea name="sections[references][data][info][]" class="textarea" style="display: none; width: 658px; height: 223px;">Références disponibles sur demande.</textarea>
                                <iframe frameborder="0" src="javascript:true;" style="width: 658px; height: 223px;"></iframe>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            <div class="clear"> </div>
        </div>

        <iframe id="postframe" name="postframe" src=""></iframe>



        <noscript>&lt;h2&gt;You need to have javascript enabled in your browser to use this feature.
        &lt;/h2&gt;To know how, &lt;a href="https://www.google.com/adsense/support/bin/answer.py?hl=en&amp;answer=12654"&gt;click here&lt;/a&gt;.
        </noscript>



        <div class="clear"> </div>
        <div id="download-prompt" class="invisible">
            <div class="prompt-optionset">
                <div id="choose-style" class="optionset">
                    Style<div class="clear"> </div>
                    <p class="executive">
                        <label for="style-executive">Executive</label>
                        <input checked="" id="style-executive" type="radio" name="style" class="style" value="executive">
                    </p>
                    <p class="elegant">
                        <label for="style-elegant">Elegant</label>
                        <input id="style-elegant" type="radio" name="style" class="style" value="elegant">
                    </p>
                    <p class="bold">
                        <label for="style-bold">Bold</label>
                        <input id="style-bold" type="radio" name="style" class="style" value="bold">
                    </p>
                    <p class="literateur">
                        <label for="style-literateur">Literateur</label>
                        <input id="style-literateur" type="radio" name="style" class="style" value="literateur">
                    </p>
                    <p class="finesse">
                        <label for="style-finesse">Finesse</label>
                        <input id="style-finesse" type="radio" name="style" class="style" value="finesse">
                    </p>
                    <p class="metro">
                        <label for="style-metro">Metro</label>
                        <input id="style-metro" type="radio" name="style" class="style" value="metro">
                    </p>
                    <div class="clear"> </div>
                </div>

                <div id="choose-type" class="optionset">
                    Type<br>
                    <select name="type" class="type">
                        <option value="pdf">PDF</option>
                        <option value="html">HTML</option>
                        <option value="txt">TXT</option>
                    </select>
                    <div class="clear"> </div>
                </div>

                <div id="choose-size" class="optionset">
                    Page size<br>
                    <select name="page_size" class="page_size">
                        <option value="A4">A4</option>
                        <option value="letter">US Letter</option>
                    </select>
                    <div class="clear"> </div>
                </div>

                <div id="share-options" class="invisible optionset">
                    URL to share (<a href="" class="url" target="_blank">view</a>)<br>
                    <input type="text" id="share-link" value="">

                    <div class="publish">
                        <label>Unpublish<input type="radio" class="visibility" name="publish" value="unpublish" checked=""></label>
                        <label>Publish<input type="radio" class="visibility" name="publish" value="publish"></label>
                    </div>

                    <div class="addthis_toolbox addthis_default_style">
                    </div>
                </div>
            </div>
        </div>	
    </div>

</div>


<script>
            window.onload = function() {
            $('input').maxlength({
            alwaysShow: false,
                    warningClass: "label label-success",
                    limitReachedClass: "label label-danger",
                    separator: ' out of ',
                    preText: 'You typed ',
                    postText: ' chars available.',
                    validate: true
            });
            };
</script>
@stop
