@extends('template')

@section('contenu')
	 
                        <div class="row">
                        	<div class="col-sm-8">
                        		<form role="form">
                                    <div class="form-group contact-search m-b-30">
                                    	<input type="text" id="search" class="form-control" placeholder="Search...">
                                        <button type="submit" class="btn btn-white"><i class="fa fa-search"></i></button>
                                    </div> <!-- form-group -->
                                </form>
                        	</div>
                        	<div class="col-sm-4">
                        		 <a href="#custom-modal" class="btn btn-default btn-md waves-effect waves-light m-b-30" data-animation="fadein" data-plugin="custommodal" 
                                                    	data-overlaySpeed="200" data-overlayColor="#36404a"><i class="md md-add"></i> Add New</a>
                        	</div>
                        </div>
                        <div class="row">
                        	<div class="col-sm-8">
                        		<center><h3><b>listes des étudiants</b></h3></center>
                        	</div>
                        </div>
                        <div class="row">
                        	<div class="col-lg-8">
                        		@foreach ($etudiants as $etudiant)
					                    <div class="card-box m-b-10">
                        			<div class="table-box opport-box">
                        				<div class="table-detail">
                        					<img src="{{$etudiant->photo}}" alt="img" class="img-circle thumb-lg m-r-15" />
                        				</div>
                        				
                        				<div class="table-detail">
                        					<div class="member-info">
	                                            <h4 class="m-t-0"><b>{{$etudiant->nom}}&nbsp;{{$etudiant->prenom}} </b></h4>
	                                            <p class="text-dark m-b-5"><b>E-mail: </b> <span class="text-muted">{{$etudiant->email}}</span></p>
	                                        </div>
                        				</div>
                        				<!-- 
                        				<div class="table-detail lable-detail">
                        					<span class="label label-info">Hot</span>
                        				</div>
                        				 -->
                        				<div class="table-detail">
	                        				<!-- {{var_dump($etudiant->nom)}} -->
	                        				@foreach ($etudiant->cvs as $cv)
	                        					<!-- {!! link_to_route('cv.show', 'cv', [$cv->id], ['class' => 'btn btn-sm btn-primary waves-effect waves-light']) !!} -->
	                        					<a href="#" class="btn btn-sm btn-primary waves-effect waves-light">{{$cv->id}}</a>
                        					@endforeach
	                        				
                        				</div>
                        				
                        				<div class="table-detail table-actions-bar">
                        					<a href="#" class="table-action-btn"><i class="md md-edit"></i></a>
                                        	<a href="#" class="table-action-btn"><i class="md md-close"></i></a>
                        				</div>
                        			</div>
                        		</div>
					            @endforeach
                        		
                            </div> <!-- end col -->
                            

                            <div class="col-lg-4">
                            	<div class="card-box m-b-0">
                            		<h4 class=" header-title m-t-0 m-b-20 text-dark">Leads Statics</h4>
                            		<div id="morris-bar-stacked" style="height: 260px;"></div>
                            		
                            		<div class="p-20">
                    					<h4 class="m-b-20 header-title"><b>Activities</b></h4>
                    					<div class="nicescroll p-l-r-10" style="max-height: 535px;">
	                        				<div class="timeline-2">
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>5 minutes ago</small></div>
			                                            <p><strong><a href="#" class="text-info">John Doe</a></strong> Uploaded a photo <strong>"DSC000586.jpg"</strong></p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>30 minutes ago</small></div>
			                                            <p><a href="" class="text-info">Lorem</a> commented your post.</p>
			                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>59 minutes ago</small></div>
			                                            <p><a href="" class="text-info">Jessi</a> attended a meeting with<a href="#" class="text-success">John Doe</a>.</p>
			                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>5 minutes ago</small></div>
			                                            <p><strong><a href="#" class="text-info">John Doe</a></strong>Uploaded 2 new photos</p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>30 minutes ago</small></div>
			                                            <p><a href="" class="text-info">Lorem</a> commented your post.</p>
			                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>59 minutes ago</small></div>
			                                            <p><a href="" class="text-info">Jessi</a> attended a meeting with<a href="#" class="text-success">John Doe</a>.</p>
			                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
			                                        </div>
			                                    </div>
			                                    
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>5 minutes ago</small></div>
			                                            <p><strong><a href="#" class="text-info">John Doe</a></strong>Uploaded 2 new photos</p>
			                                        </div>
			                                    </div>
			
			                                    <div class="time-item">
			                                        <div class="item-info">
			                                            <div class="text-muted"><small>30 minutes ago</small></div>
			                                            <p><a href="" class="text-info">Lorem</a> commented your post.</p>
			                                            <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
			                                        </div>
			                                    </div>
			                                    
			                                </div>
	                        			</div>
                        			</div>
                            	</div>
                            </div>
                            
                            
                            
                        </div>

       

@stop