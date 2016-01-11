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
						Already have account?
						
						<button  data-plugin="custommodal"  data-toggle="modal" data-overlaySpeed="200"  class="btn btn-link waves-effect waves-light"  data-target="##custom-modal">Sign In</button>
            
					</p>
					
			</div>
				</div>
		</div>

		<!-- Modal -->
			<div id="custom-modal" class="modal-demo">
			    <button type="button" class="close" onclick="Custombox.close();">
			        <span>&times;</span><span class="sr-only">Close</span>
			    </button>
			    <h4 class="custom-modal-title">Modal title</h4>
			    <div class="custom-modal-text">
			        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			    </div>
			</div>
        
@stop