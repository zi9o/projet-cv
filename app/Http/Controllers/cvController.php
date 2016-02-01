<?php

namespace App\Http\Controllers;

use App\Repositories\EtudiantRepository;
use App\Repositories\CvRepository;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Cv;
use App\Models\Etudiant;

class cvController extends Controller
{
    /**
     * The etudiantRepository instance.
     *
     * @var App\Repositories\etudiantRepository
     */ 
    protected $cv_gestion;

    /**
     * The EtudiantRepository instance.
     *
     * @var App\Repositories\EtudiantRepository
     *
     */
    protected $etudiant_gestion;

    
    /*
     * Create a new etudiantController instance.
     *
     * @param  App\Repositories\etudiantRepository $cv_gestion
     * @param  App\Repositories\EtudiantRepository $etudiant_gestion
     * @return void
     */
    public function __construct(CvRepository $cv_gestion, EtudiantRepository $etudiant_gestion)
    {
        $this->cv_gestion = $cv_gestion;
        $this->etudiant_gestion = $etudiant_gestion;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $etudiants = $this->cv_gestion->index(3); 
        return $etudiants;
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
        $cv = $this->cv_gestion->update($request->all(), $id);

        return redirect()->route('api.etudiant.etudiant.show', [$cv->etudiant_id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cv = $this->cv_gestion->destroy($id);
        return redirect()->route('api.etudiant.etudiant.show', [$cv->etudiant_id]);
    }

    public function cv()
    {
        $etudiant = $this->etudiant_gestion->getCvsEtudiant(Auth::user()->etudiant_id);
        return view('etudiant.cv', compact('etudiant'));
    }

    
    public function create()
    { 
        return view('etudiant.create');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request = null)
    {
        $cv = $this->cv_gestion->store($request->all());
            
        return redirect()->route('createcv');;
    }

    
    public function show($id)
    {
        $cv = $this->etudiant_gestion->getcvDetails($id);
        
        //return $cv;
        //$format = "1" ;
        
        return view('etudiant.format1', compact('cv'));
        
    }
}
