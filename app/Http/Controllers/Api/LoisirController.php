<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Repositories\LoisirRepository;
use App\Repositories\CvRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Loisir;
use App\Models\Cv;

class LoisirController extends Controller
{
    /**
     * The LoisirRepository instance.
     *
     * @var App\Repositories\LoisirRepository
     */
    protected $loisir_gestion;

    /**
     * The CvRepository instance.
     *
     * @var App\Repositories\CvRepository
     *
     */
    protected $cv_gestion;

    public function __construct(LoisirRepository $loisir_gestion, CvRepository $cv_gestion) {
        $this->loisir_gestion = $loisir_gestion;
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
        $loisir = $this->loisir_gestion->store($request->all());
        return $loisir->cv->loisirs ;
    }

    public function loisirs($id)
    {
        $cv = Cv::find($id);
        return $cv->loisirs;
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
        return $cv->loisirs;
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
        $loisir = $this->loisir_gestion->update($request->all(), $id);
        
        return $loisir->cv->loisirs ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        $loisir = $this->loisir_gestion->destroy($id);
        return $loisir->cv->loisirs;
    }
}
