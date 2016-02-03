@extends('template')

@section('contenu')

	{!! HTML::style('assets/plugins/nvd3/build/nv.d3.min.css') !!}
	 
	<!-- bienvenue dans l'espace admin -->
	<div class="row">
		<div class="col-sm-6">
					<div class="card-box">
						<h4 class="m-t-0 m-b-20 header-title"><b>statistique des cv par filière</b></h4>
									
					<div id="chart">
                        <svg style="height:400px;width:100%">
                        </svg>
                    </div>
			</div>
		</div>
	



	 	{!! HTML::script('assets/plugins/d3/d3.min.js') !!}

		{!! HTML::script('assets/plugins/nvd3/build/nv.d3.min.js') !!}

		{!! HTML::script('assets/pages/jquery.nvd3.init.js') !!}

        
		<script type="text/javascript">
			nv.addGraph(function() {
				var chart = nv.models.discreteBarChart().x(function(d) { 

					return d.label 
				}).y(function(d) { 

					return d.value 
				}).staggerLabels(true).tooltips(false).showValues(true)

				
				d3.select('#chart svg').datum('http://localhost/projet-cv/public/api/statFiliere').transition().duration(500).call(chart);

				nv.utils.windowResize(chart.update);

				  	return chart;
				});

		</script>
@stop