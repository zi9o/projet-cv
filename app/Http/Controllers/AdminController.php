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
     * The CvRepository instance.
     *
     * @var App\Repositories\CvRepository
     */ 
    protected $cv_gestion;

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
        if (Auth::check()) {
                if(Auth::user()->admin==false){
                    return redirect()->route('etudiant');
                }else{
                     $this->etudiant_gestion = $etudiant_gestion;
                     $this->filiere_gestion = $filiere_gestion;
                }


        }else{
            return redirect()->guest('login');
        }

       
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index ()
    { 
        if(Auth::user()->admin==false){
            return redirect()->route('etudiant');
        }else{
                $etudiants = $this->etudiant_gestion->index();
                return view('admin.index', compact('etudiants'));
        }
    	
    }

    public function liste ()
    { 
        $etudiants = $this->etudiant_gestion->index();
        
        
        return view('admin.liste', compact('etudiants'));
    }

    public function view($id)
    {
        $cv = $this->etudiant_gestion->getcvDetails($id);
        $format = "1" ;
        if ($format==="1") {
            return view('etudiant.format1', compact('cv'));
        }
        return view('etudiant.cv', compact('cv'));
    }


}
