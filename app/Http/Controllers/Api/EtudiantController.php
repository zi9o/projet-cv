<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\EtudiantRepository;
use App\Repositories\FiliereRepository;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Etudiant;
use App\Models\Filiere;

class EtudiantController extends Controller {

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

    public function __construct(EtudiantRepository $etudiant_gestion, FiliereRepository $filiere_gestion) {
        $this->etudiant_gestion = $etudiant_gestion;
        $this->filiere_gestion = $filiere_gestion;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return $this->etudiant_gestion->index();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $etudiant = $this->etudiant_gestion->store($request->all());

        return redirect()->route('api.etudiant.show', [$etudiant->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $etudiant = $this->etudiant_gestion->getCvsEtudiant($id);
        return $etudiant;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
//        $etudiant = $this->etudiant_gestion->update($request->all(), $id);
        $etudiant = Etudiant::find($id);


        if (isset($request->all()['email'])) {
            $etudiant->email = $request->all()['email'];
        }

        if (isset($request->all()['nom'])) {
            $etudiant->nom = $request->all()['nom'];
        }

        if (isset($request->all()['prenom'])) {
            $etudiant->prenom = $request->all()['prenom'];
        }

        if (isset($request->all()['telephone'])) {
            $etudiant->telephone = $request->all()['telephone'];
        }

        if (isset($request->all()['adresse'])) {
            $etudiant->adresse = $request->all()['adresse'];
        }

        if (isset($request->all()['situation'])) {
            $etudiant->situation = $request->all()['situation'];
        }
        return $etudiant;
        return redirect()->route('api.etudiant.show', array($etudiant->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        return $this->etudiant_gestion->destroy($id);
    }

    public function etudiantsfiliere($id) {
        return $this->etudiant_gestion->index($id);
    }

}
