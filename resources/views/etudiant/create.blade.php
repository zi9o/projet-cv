@extends('template')

@section('contenu')

<!--Footable-->
{!! HTML::style('assets/plugins/footable/css/footable.core.css') !!}
{!! HTML::style('assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css') !!}


<!-- for modal fadeIn -->
{!! HTML::style('assets/plugins/custombox/dist/custombox.min.css') !!}

<!-- timePicker -->
{!! HTML::style('assets/plugins/timepicker/bootstrap-timepicker.min.css') !!}

<!-- activate ng upload file -->
{!! HTML::script('ng-file-upload/ng-file-upload-shim.min.js') !!} <!-- for no html5 browsers support -->
{!! HTML::script('ng-file-upload/ng-file-upload.min.js') !!}
<div class="CV"> <!-- Start content -->	
    <div id="main">
        <div id="cv">

            <!--            <div class="controls">
                            <span id="notice" class="notice"> </span>
                            <a href="https://cvmkr.com/Pages/help" target="_blank" class="button" id="bt-help">
                                <span class="ui-icon ui-icon-info"></span> Help</a>
                            <a href="#" class="button" id="bt-preview"><span class="ui-icon ui-icon-search"></span> Quick preview</a>
                            <a href="#" class="button" id="bt-save"><span class="ui-icon ui-icon-disk"></span> Save</a>
            
                            <a href="#" class="button" id="bt-download"><span class="ui-icon ui-icon-check"></span> Download</a>
                        </div>-->
            <div class="clear"> </div>


            <div class="options">	
                <ul id="cvsections" class="noul ui-sortable">
                    <li class="item section-basic">
                        <a href="#">Informations</a>
                    </li>
                    <li class="item section-work">
                        <a href="#">Expérience professionnelle</a>
                    </li>
                    <li class="item section-qualifications">
                        <a href="#">Compétences</a>
                    </li>
                    <li class="item section-education">
                        <a href="#">Formations </a>
                    </li>
                    <li class="item section-interests">
                        <a href="#">Langues</a>
                    </li>
                    <li class="item section-references">
                        <a href="#">Centres d'intêret</a>
                    </li>
                </ul>
<!--                <p>
                    <a href="#" class="button" id="bt-add-section"><span class="ui-icon ui-icon-plusthick"></span> Add a new section</a>
                </p>-->
<!--                <p class="msg">* Click and drag section names in the above list to reorder sections in your CV.</p>
                <p class="msg">* If you leave the fields in a section empty, the section will not appear in your CV.</p>-->
            </div>

            <form name="cv" id="cvform" class="edit" enctype="multipart/form-data" target="postframe" novalidate="">

                <div id="section-basic" class="section " style="display: none;" ng-controller="infoBasicController">

                    <h2 class="title">
                        <span class="name">Informations</span>
                    </h2>
                    <div class="sets">
                        <div class="set">
                            <input type="hidden" class="action" name="action" value="cv">
                            <input type="hidden" class="style" name="style" value="executive">
                            <input type="hidden" class="type" name="type" value="pdf">
                            <input type="hidden" class="page_size" name="page_size" value="pdf">
                            <input type="hidden" class="section_name" name="sections[basic][section_name]" value="Informations">

                            <p class="field field_">
                                <label>Nom de famille</label>
                                <input maxlength="50" type="text" ng-model="etudiant.nom" class="text" placeholder="Nom" />
                            </p>

                            <p class="field field_">
                                <label>Prénom</label>
                                <input maxlength="50" type="text" ng-model="etudiant.prenom" class="text" placeholder="Prénom" />
                            </p>


                            <p class="field field_">
                                <label for="email">Adresse E-mail</label>
                                <input maxlength="100" type="email" ng-model="etudiant.email" id="email" class="text" placeholder='e-mail' />
                            </p>

                            <p class="field field_">
                                <label>Numéro de téléphone</label>
                                <input maxlength="100" type="text" ng-model="etudiant.telephone" class="text" placeholder='+(212)' />
