<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Http\Controllers\Controller;

class AdminController extends Controller
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

    public function etudiants($filiere)
    {

       return \DB::table('etudiants')
                ->where('filiere_id', '=', $filiere)
                ->get();


    }

    
}
