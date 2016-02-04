<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Http\Controllers\Controller;
use Session ;

class ConfirmController extends Controller
{
    /**
     * The EtudiantRepository instance.
     *
     * @var App\Repositories\EtudiantRepository
     */ 
    protected $etudiant_gestion;

    
    public function __construct(EtudiantRepository $etudiant_gestion)
    {
        $this->etudiant_gestion = $etudiant_gestion;
    }

    public function confirm(Request $request)
    {
        
        extract($request->all()) ;
        $etudiant = $this->etudiant_gestion->getByCne($cne);
        if (!empty($etudiant)) {
          
            session(['id' => $etudiant->id]);
//            return redirect('register')->withCookie($cookie);


            
            
             return $etudiant->id;
        }else{
            
            return -1;
//            return redirect('login')->with('error', 'ce cne n existe pas dans l annuaire de l ensa');       
        }

        
    }

    public function help()
    {
        return view('etudiant.help');
    }

}
