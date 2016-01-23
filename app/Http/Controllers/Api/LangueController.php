<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Repositories\LangueRepository;
use App\Repositories\CvRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Langue;
use App\Models\Cv;

class LangueController extends Controller
{
    /**
     * The LangueRepository instance.
     *
     * @var App\Repositories\LangueRepository
     */
    protected $langue_gestion;

    /**
     * The CvRepository instance.
     *
     * @var App\Repositories\CvRepository
     *
     */
    protected $cv_gestion;

    public function __construct(LangueRepository $langue_gestion, CvRepository $cv_gestion) {
        $this->langue_gestion = $langue_gestion;
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
        $langue = $this->langue_gestion->store($request->all());
        return $langue->cv->langues ;
    }

    public function langues($id)
    {
        $cv = Cv::find($id);
        return $cv->langues;
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
        return $cv->langues;
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
        $langue = $this->langue_gestion->update($request->all(), $id);
        
        return $langue->cv->langues ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        $langue = $this->langue_gestion->destroy($id);
        return $langue->cv->langues;
    }
}
