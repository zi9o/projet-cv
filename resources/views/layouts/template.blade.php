<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
		<meta name="author" content="Coderthemes">

		<link rel="shortcut icon" href="assets/images/favicon_1.ico">

		<title>cv-generator</title>

		<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/core.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/components.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/pages.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/responsive.css" rel="stylesheet" type="text/css" />
                <!-- BEGIN PAGE LEVEL PLUGINS -->
        <link href="assets/assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" type="text/css" />
        <!-- END PAGE LEVEL PLUGINS -->

                <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
                <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
                <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
                <![endif]-->
                
	</head>
	<body>

		<div class="account-pages"></div>
		<div class="clearfix"></div>
		<div class="wrapper-page">
			
			@yield('contenu')	
			
		</div>

		<script>
			var resizefunc = [];
		</script>

                <!-- jQuery  -->


{!! HTML::script('assets/assets/global/plugins/jquery.min.js') !!}
{!! HTML::script('assets/assets/global/plugins/bootstrap/js/bootstrap.min.js') !!}

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


<!--AngularJS-->

{!! HTML::script('AngularJS/angular.min.js') !!}
{!! HTML::script('AngularJS/angular-resource.min.js') !!}
{!! HTML::script('AngularJS/angular-route.min.js') !!}
{!! HTML::script('AngularJS/angular-animate.min.js') !!}
{!! HTML::script('AngularJS/angular-sanitize.min.js') !!}
<!--summernote-->
{!! HTML::script('../bower_components/summernote/dist/summernote.js') !!}
{!! HTML::script('../bower_components/summernote/lang/summernote-fr-FR.js') !!}
{!! HTML::script('../bower_components/angular-summernote/dist/angular-summernote.js') !!}


<!-- activate ng upload file -->
{!! HTML::script('ng-file-upload/ng-file-upload-shim.min.js') !!} <!-- for no html5 browsers support -->
{!! HTML::script('ng-file-upload/ng-file-upload.min.js') !!}

{!! HTML::script('AngularScripts/app.js') !!}
{!! HTML::script('AngularScripts/controllers/registerController.js') !!}


<!-- BEGIN PAGE LEVEL PLUGINS -->
        <script src="assets/assets/global/plugins/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
        <!-- END PAGE LEVEL PLUGINS -->

<!-- BEGIN THEME GLOBAL SCRIPTS -->
{!! HTML::script('assets/assets/global/scripts/app.min.js') !!}

<!-- BEGIN PAGE LEVEL SCRIPTS -->
        <script src="assets/assets/pages/scripts/ui-toastr.min.js" type="text/javascript"></script>
        <!-- END PAGE LEVEL SCRIPTS -->

        @yield('scripts')
	</body>
</html>