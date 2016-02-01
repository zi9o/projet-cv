<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Create, maintain, publish, and share your CVs for free" />
        <meta name="keywords" content="create English resume, create العربية resume, create Español resume, create Français resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
        <meta name="author" content="Coderthemes">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,latin-ext" rel="stylesheet" type="text/css" />

        <link rel="shortcut icon" href="{{asset('assets/images/favicon_1.ico')}}">


        <title>cv-generator</title>

        <!--Morris Chart CSS -->

        {!! HTML::style('assets/plugins/morris/morris.css') !!}
        {!! HTML::style('assets/css/bootstrap.min.css') !!}
        {!! HTML::style('assets/css/core.css') !!}
        {!! HTML::style('assets/css/components.css') !!}
        {!! HTML::style('assets/css/icons.css') !!}
        {!! HTML::style('assets/css/pages.css') !!}
        {!! HTML::style('assets/css/responsive.css') !!}

        {!! HTML::style('assets/css/cleditor.css') !!}
        <!--Footable-->
        {!! HTML::style('assets/plugins/footable/css/footable.core.css') !!}
        {!! HTML::style('assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css') !!}


        <!-- for modal fadeIn -->
        {!! HTML::style('assets/plugins/custombox/dist/custombox.min.css') !!}

        <!-- timePicker -->
        {!! HTML::style('assets/plugins/timepicker/bootstrap-timepicker.min.css') !!}

        <!--  <link href="assets/plugins/morris/morris.css" rel="stylesheet">
              <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
              <link href="assets/css/core.css" rel="stylesheet" type="text/css" />
              <link href="assets/css/components.css" rel="stylesheet" type="text/css" />
              <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
              <link href="assets/css/pages.css" rel="stylesheet" type="text/css" />
              <link href="assets/css/responsive.css" rel="stylesheet" type="text/css" />
        -->
        <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->


        {!! HTML::script('assets/js/modernizr.min.js') !!}

        @yield('cv')

        <style type="text/css">
            #photoProfil{
                float: left;
                width: 150px;
                height: 160px;
            }

            #infosPersonnel{
                margin-left: 170px;
            }

            #panelBody{
                min-height: 35em;
                padding: 1em;
            }

            #autre{
                clear: both;
            }
            #wrapper
            {
                overflow: auto;
            }
        </style>
    </head>


    <body class="fixed-left" ng-app="Cv">

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Top Bar Start -->
            <div class="topbar">

                <!-- LOGO -->
                <div class="topbar-left">
                    <div class="text-center">
                        <a href="{{ url('/user')}}" class="logo"><i class="icon-magnet icon-c-logo"></i><span>CV-generator</span></a>
                    </div>
                </div>

                <!-- Button mobile view to collapse sidebar menu -->
                <div class="navbar navbar-default" role="navigation">
                    <div class="container">
                        <div class="">
                            <div class="pull-left">
                                <button class="button-menu-mobile open-left">
                                    <i class="ion-navicon"></i>
                                </button>
                                <span class="clearfix"></span>
                            </div>

                            <!-- <div id="bar">
                                             <div class="language">
                                                                        <select id="language">
                                                                                        <option value="en" class="en">English</option>
                                                                                        <option value="ar" class="ar">العربية</option>
                                                                                        <option value="es" class="es">Español</option>
                                                                                        <option value="fr" class="fr">Français</option>
                                                                        </select>
                                                                </div>
                                        </div>
                            -->

                            <ul class="nav navbar-nav navbar-right pull-right">          
                                @if (Auth::guest())
                                <li><a href="{{ url('/login')}}">Login</a></li>
                                <li><a href="{{ url('/register')}}">Register</a></li>
                                @else
                                <li class="dropdown hidden-xs">
                                    <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                        <i class="icon-bell"></i> <span class="badge badge-xs badge-danger">3</span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-lg">
                                        <li class="notifi-title"><span class="label label-default pull-right">New 3</span>Notification</li>
                                        <li class="list-group nicescroll notification-list">
                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-diamond fa-2x text-primary"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">A new order has been placed A new order has been placed</h5>
                                                        <p class="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-cog fa-2x text-custom"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">New settings</h5>
                                                        <p class="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-bell-o fa-2x text-danger"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">Updates</h5>
                                                        <p class="m-0">
                                                            <small>There are <span class="text-primary font-600">2</span> new updates available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-user-plus fa-2x text-info"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">New user registered</h5>
                                                        <p class="m-0">
                                                            <small>You have 10 unread messages</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-diamond fa-2x text-primary"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">A new order has been placed A new order has been placed</h5>
                                                        <p class="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <!-- list item-->
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="pull-left p-r-10">
                                                        <em class="fa fa-cog fa-2x text-custom"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">New settings</h5>
                                                        <p class="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="list-group-item text-right">
                                                <small class="font-600">See all notifications</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="hidden-xs">
                                    <a href="#" id="btn-fullscreen" class="waves-effect waves-light"><i class="icon-size-fullscreen"></i></a>
                                </li>
                                <li class="hidden-xs">
                                    <a href="#" class="right-bar-toggle waves-effect waves-light"><i class="icon-settings"></i></a>
                                </li>

                                <li class="dropdown">
                                    <a href="" class="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true">
                                        <img src="{{asset('assets/images/users/avatar-1.jpg')}}" alt="user-img" class="img-circle">
                                        {{-- < img src = "{{asset('assets/images/').'/'.$imgsrc}}"> --}}
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="{{ url('/etudiant')}}"><i class="ti-user m-r-5"></i> {{ Auth::user()->name }}</a></li>
                                        <li><a href="javascript:void(0)"><i class="ti-settings m-r-5"></i> Settings</a></li>
                                        <li><a href="javascript:void(0)"><i class="ti-lock m-r-5"></i> Lock screen</a></li>
                                        <li><a href="{{ url('/logout')}}"><i class="ti-power-off m-r-5"></i>Logout</a></li>
                                    </ul>
                                </li>

                                @endif

                            </ul>

                        </div>
                        <!--/.nav-collapse -->
                    </div>
                </div>
            </div>
            <!-- Top Bar End -->


            <!-- ========== Left Sidebar Start ========== -->

            @if (Auth::guest())

            @else
            <div class="left side-menu">
                <div class="sidebar-inner slimscrollleft">
                    <!--- Divider -->
                    <div id="sidebar-menu">
                        <ul>

                            <li class="text-muted menu-title">Menu</li>
                            @if(Auth::user()->admin)
                            <li>
                                <a href="{{ URL::route('admin') }}" class="waves-effect">
                                    <i class="ti-home"></i>
                                    <span> Accueil </span> </a>
                            </li>

                            <li>
                                <a href="{{ URL::route('listecv') }}" class="waves-effect">
                                    <i class="ti-pencil-alt"></i>
                                    <span> liste de cv's </span> </a>
                            </li>

                            @else
                            <li>
                                <a href="{{ URL::route('etudiant') }}" class="waves-effect">
                                    <i class="ti-home"></i>
                                    <span> Accueil </span> </a>
                            </li>

                            <li>
                                <a class="waves-effect" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="ti-pencil-alt"></i>
                                    <span> Nouveau cv </span></a>
                                <!-- <a href="{{ URL::route('createcv') }}" class="waves-effect">
                                    <i class="ti-pencil-alt"></i>
                                    <span> Nouveau cv </span> </a> -->
                            </li>

                            <li>
                                <a href="{{ URL::route('cv') }}" class="waves-effect">
                                    <i class="ti-menu-alt"></i>
                                    <span> Mes CVs </span> </a>

                                @endif


                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            @endif

            <!-- Left Sidebar End -->



            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container">
                        <!-- Page-Title -->
                        <!-- <div class="row">
                            <div class="col-sm-12">
                                <div class="panel panel-primary" id="panelBody">
 -->
                                    @yield('contenu')

                                    @if (!Auth::guest())

                                        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;">
                                            <div class="modal-dialog modal-sm">
                                                <div class="modal-content">
                                                    <div class="modal-header">                                                                      
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <strong>création d'un nouveau cv</strong>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div>&nbsp;</div>
                                                        <form class="form-horizontal" role="form" method="post" action="{{ url('/etudiant/cv/create') }}">
                                                                {{ csrf_field() }}
                                                                <div class="form-group">
                                                                    <div class="col-xs-12">
                                                                        <input type="text" class="form-control" name="nom_cv" placeholder="entrez un nom pour votre cv">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group text-center m-t-40">
                                                                    <div class="col-xs-12">
                                                                        <input type="hidden" name="etudiant_id" value="{{Auth::user()->etudiant_id}}">
                                                                        <button class="btn btn-inverse btn-block waves-effect waves-light" type="submit">envoyer</button>
                                                                    </div>
                                                                </div>
                                                        </form>
                                                    </div>
                                                </div><!-- /.modal-content -->
                                            </div><!-- /.modal-dialog -->
                                        </div><!-- /.modal -->
                                    @endif  
