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


										<div class="col-md-4">
												<select class="selectpicker" data-style="btn-default btn-custom">
													<option>filtrer par : </option>
													<option>filière</option>
													<option>niveau</option>
												</select>
										</div>
								         	
                        </div>
                        <div class="row">
                        	<div class="col-sm-8">
                        		<center><h3><b>listes des étudiants</b></h3></center>
                        	</div>
                        </div>
                        <div class="row">
                        	<div class="col-lg-8">

                        	  	<div class="card-box m-b-10">
                        			<div class="table-box opport-box" id="etudiants">
                        				<div class="table-detail">
                        					<img src='{{ asset("../storage/uploads/team1.jpg")}}' alt="imrana" alt="img" class="img-circle thumb-lg m-r-15" />
                        				</div>
                        				
                        				<div class="table-detail">
                        					<div class="member-info">
	                                            <h4 class="m-t-0"><b>DIALLO &nbsp;Imrana </b></h4>
	                                            <p class="text-dark m-b-5"><b>E-mail: </b> <span class="text-muted">dialloimran@gmail.com</span></p>
	                                        </div>
                        				</div>
                        				<!-- 
                        				<div class="table-detail lable-detail">
                        					<span class="label label-info">Hot</span>
                        				</div>
                        				 -->
                        				 <div class="table-detail table-actions-bar">
                        				
                        				 
                        				 		<a class="accordion-toggle accordion-toggle-styled collapsed" 
                                                           data-toggle="collapse" data-parent="#etudiants" href="#etud">  mes cv</a>
	                        					<!-- <a href="#" class="btn btn-sm btn-primary waves-effect waves-light">mes cv</a>
                        					 -->
                        				</div>


                        			</div>

                        			<div id="etud" class="panel-collapse collapse">
                                                    <div class="panel-body" style=" overflow-y:auto;">
                                                        <div class="col-md-12 col-sm-12">

                                                            <div class="portlet-body">
                                                            	<div class="row static-info">
                                                            		
							                        					<a href="#" class="btn btn-sm btn-primary waves-effect waves-light">le nom du 1er cv</a>
						                        						<a href="#" class="btn btn-sm btn-primary waves-effect waves-light">le nom du 2ème cv</a>
						                        						<a href="#" class="btn btn-sm btn-primary waves-effect waves-light">...</a>
						                        					
						                        				</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    
                                                </div>
                        		
                        		</div>


                        		<br/><br/>
                                      

                        		@foreach ($etudiants as $etudiant)

                        			<div class="card-box m-b-10">
                        			<div class="table-box opport-box" id="etudiants">
                        				<div class="table-detail">
                        					<img src='{{ asset("../storage/uploads/$etudiant->photo")}}' alt="img" class="img-circle thumb-lg m-r-15" />
                        				</div>
                        				
                        				<div class="table-detail">
                        					<div class="member-info">
	                                            <h4 class="m-t-0"><b>{{$etudiant->nom}}&nbsp;{{$etudiant->prenom}} </b></h4>
	                                            <p class="text-dark m-b-5"><b>E-mail: </b> <span class="text-muted">{{$etudiant->email}}</span></p>
	                                        </div>
                        				</div>
                        				
                        				 <div class="table-detail table-actions-bar">
                        				
                        				 
                        				 		<a class="accordion-toggle accordion-toggle-styled collapsed" 
                                                           data-toggle="collapse" data-parent="#etudiants" href="#etud{{$etudiant->id}}">  les cv</a>
	                        					
                        				</div>


                        			</div>

                        			<div id="etud{{$etudiant->id}}" class="panel-collapse collapse">
                                                    <div class="panel-body" style="overflow-y:auto;">
                                                        <div class="col-md-12 col-sm-12">

                                                            <div class="portlet-body">
                                                            	<div class="row static-info">
                                                            		@foreach ($etudiant->cvs as $cv)
							                        					<a href="{{ URL::route('cv.show', $cv->id) }}" class="btn btn-sm btn-primary waves-effect waves-light">{{$cv->nom_cv}}</a>
						                        					@endforeach
						                        				</div>
                                                            </div>

                                                        </div>
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