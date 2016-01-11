@extends('auth.template')

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
			            	

							<form class="form-horizontal m-t-20" role="form" method="POST" action="{{ url('login') }}">
			            	
			                	{!! csrf_field() !!}

				                <div class="form-group ">
				                    <div class="col-xs-12">
				                        <input type="email" class="form-control" name="email">
				                    </div>
				                </div>

				                <div class="form-group">
				                    <div class="col-xs-12">
				                        <input type="password" class="form-control" name="password">
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
		<div class="row">
				<div class="col-sm-12 text-center">
					<p>
						Already have account?<a href="register" class="text-primary m-l-5"><b>Sign In</b></a>
					</p>
				</div>
		</div>
@stop