<!--                                    <span class="info">If you have more than one number, separate with commas</span>-->
                            </p>

                            <p class="field field_">
                                <label>Addresse</label>
                                <input maxlength="100" type="text" ng-model="etudiant.adresse" class="text" placeholder='Hay Lalla Meriem'/>
                            </p>
                            <p class="field field_">
                                <label>Situation familialle</label>
                                <select ng-model="etudiant.situation">
                                    <option ng-repeat="option in situation.availableOptions" value="<%= option.name %>">
                                        <%= option.name %>
                                    </option>
                                </select>

                            </p>
                            <hr>
                            <div class="btn btn-primary" ngf-select="upload($file,2)" ngf-pattern="'image/*'"
                                 ngf-accept="'image/*'" ngf-max-size="20MB" ngf-min-height="100" 
                                 ngf-resize="{width: 100, height: 100}">Uploader une nouvelle photo</div> 
                            <i ng-show="loadingUploadPhoto" class="fa fa-spinner fa-spin"></i>

                            {{-- < img src = "{{asset('assets/images/').'/'.$imgsrc}}"> --}}
                            <p class="field field_">
                                <label for="photo">Photo</label>
                                <img class="img-responsive" ng-cloack 
                                     ng-src="<%= '{{ asset('../storage/uploads')}}/' + etudiant.photo %>"
                                     style="width: inherit; height: inherit;">
                                <span class="info">gif, jpg, png, jpeg<br>320 x 400 px</span>
                            </p>

                        </div>
                        <div class="set row">
                            <div class="col col-md-2 col-md-offset-5">
                                <button class="btn btn-primary btn-lg" ng-click="updateInfoBasic(etudiant)" >Sauvegarder</button>
                                <i ng-show="loading" class="fa fa-spinner fa-spin"></i>
                            </div>
                        </div>
                    </div>




                </div>

                <div id="section-work" class="section addable ui-sortable" style="display: none;" ng-controller="experienceController">
                    <h2 class="title">
                        <span class="name">Expérience professionnelle</span>
                        <!--<a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>-->
                        <!--                                                <a href="#" class="ui-icon ui-icon-carat-2-n-s collapse" title="Regrouper les éléments pour faciliter leur tri">
                                                                            Développer / Regrouper</a>-->
                    </h2>
                    <div class="sets">
                        <div class="set" > 
                            <button class="btn btn-primary waves-effect waves-light" 
                                    data-toggle="modal" data-target="#con-close-modal">Ajouter une expérience</button>
                            
                        </div>
                        
                    </div>
                    <!-- for fooTable-->
                    <!---- forModal ----->
                    <!--<a href="#" class="button bt_cloneset"><span class="ui-icon ui-icon-plusthick"></span> Ajouter un élément</a>-->
                </div>

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



        <script type="text/javascript">
                    var CV_INIT = true, CV_ID = "", CV_DATA = null, CV_USER = '',
                    CV_SECTIONS =
            {
            "basic": {"addable": false, "renamable": false, "name": "Informations"},
                    "work": {"addable": true, "renamable": false, "name": "Expérience professionnelle"},
                    "qualifications": {"addable": true, "renamable": false, "name": "Compétences"},
                    "education": {"addable": true, "renamable": false, "name": "Formations"},
                    "interests": {"addable": false, "renamable": false, "name": "Langues"},
                    "references": {"addable": false, "renamable": false, "name": "Centres d'intêret"}},
                    CV_ORDER = ["basic", "work", "qualifications", "education", "interests", "references"], CV_MAX_ADDABLES = 2,
                    CV_MAX_SECTIONS = 0, CV_PHOTO_FILES = ["gif", "jpg", "png", "jpeg"], CV_PHOTO_SIZE = 900;</script>

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

<!-- Modal -->
<div id="con-close-modal" ng-controller="experienceController" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog"> 
        <div class="modal-content"> 
            <div class="modal-header"> 
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                <h4 class="modal-title">Expérience professionnelle</h4> 
            </div> 
            <div class="modal-body"> 
                <div class="row"> 
                    <div class="col-md-12"> 
                        <div class="form-group"> 
                            <label for="field-1" class="control-label">Experience</label> 
                            <input type="text" class="form-control" ng-model="experience.intitule" id="field-1" placeholder="Website Developer"> 
                        </div> 
                    </div> 

                </div> 
                <div class="row"> 
                    <div class="col-md-6"> 
                        <div class="form-group"> 
                            <label for="field-3" class="control-label">Entreprise</label> 
                            <input type="text" class="form-control" ng-model="experience.organisation" id="field-2" placeholder="Evosolution"> 
                        </div> 
                    </div> 
                    <div class="col-md-6"> 
                        <div class="form-group"> 
                            <label for="field-1" class="control-label">Ville</label> 
                            <input type="text" class="form-control" ng-model="experience.ville" id="field-3" placeholder="Casablanca"> 
                        </div> 
                    </div> 
                </div> 
                <div class="row"> 
                    <div class="col-md-6"> 
                        <div class="form-group"> 
                            <label for="field-4" class="control-label">Date début</label> 
                            <input type="text" class="form-control" ng-model="experience.date_dedut" id="field-4" placeholder="01/03/2016" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask> 
                        </div> 
                    </div> 
                    <div class="col-md-6"> 
                        <div class="form-group"> 
                            <label for="field-5" class="control-label">Date fin</label> 
                            <input type="text" class="form-control" ng-model="experience.date_fin" id="field-5" placeholder="30/09/2016" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask> 
                        </div> 
                    </div>
                </div> 
                <div class="row"> 
                    <div class="col-md-12"> 
                        <div class="form-group no-margin"> 
                            <label for="field-7" class="control-label">Autres informations</label> 
                            <textarea class="form-control autogrow" ng-model="experience.description" id="field-7" placeholder="Décrire votre expérience" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div class="modal-footer"> 
                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Annuler</button> 
                <button type="button" class="btn btn-info waves-effect waves-light" ng-click="addExperience()">Sauvegarder</button> 
            </div> 
        </div> 
    </div>
</div><!-- /.modal -->

@stop
