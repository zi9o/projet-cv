<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Repositories\CompetenceRepository;
use App\Repositories\CvRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Competence;
use App\Models\Cv;

class CompetenceController extends Controller
{
    /**
     * The CompetenceRepository instance.
     *
     * @var App\Repositories\CompetenceRepository
     */
    protected $competence_gestion;

    /**
     * The CvRepository instance.
     *
     * @var App\Repositories\CvRepository
     *
     */
    protected $cv_gestion;

    public function __construct(CompetenceRepository $competence_gestion, CvRepository $cv_gestion) {
        $this->competence_gestion = $competence_gestion;
        $this->cv_gestion = $cv_gestion;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $competence = $this->competence_gestion->store($request->all());
        return $competence ;
    }

    public function competences($id)
    {
        $cv = Cv::find($id);
        return $cv->competences;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cv = Cv::find($id);
        return $cv->competences;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $competence = $this->competence_gestion->update($request->all(), $id);
        
        return $competence ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        $competence = $this->competence_gestion->destroy($id);
        return $competence;
    }
}
