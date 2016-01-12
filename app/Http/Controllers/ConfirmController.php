<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Http\Controllers\Controller;

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
        extract($request->all());
        $etudiant = $this->etudiant_gestion->getByCne($cne);
        if (!empty($etudiant)) {
            /*var_dump($etudiant);*/
           
            var_dump($request->session()->all()) ;
            return redirect('register')->with('etudiant', $etudiant);
        }else{
            return redirect('login')->with('error', 'ce cne n existe pas dans l annuaire de l ensa');       
        }

        
    }
}
