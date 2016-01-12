@extends('template')

@section('contenu')
<div class="container spark-screen">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    {{ Auth::user()->name }}

                    {{ Auth::user()->etudiant_id }}


                    <?php var_dump(Auth::user()->etudiant) ?>
                </div>
            </div>
        </div>
    </div>
</div>
@stop
