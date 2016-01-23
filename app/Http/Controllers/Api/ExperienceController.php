<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;

use App\Repositories\ExperienceRepository;
use App\Repositories\CvRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Experience;
use App\Models\Cv;

class ExperienceController extends Controller
{
    /**
     * The ExperienceRepository instance.
     *
     * @var App\Repositories\ExperienceRepository
     */
    protected $experience_gestion;

    /**
     * The CvRepository instance.
     *
     * @var App\Repositories\CvRepository
     *
     */
    protected $cv_gestion;

    public function __construct(ExperienceRepository $experience_gestion, CvRepository $cv_gestion) {
        $this->experience_gestion = $experience_gestion;
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
        
        $experience = $this->experience_gestion->store($request->all());
        return $experience->cv->experiences ;
    }

    public function experiences($id)
    {
        $cv = Cv::find($id);
        return $cv->experiences;
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
        return $cv->experiences;
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
        $experience = $this->experience_gestion->update($request->all(), $id);
        
        return $experience->cv->experiences ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        $experience = $this->experience_gestion->destroy($id);
        return $experience->cv->experiences;
    }
}
