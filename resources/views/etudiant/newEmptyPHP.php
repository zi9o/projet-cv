<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Créer un nouveau CV - CV Maker</title>
        <meta name="description" content="Créez, sauvegardez, publiez, et partagez vos CV gratuitement">
        <meta name="keywords" 

              <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300&amp;subset=latin,latin-ext" rel="stylesheet" type="text/css">
        <link href="https://cvmkr.com/public/?css=Member,ui,cleditor" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="https://cvmkr.com/public/?js=cleditor,global"></script>
        <link rel="shortcut icon" href="https://cvmkr.com/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
        <meta name="robots" content="index,follow">
        <link rel="image_src" href="http://cvmkr.com/images/thumbnail.jpg">
        <script type="text/javascript" src="chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js"></script>
    </head>
    <body class="CV">
        <div id="wrap">
            <div id="header">
                <div id="bar">
                    <div class="content">
                        <p class="tag">
                            Créez, sauvegardez, publiez, et partagez vos CV gratuitement<!-- <a href="https://cvmkr.com/fr/Pages/about" class="more">En savoir plus</a> //-->
                        </p>
                        <ul class="nav noul">
                            <li><a href="https://cvmkr.com/fr/Jobs/jobs">Offres d'emploi</a></li>
                            <li class="ico login"><a href="https://cvmkr.com/fr/Member/">S'identifier / S'inscrire</a></li>
                        </ul>
                        <div class="language">
                            <select id="language" class="fr">
                                <option value="en" class="en">English</option>
                                <option value="ar" class="ar">العربية</option>
                                <option value="bg" class="bg">Български</option>
                                <option value="cz" class="cz">Čeština</option>
                                <option value="da" class="da">Dansk</option>
                                <option value="de" class="de">Deutsch</option>
                                <option value="ee" class="ee">Eesti keel</option>
                                <option value="ge" class="ge">ქართული</option>
                                <option value="nl" class="nl">Dutch</option>
                                <option value="es" class="es">Español</option>
                                <option value="fa" class="fa">فارسی</option>
                                <option value="fr" class="fr">Français</option>
                                <option value="gl" class="gl">Galician</option>
                                <option value="gr" class="gr">Έλληνικά</option>
                                <option value="hr" class="hr">Hrvatski</option>
                                <option value="hu" class="hu">Hungarian</option>
                                <option value="it" class="it">Italiano</option>
                                <option value="iw" class="iw">עברית</option>
                                <option value="ko" class="ko">한국어</option>
                                <option value="nn" class="nn">Norsk</option>
                                <option value="pl" class="pl">Polski</option>
                                <option value="br" class="br">Português (br)</option>
                                <option value="pt" class="pt">Português (pt)</option>
                                <option value="ro" class="ro">Român</option>
                                <option value="ru" class="ru">Pусский</option>
                                <option value="sl" class="sl">Slovenščina</option>
                                <option value="sk" class="sk">Slovenský</option>
                                <option value="sq" class="sq">Shqip</option>
                                <option value="fi" class="fi">Suomi</option>
                                <option value="sv" class="sv">Svenska</option>
                                <option value="tr" class="tr">Türkçe</option>
                                <option value="uk" class="uk">Українська</option>
                                <option value="vn" class="vn">Tiếng Việt</option>
                                <option value="ml" class="ml">മലയാളം</option>
                                <option value="zh" class="zh">中文</option>
                                <option value="zht" class="zht">繁體中文</option>
                            </select>
                        </div>
                        <div class="clear"> </div>
                    </div>
                    <!-- content //-->
                </div>
                <!-- #bar //-->
                <div id="head">
                    <div class="content">
                        <a class="logo" href="https://cvmkr.com/"><img src="https://cvmkr.com/images/logo.png" alt="CV Maker"></a>
                        <ul class="stats noul">
                            <li>
                                <span class="number">6,508,728</span>
                                téléchargements         
                            </li>
                            <li class="r">
                                <span class="number">2,606,116</span>
                                CV enregistrés          
                            </li>
                        </ul>
                        <div class="clear"> </div>
                    </div>
                </div>
                <!-- #head // -->
                <div class="clear"> </div>
            </div>
            <!-- #header //-->
            <div id="main">
                <div id="jobs-toast">
                    &nbsp;
                </div>
                <div id="cv" style="display: block;">
                    <p class="notice"><strong>Vous ne vous êtes pas identifié.</strong> 
                        Vous pouvez télécharger le CV, mais vous aurez à vous identifier pour le sauvegarder. Cliquez sur 'Sauvegarder' pour vous identifier ou vous inscrire.</p>
                    <div class="controls">
                        <span id="notice" class="notice"> </span>
                        <a href="https://cvmkr.com/fr/Pages/help" target="_blank" class="button" id="bt-help"><span class="ui-icon ui-icon-info"></span> Aide</a>
                        <a href="#" class="button" id="bt-preview"><span class="ui-icon ui-icon-search"></span> Aperçu rapide</a>
                        <a href="#" class="button" id="bt-save"><span class="ui-icon ui-icon-disk"></span> Sauvegarder</a>
                        <a href="#" class="button" id="bt-download"><span class="ui-icon ui-icon-check"></span> Télécharger</a>
                    </div>
                    <div class="clear"> </div>
                    <div class="options">
                        <ul id="cvsections" class="noul ui-sortable">
                            <li class="item section-basic"><a href="#">Informations</a></li>
                            <li class="item section-work"><a href="#">Expérience professionnelle</a></li>
                            <li class="item section-qualifications"><a href="#">Compétences</a></li>
                            <li class="item section-education"><a href="#">Formation</a></li>
                            <li class="item section-interests"><a href="#">Centres d'intêret</a></li>
                            <li class="item section-references selected"><a href="#">Références</a></li>
                        </ul>
                        <p>
                            <a href="#" class="button" id="bt-add-section"><span class="ui-icon ui-icon-plusthick"></span> Ajouter une nouvelle section</a>
                        </p>
                        <p class="msg">* Cliquez sur les noms des sections dans la liste ci-dessus et glissez-les pour réorganiser les sections dans votre CV.</p>
                        <p class="msg">* Si vous laissez vides les champs d'une section, celle-ci n'apparaitra pas sur votre CV.</p>
                    </div>
                    <form name="cv" method="post" action="" id="cvform" class="edit" enctype="multipart/form-data" target="postframe">
                        <div id="section-basic" class="section " style="display: none;">
                            <h2 class="title"><span class="name">Informations</span></h2>
                            <div class="sets">
                                <div class="set">
                                    <input type="hidden" class="action" name="action" value="preview">
                                    <input type="hidden" class="style" name="style" value="bold">
                                    <input type="hidden" class="type" name="type" value="pdf">
                                    <input type="hidden" class="page_size" name="page_size" value="pdf">
                                    <input type="hidden" class="section_name" name="sections[basic][section_name]" value="Informations">
                                    <p class="field field_"><label>Nom complet</label><input maxlength="100" type="text" name="sections[basic][data][fullname]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Adresse email</label><input maxlength="100" type="text" name="sections[basic][data][email]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Numéros de téléphone</label><input maxlength="100" type="text" name="sections[basic][data][phone]" class="text" value="">
                                        <span class="info">Si vous avez plus d'un numéro, séparez-les par des virgules</span>
                                    </p>
                                    <p class="field field_"><label>Sites internet</label><input maxlength="100" type="text" name="sections[basic][data][website]" class="text" value="">
                                        <span class="info">Si vous avez plus d'une URL, séparez-les par des virgules</span>
                                    </p>
                                    <hr>
                                    <p class="field field_"><label>Ligne 1 de l'adresse</label><input maxlength="100" type="text" name="sections[basic][data][address1]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Ligne 2 de l'adresse</label><input maxlength="100" type="text" name="sections[basic][data][address2]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Ligne 3 de l'adresse</label><input maxlength="100" type="text" name="sections[basic][data][address3]" class="text" value="">
                                    </p>
                                    <hr>
                                    <div id="photo-preview">
                                    </div>
                                    S'il vous plaît connecter pour télécharger votre photo
                                    <p class="field field_photo"><label for="photo">Photo</label><input type="file" id="photo" name="photo" class="text" value="">
                                        <span class="info">gif, jpg, png, jpeg<br>320 x 400 px</span>
                                    </p>
                                    <p class="field field_bt-photo"><input type="button" id="bt-photo" name="bt-photo" class="button" value="Téléchargez">
                                    </p>
                                    <p class="field field_bt-photo-remove"><input type="button" id="bt-photo-remove" name="bt-photo-remove" class="button" value="Supprimer">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="section-work" class="section addable renamable ui-sortable" style="display: none;">
                            <h2 class="title"><span class="name">Expérience professionnelle</span><a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a>
                                <a href="#" class="ui-icon ui-icon-carat-2-n-s collapse" title="Regrouper les éléments pour faciliter leur tri">Développer / Regrouper</a></h2>
                            <div class="sets">
                                <div class="set">
                                    <input type="hidden" class="section_name" name="sections[work][section_name]" value="Expérience professionnelle">
                                    <p class="field field_"><label>Poste</label><input maxlength="100" type="text" name="sections[work][data][job_title][]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Entreprise</label><input maxlength="100" type="text" name="sections[work][data][company][]" class="text" value="">
                                    </p>
                                    <p class="field field_"><label>Date de début</label><input maxlength="100" type="text" name="sections[work][data][start][]" class="text" value="">
                                        <span class="info">Ex: Janvier 2005</span>
                                    </p>
                                    <p class="field field_"><label>Date de fin</label><input maxlength="100" type="text" name="sections[work][data][end][]" class="text" value="">
                                        <span class="info">Ex: Janvier 2009, ou Actuellement</span>
                                    </p>
                                    <p class="field field_"><label>Autres informations</label>
                                    <div class="cleditorMain" style="width: 658px; height: 250px;">
                                        <div class="cleditorToolbar" style="height: 27px;">
                                            <div class="cleditorGroup">
                                                <div class="cleditorButton cleditorDisabled" title="Bold" disabled="disabled"></div>
                                                <div class="cleditorButton cleditorDisabled" title="Italic" style="background-position: -24px 50%;" disabled="disabled"></div>
                                                <div class="cleditorButton cleditorDisabled" title="Underline" style="background-color: transparent; background-position: -48px 50%;" disabled="disabled">

                                                </div>
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
                                                <div class="cleditorButton cleditorDisabled" title="Remove Formatting" style="background-color: transparent; background-position: -264px 50%;" 
                                                     disabled="disabled"></div>
                                            </div>
                                        </div>
                                        <textarea name="sections[work][data][info][]" class="textarea" id="t0" style="display: none; width: 658px; height: 223px;"></textarea>
                                        <iframe frameborder="0" src="javascript:true;" style="width: 658px; height: 223px;"></iframe>
                                    </div>
                                    <span class="info">Détails supplémentaires comme les responsabilités, résultats, etc.</span></p>
                                    <hr>
                                    <a href="#" class="button bt_delete_set"><span class="ui-icon ui-icon-closethick"></span>Supprimer</a>
                                </div>
                            </div>
                            <a href="#" class="button bt_cloneset"><span class="ui-icon ui-icon-plusthick"></span> Ajouter un élément</a>
                        </div>
                        <div id="section-qualifications" class="section renamable" style="display: none;">
                            <input type="hidden" class="section_name" name="sections[qualifications][section_name]" value="Compétences">
                            <h2 class="title"><span class="name">Compétences</span><a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a></h2>
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
                        <div id="section-education" class="section addable renamable ui-sortable" style="display: none;">
                            <h2 class="title"><span class="name">Formation</span><a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a><a href="#"
                                                                                                                                                                                    class="ui-icon ui-icon-carat-2-n-s collapse" title="Regrouper les éléments pour faciliter leur tri">Développer / Regrouper</a></h2>
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
                        <div id="section-interests" class="section renamable" style="display: none;">
                            <input type="hidden" class="section_name" name="sections[interests][section_name]" value="Centres d'intêret">
                            <h2 class="title"><span class="name">Centres d'intêret</span><a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a></h2>
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
                        <div id="section-references" class="section renamable" style="display: block;">
                            <input type="hidden" class="section_name" name="sections[references][section_name]" value="Références">
                            <h2 class="title"><span class="name">Références</span><a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">Renommer la section</a></h2>
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
                <iframe id="postframe" name="postframe" src="" __idm_frm__="3"></iframe>
                <script type="text/javascript">
                    var CV_INIT = true, CV_ID = "", CV_DATA = null, CV_USER = '',
                            CV_SECTIONS = {"basic":
                                        {"addable": false, "renamable": false, "name": "Informations"},
                                "work": {"addable": true, "renamable": true, "name": "Exp\u00e9rience professionnelle"},
                                "qualifications": {"addable": false, "renamable": true, "name": "Comp\u00e9tences"},
                                "education": {"addable": true, "renamable": true, "name": "Formation"},
                                "interests": {"addable": false, "renamable": true, "name": "Centres d'int\u00earet"},
                                "references": {"addable": false, "renamable": true, "name": "R\u00e9f\u00e9rences"}},
                    CV_ORDER = ["basic", "work", "qualifications", "education", "interests", "references"], CV_MAX_ADDABLES = 30,
                            CV_MAX_SECTIONS = 20, CV_PHOTO_FILES = ["gif", "jpg", "png", "jpeg"], CV_PHOTO_SIZE = 900;

                </script>
                <noscript>&lt;h2&gt;Votre navigateur doit avoir JavaScript activé pour utiliser cette fonctionnalité.&lt;/h2&gt;
                Pour savoir comment l'activer, &lt;a href="https://www.google.com/adsense/support/bin/answer.py?hl=en&amp;answer=12654"&gt;
                cliquez-ici&lt;/a&gt;.</noscript>
                <div id="vcv">
                    <a href="https://cvmkr.com/vcv"><img src="https://cvmkr.com/images/vcv.jpg" alt=""></a>
                </div>
                <div class="clear"> </div>
                <div id="download-prompt" class="invisible">
                    <div class="prompt-optionset">
                        <div id="choose-style" class="optionset">
                            Veuillez choisir un style
                            <div class="clear"> </div>
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
                            Veuillez choisir un type<br>
                            <select name="type" class="type">
                                <option value="pdf">PDF</option>
                                <option value="html">HTML</option>
                                <option value="txt">TXT</option>
                            </select>
                            <div class="clear"> </div>
                        </div>
                        <div id="choose-size" class="optionset">
                            Taille de la page<br>
                            <select name="page_size" class="page_size">
                                <option value="A4">A4</option>
                                <option value="letter">US Letter</option>
                            </select>
                            <div class="clear"> </div>
                        </div>
                        <div id="share-options" class="invisible optionset">
                            URL à partager (<a href="" class="url" target="_blank">voir</a>)<br>
                            <input type="text" id="share-link" value="">
                            <div class="publish">
                                <label>Annuler la publication<input type="radio" class="visibility" name="publish" value="unpublish" checked=""></label>
                                <label>Publier<input type="radio" class="visibility" name="publish" value="publish"></label>
                            </div>
                            <div class="addthis_toolbox addthis_default_style">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- main //-->
            <div class="push"> </div>
        </div>
        <!-- wrap //-->
        <div id="footer-container">
            <div id="footer">
                <div class="content friendly">
                    <ul class="extlinks noul">
                        <li class="ssl">Cryptage SSL 256 bit</li>
                        <li class="chrome"><a href="https://chrome.google.com/webstore/detail/gpbnepipgmcpkdglgbcfmcecaoflaemc">
                                Disponible sur le Chrome Web Store</a></li>
                        <li class="twitter"><a href="http://twitter.com/cvmkr">Suivez nous sur @cvmkr</a></li>
                    </ul>
                    <ul class="lang noul">
                        <li><a href="https://cvmkr.com/?lang=en">English</a></li>
                        <li><a href="https://cvmkr.com/?lang=ar">العربية</a></li>
                        <li><a href="https://cvmkr.com/?lang=bg">Български</a></li>
                        <li><a href="https://cvmkr.com/?lang=cz">Čeština</a></li>
                        <li><a href="https://cvmkr.com/?lang=da">Dansk</a></li>
                        <li><a href="https://cvmkr.com/?lang=de">Deutsch</a></li>
                        <li><a href="https://cvmkr.com/?lang=ee">Eesti keel</a></li>
                        <li><a href="https://cvmkr.com/?lang=ge">ქართული</a></li>
                        <li><a href="https://cvmkr.com/?lang=nl">Dutch</a></li>
                        <li><a href="https://cvmkr.com/?lang=es">Español</a></li>
                        <li><a href="https://cvmkr.com/?lang=fa">فارسی</a></li>
                        <li><a href="https://cvmkr.com/?lang=fr">Français</a></li>
                        <li><a href="https://cvmkr.com/?lang=gl">Galician</a></li>
                        <li><a href="https://cvmkr.com/?lang=gr">Έλληνικά</a></li>
                        <li><a href="https://cvmkr.com/?lang=hr">Hrvatski</a></li>
                        <li><a href="https://cvmkr.com/?lang=hu">Hungarian</a></li>
                        <li><a href="https://cvmkr.com/?lang=it">Italiano</a></li>
                        <li><a href="https://cvmkr.com/?lang=iw">עברית</a></li>
                        <li><a href="https://cvmkr.com/?lang=ko">한국어</a></li>
                        <li><a href="https://cvmkr.com/?lang=nn">Norsk</a></li>
                        <li><a href="https://cvmkr.com/?lang=pl">Polski</a></li>
                        <li><a href="https://cvmkr.com/?lang=br">Português (br)</a></li>
                        <li><a href="https://cvmkr.com/?lang=pt">Português (pt)</a></li>
                        <li><a href="https://cvmkr.com/?lang=ro">Român</a></li>
                        <li><a href="https://cvmkr.com/?lang=ru">Pусский</a></li>
                        <li><a href="https://cvmkr.com/?lang=sl">Slovenščina</a></li>
                        <li><a href="https://cvmkr.com/?lang=sk">Slovenský</a></li>
                        <li><a href="https://cvmkr.com/?lang=sq">Shqip</a></li>
                        <li><a href="https://cvmkr.com/?lang=fi">Suomi</a></li>
                        <li><a href="https://cvmkr.com/?lang=sv">Svenska</a></li>
                        <li><a href="https://cvmkr.com/?lang=tr">Türkçe</a></li>
                        <li><a href="https://cvmkr.com/?lang=uk">Українська</a></li>
                        <li><a href="https://cvmkr.com/?lang=vn">Tiếng Việt</a></li>
                        <li><a href="https://cvmkr.com/?lang=ml">മലയാളം</a></li>
                        <li><a href="https://cvmkr.com/?lang=zh">中文</a></li>
                        <li><a href="https://cvmkr.com/?lang=zht">繁體中文</a></li>
                    </ul>
                    <ul class="links noul">
                        <li class="title">Liens</li>
                        <li><a href="https://cvmkr.com/fr/Pages/help">Aide</a></li>
                        <li><a href="https://cvmkr.com/fr/Pages/tips">Trucs et astuces</a></li>
                        <li><a href="https://cvmkr.com/fr/Pages/languages">Crédits de la traduction</a></li>
                    </ul>
                    <div class="share">
                    </div>
                </div>
                <div class="clear"> </div>
                <div class="bar">
                    <div class="content">
                        <p class="copyright">
                            CV Maker © 2010 - 2013. Tous droits réservés          <span class="ssl"></span>
                        </p>
                        <ul class="nav noul">
                            <li><a href="https://cvmkr.com/fr/Pages/privacy">Conditions générales &amp; politique de confidentialité</a></li>
                            <li><a href="https://cvmkr.com/fr/Contact/">Contact</a></li>
                        </ul>
                        <div class="">
                        </div>
                        <div class="clear"> </div>
                    </div>
                </div>
            </div>
            <!-- footer //-->
            <script>var CV_ROOT = "https://cvmkr.com/";</script>
            <script>
                var _gaq = _gaq || [];
                _gaq.push(['_setAccount', 'UA-5537752-3']);
                _gaq.push(['_trackPageview']);

                (function () {
                    var ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                })();


            </script>
        </div>
    </body>
</html>