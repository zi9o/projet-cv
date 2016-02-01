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
use App\Repositories\CvRepository;
use App\Models\Cv;

class etudiantController extends Controller
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
    *
    *
    *
    */

    protected $etudiant ;

    public function __construct(
        EtudiantRepository $etudiant_gestion, 
            CvRepository $cv_gestion, 
                FiliereRepository $filiere_gestion 
                    )
    {
        $this->middleware('auth');
        if (Auth::check()) {
            if(Auth::user()->admin){
                return redirect()->route('admin');
            }else{
                $this->etudiant = Etudiant::find(Auth::user()->etudiant_id) ;
                $this->etudiant_gestion = $etudiant_gestion;
                $this->filiere_gestion = $filiere_gestion;
                $this->cv_gestion = $cv_gestion ;
            }
        }else{
            return redirect()->guest('login');
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index ()
    { 
        if(Auth::user()->admin){
            return redirect()->route('admin');
        }else{
                $etudiant = Auth::user()->etudiant;
                $aujourdhui = date("F j, Y, g:i a"); 
                return view('etudiant.index', compact('etudiant', 'aujourdhui'));
        }
        
        //return $this->etudiant ;
    }
}
