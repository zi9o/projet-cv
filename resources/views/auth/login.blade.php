@extends('layouts.template')

@section('contenu')


    <div class=" card-box">

                        <div class="panel-heading"> 
                            <h3 class="text-center"> Sign In to
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
                                        <button class="btn btn-inverse btn-block waves-effect waves-light" type="submit">Log In</button>
                                    </div>
                                </div>

                                <div class="form-group m-t-30 m-b-0">
                                    <div class="col-sm-12">
                                        <a href="password" class="text-dark"><i class="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                    </div>
                                </div>
                            </form>                         
                        </div>   
                </div> 
   
        <!-- <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                        Already have account?<a href="register" class="text-primary m-l-5"><b>Sign In</b></a>
                    </p>
                </div>
        </div> -->

            <div class="modal fade" id="confirm-cne" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title" id="myModalLabel"><center>entrez votre cne pour confirmer que vous etes bien de l'ensa</center></h4>
                </div>

                <div class="modal-body">
                  <form class="form-horizontal" role="form" method="get" action="{{ url('/confirm') }}">
                            
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

          <div class="row">
                <div class="col-sm-12 text-center">
                    <p>Already have account?
                        <a href="#" data-toggle="modal" data-target="#confirm-cne" class="text-primary m-l-5">Sign In</a>

                    </p>
                </div>
        </div>
      <br>

      <script>
        $('#confirm-cne').on('show.bs.modal', function(e) {
          $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));

          $('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
        });
      </script>

      @if (session()->has('error'))
            <span class="help-block">
                <strong style="color:#ee3333">{{ session('error') }}</strong>
            </span>
      @endif
        
@endsection
