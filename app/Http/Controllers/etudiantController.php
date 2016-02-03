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
use App\Models\Loisir;

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
        }

            return redirect()->guest('login');
        
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


    public function create($id)
    { 
        $etudiant_id = $etudiant->id ;
            return view('etudiant.create', compact('id', 'etudiant_id'));
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
        extract($etudiant) ;
        return view('etudiant.cv', compact('mes_cv', 'nom', 'prenom'));
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
            
        $loisir = new Loisir() ;
        $loisir->cv_id = $cv->id ;
        $loisir->save() ;
        return redirect()->route('createcv', [$cv->id]);
    }

}
