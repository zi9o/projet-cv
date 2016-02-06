<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Http\Controllers\Controller;

class AdminController extends Controller {

    /**
     * The EtudiantRepository instance.
     *
     * @var App\Repositories\EtudiantRepository
     */
    protected $etudiant_gestion;

    public function __construct(EtudiantRepository $etudiant_gestion) {
        $this->etudiant_gestion = $etudiant_gestion;
    }

    public function etudiants($filiere = null) {
//        $allEtudiants=  array();
//        $etudiants=\DB::table('etudiants')->get();
//        foreach ($etudiants as $key => $etudiant)
//        {
//            array_push($allEtudiants, $this->etudiant_gestion->getCvsEtudiant($etudiant->id)) ;
//        }
//
//       return $allEtudiants;

        $query = \DB::table('etudiants');
        if ($filiere) {
            $query->where('etudiants.filiere_id', $filiere);
        }
        return $query->get();
    }

    public function allEtudiants() {
        $allEtudiants = array();
        $etudiants = \DB::table('etudiants')->get();
        foreach ($etudiants as $key => $etudiant) {
            array_push($allEtudiants, $this->etudiant_gestion->getCvsEtudiant($etudiant->id));
        }

        return $allEtudiants;
    }

}
