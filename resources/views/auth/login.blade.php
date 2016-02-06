@extends('layouts.template')

@section('contenu')


    <div class=" card-box">

                        <div class="panel-heading"> 
                            <h3 class="text-center"> Se connecter
                                <a href="home">
                                    <strong class="text-custom">cv-generator</strong>
                                </a> 
                                
                            </h3>
                        </div> 
                            
                        <div class="panel-body">
                            

                            <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                            {!! csrf_field() !!}

                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <div class="col-xs-12">
                                        <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input type="password" class="form-control" name="password">

                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <div class="checkbox checkbox-primary">
                                            <input id="checkbox-signup" type="checkbox">
                                            <label for="checkbox-signup">
                                                Remember me
                                            </label>
                                        </div>
                                        
                                    </div>
                                </div>
                            
                                <div class="form-group text-center m-t-40">
                                    <div class="col-xs-12">
                                        <button class="btn btn-inverse btn-block waves-effect waves-light" type="submit">Connexion</button>
                                    </div>
                                </div>

                                <div class="form-group m-t-30 m-b-0">
                                    <div class="col-sm-12">
                                        <a href="#" class="text-dark"><i class="fa fa-lock m-r-5"></i> Mot de passe oublié?</a>
                                    </div>
                                </div>
                            </form>                         
                        </div>   
                </div> 
   
         <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                       Vous n'avez pas de compte?<a href="register" class="text-primary m-l-5"><b>Register</b></a>
                    </p>
                </div>
        </div> 

           

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<!--      <script>
        $('#confirm-cne').on('show.bs.modal', function(e) {
          $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));

          $('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
        });
      </script>-->

      @if (session()->has('error'))
            <span class="help-block">
                <strong style="color:#ee3333">{{ session('error') }}</strong>
            </span>
      @endif
        
@endsection
