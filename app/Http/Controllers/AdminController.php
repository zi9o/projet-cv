<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Repositories\FiliereRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
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


	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(EtudiantRepository $etudiant_gestion, FiliereRepository $filiere_gestion)
    {
        $this->middleware('auth');
        if(!(Auth::check() && Auth::user()->admin)){
    		return redirect()->route('etudiant');
        }

        $this->etudiant_gestion = $etudiant_gestion;
        $this->filiere_gestion = $filiere_gestion;
    }


    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index ()
    { 
    	$etudiants = $this->etudiant_gestion->index();
        return view('admin.index', compact('etudiants'));
    }

    public function liste ()
    { 
        
    }

}
