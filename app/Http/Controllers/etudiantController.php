<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Repositories\FiliereRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Etudiant;
use App\Models\Filiere;
use Illuminate\Support\Facades\Auth;

class etudiantController extends Controller
{
    /**
     * The EtudiantRepository instance.
     *
     * @var App\Repositories\EtudiantRepository
     */ 
    protected $etudiant_gestion;

    /**
     * The FiliereRepository instance.
     *
     * @var App\Repositories\FiliereRepository
     *
     */
    protected $filiere_gestion;

    public function __construct(EtudiantRepository $etudiant_gestion, FiliereRepository $filiere_gestion)
    {
        $this->middleware('auth');
        if(Auth::user()->admin){
            return redirect()->route('admin');
        }

        $this->etudiant_gestion = $etudiant_gestion;
        $this->filiere_gestion = $filiere_gestion;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index ()
    { 
        $etudiant = Auth::user()->etudiant;
        return view('etudiant.index', compact('etudiant'));
    }

    public function cv()
    {
        $etudiant = $this->etudiant_gestion->getCvsEtudiant(1);
        return view('etudiant.show', compact('etudiant', 'mes_cv'));
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
    // public function store(Request $request)
    // {
    
    // }

    public function show()
    {
        $etudiants = Etudiant::get();       
        return view('etudiant.show', compact('etudiants'));
    }

    
    public function view($id)
    {
        $cv = $this->etudiant_gestion->getcvDetails($id);
        return view('etudiant.cv', compact('cv'));
    }



    
}
