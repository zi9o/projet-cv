@extends('layouts.template')

@section('contenu')

<div class=" card-box">
                <div class="panel-heading">
                    <h3 class="text-center"> Sign Up to <strong class="text-custom">cv-generator</strong> </h3>
                </div>

                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                        {!! csrf_field() !!}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <div class="col-xs-12">
                                <input type="text" class="form-control" name="name" placeholder="username">

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            
                            <div class="col-xs-12">
                                <input type="email" class="form-control" name="email"  placeholder="Email Adress">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <div class="col-xs-12">
                                <input type="password" class="form-control" name="password" placeholder="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            <div class="col-xs-12">
                                <input type="password" class="form-control" name="password_confirmation"  placeholder="password confirm">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
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


            <div class="modal fade" id="confirm-cne" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title" id="myModalLabel"><center>entrez votre cne pour confirmer que vous etes bien de l'ensa</center></h4>
                </div>

                <div class="modal-body">
                  <form class="form-horizontal" role="form" method="post" action="{{ url('/confirm') }}">
                                {!! csrf_field() !!}
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input type="text" class="form-control" name="cne">
                                    </div>
                                </div>
                                <div class="form-group text-center m-t-40">
                                    <div class="col-xs-12">
                                        <button class="btn btn-inverse btn-block waves-effect waves-light" type="submit">envoyer</button>
                                    </div>
                                </div>
                    </form> 
                </div>

                <!-- <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                  <a class="btn btn-danger btn-ok">Delete</a>
                </div> -->
              </div>
            </div>
          </div>

            
      
@endsection