<!-- 
                                </div>

                            </div -->
                        </div>
                    </div>
                </div>
            </div>


            <script>
                        var resizefunc = [];</script>
            <!-- jQuery  -->
            {!! HTML::script('assets/js/jquery.min.js') !!}
            {!! HTML::script('assets/js/bootstrap.min.js') !!}

            {!! HTML::script('assets/js/fr.js') !!}
            {!! HTML::script('assets/js/cleditor.js') !!}

            {!! HTML::script('assets/js/detect.js') !!}
            {!! HTML::script('assets/js/fastclick.js') !!}
            {!! HTML::script('assets/js/jquery.slimscroll.js') !!}
            {!! HTML::script('assets/js/jquery.blockUI.js') !!}
            {!! HTML::script('assets/js/waves.js') !!}
            {!! HTML::script('assets/js/wow.min.js') !!}
            {!! HTML::script('assets/js/jquery.nicescroll.js') !!}
            {!! HTML::script('assets/js/jquery.scrollTo.min.js') !!}

            {!! HTML::script('assets/plugins/peity/jquery.peity.min.js') !!}

            <!-- jQuery  -->
            {!! HTML::script('assets/plugins/waypoints/lib/jquery.waypoints.js') !!}
            {!! HTML::script('assets/plugins/counterup/jquery.counterup.min.js') !!}

            {!! HTML::script('assets/plugins/morris/morris.min.js') !!}
            {!! HTML::script('assets/plugins/raphael/raphael-min.js') !!}

            {!! HTML::script('assets/plugins/jquery-knob/jquery.knob.js') !!}

            {{-- {!! HTML::script('assets/pages/jquery.dashboard.js') !!} --}}

            {!! HTML::script('assets/js/jquery.core.js') !!}
            {!! HTML::script('assets/js/jquery.app.js') !!}

            <!--FooTable-->
            {!! HTML::script('assets/plugins/footable/js/footable.all.min.js') !!}
            {!! HTML::script('assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js') !!}

            <!--FooTable Example-->
            {!! HTML::script('assets/pages/jquery.footable.js') !!}

            <!-- InputMask -->
            {!! HTML::script('assets/plugins/input-mask/jquery.inputmask.js') !!}
            {!! HTML::script('assets/plugins/input-mask/jquery.inputmask.date.extensions.js') !!}
            {!! HTML::script('assets/plugins/input-mask/jquery.inputmask.extensions.js') !!}

            <!--AngularJS-->

            {!! HTML::script('AngularJS/angular.min.js') !!}
            {!! HTML::script('AngularJS/angular-resource.min.js') !!}
            {!! HTML::script('AngularJS/angular-route.min.js') !!}
            {!! HTML::script('AngularJS/angular-animate.min.js') !!}
            <!-- activate ng upload file -->
            {!! HTML::script('ng-file-upload/ng-file-upload-shim.min.js') !!} <!-- for no html5 browsers support -->
            {!! HTML::script('ng-file-upload/ng-file-upload.min.js') !!}

            {!! HTML::script('AngularScripts/app.js') !!}
            {!! HTML::script('AngularScripts/controllers/infoBasicController.js') !!}
            {!! HTML::script('AngularScripts/controllers/experienceController.js') !!}


            <!--
                        <script type="text/javascript">
                            jQuery(document).ready(function ($) {
                                $('.counter').counterUp({
                                    delay: 100,
                                    time: 1200
                                });
            
                                $(".knob").knob();
            
                            });
                        </script>
            -->

<!--            <script>
                        $(function () {
                        //Datemask dd/mm/yyyy
                        $("#datemask").inputmask("dd/mm/yyyy", { "placeholder": "dd/mm/yyyy" });
                                //Datemask2 mm/dd/yyyy
                                $("#datemask2").inputmask("mm/dd/yyyy", { "placeholder": "mm/dd/yyyy" });
                                //Money Euro
                                $("[data-mask]").inputmask();
                        });
            </script>-->
    </body>
</html>
