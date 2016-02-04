@extends('layouts.template')

@section('contenu')

<div class="row" ng-app="Cv" ng-controller="registerController" ng-init="init({{ Session::has('id') ? Session::get('id') : 0}});">
    <div class="col-lg-12">
        <div class="card-box" id="RegisterForm" style="display: none">
        <div class="panel-heading">
            <h3 class="text-center"> Sign Up to <strong class="text-custom">cv-generator</strong> </h3>
        </div>

        <div class="panel-body">
            <form class="form-horizontal" role="form" method="POST" action="{{ url('/register')}}">
                {!! csrf_field() !!}
                <input type="hidden" class="form-control" name="id_etud" value="<%= id_etud%>" >
                <div class="form-group{{ $errors->has('name') ? ' has-error' : ''}}">
                    <div class="col-xs-12">
                        <input type="text" class="form-control" name="name" placeholder="username">

                        @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name')}}</strong>
                        </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('email') ? ' has-error' : ''}}">

                    <div class="col-xs-12">
                        <input type="email" class="form-control" name="email"  placeholder="Email Adress">

                        @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email')}}</strong>
                        </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('password') ? ' has-error' : ''}}">
                    <div class="col-xs-12">
                        <input type="password" class="form-control" name="password" placeholder="password">

                        @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password')}}</strong>
                        </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : ''}}">
                    <div class="col-xs-12">
                        <input type="password" class="form-control" name="password_confirmation"  placeholder="password confirm">

                        @if ($errors->has('password_confirmation'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password_confirmation')}}</strong>
                        </span>
                        @endif
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button type="submit" class="btn btn-primary">
                            <i class="fa fa-btn fa-user"></i> Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div ng-show="CNEForm" class="card-box" >
        <div class="panel-heading">
            <h3 class="text-center"> Entrez votre cne pour confirmer que vous etes bien de l'ensa</h3>
        </div>

        <div class="panel-body">
            <form class="form-horizontal" role="form" novalidate>
                {!! csrf_field() !!}
                <div class="form-group">
                    <div class="col-xs-12">
                        <input ng-model="cne" type="text" class="form-control" name="cne">
                    </div>
                </div>
                <div class="form-group text-center m-t-40">
                    <div class="col-xs-12">

                    </div>
                </div>
            </form> 
            <button class="btn btn-inverse btn-block waves-effect waves-light" ng-click="getId()" id="confirmCNE" >Envoyer</button>
        </div>
    </div>
    </div>
</div>




@endsection