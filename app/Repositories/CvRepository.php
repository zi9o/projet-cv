<?php

namespace App\Repositories;

use App\Models\Cv;
use App\Models\Etudiant;
use App\Models\Filiere;
use App\Models\Competence;
use App\Models\Experience;
use DB;
class CvRepository extends BaseRepository {

    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $etudiant;

    
    

    /**
     * Create a new CvRepository instance.
     *
     * @param  App\Models\cv $cv
     * @param  App\Models\Tag $tag
     * @param  App\Models\Comment $comment
     * @return void
     *
     */
    public function __construct(Cv $cv, Etudiant $etudiant) 
    {
        $this->model = $cv;
        $this->etudiant = $etudiant;
    }

    /**
     * Create or update a cv.
     *
     * @param  App\Models\cv $cv
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\cv
     */
    public function save($inputs)
    {
        if (isset($inputs['nom_cv'])) {
            $this->model->nom_cv = $inputs['nom_cv'];
        }
        if (isset($inputs['lienVideo'])) {
            $this->model->lienVideo = $inputs['lienVideo'];
        }
        if (isset($inputs['etudiant_id'])) {
            $this->etudiant = Etudiant::find(intval($inputs['etudiant_id']));
            if($this->etudiant != null) {
                $this->model->etudiant_id = $this->etudiant->id;
            } 
        }
        
        
        
        $this->model->save();

        return $this->model;
    }

    /**
     * Create a query for cv.
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    private function queryActiveWithUserOrderByDate()
    {
        return $this->model
            ->select('id', 'created_at', 'updated_at', 'title', 'slug', 'user_id', 'summary')
                        ->whereActive(true)
                        ->with('user')
                        ->latest();
    }

    /**
     * Get cv collection.
     *
     * @param  int  $n
     * @return Illuminate\Support\Collection
     */
    public function indexFront($n)
    {
        $query = $this->queryActiveWithUserOrderByDate();

        return $query->paginate($n);
    }

    /**
     * Get cv collection.
     *
     * @param  int  $n
     * @param  int  $id
     * @return Illuminate\Support\Collection
     */
    public function indexTag($n, $id)
    {
        $query = $this->queryActiveWithUserOrderByDate();

        return $query->whereHas('tags', function($q) use($id) {
                            $q->where('tags.id', $id);
                        })
                        ->paginate($n);
    }

    /**
     * Get search collection.
     *
     * @param  int  $n
     * @param  string  $search
     * @return Illuminate\Support\Collection
     */
    public function search($n, $search)
    {
        $query = $this->queryActiveWithUserOrderByDate();

        return $query->where(function($q) use ($search) {
                    $q->where('summary', 'like', "%$search%")
                            ->orWhere('content', 'like', "%$search%")
                            ->orWhere('title', 'like', "%$search%");
                })->paginate($n);
    }

    /**
     * Get cv collection.
     *
     * @param  int     $n
     * @param  int     $user_id
     * @param  string  $orderby
     * @param  string  $direction
     * @return Illuminate\Support\Collection
     */
    public function index($n, $etudiant_id = null)
    {
        $etudiants = DB::table('etudiants');
        if ($etudiant_id) {
            $etudiants->where('id', $etudiant_id);
        }

        $etudiants = $etudiants->paginate($n);
        
        foreach ($etudiants as $etudiant) {
            $cvs[] = $this->getCvsEtudiant($etudiant->id);
        }
        
        return $cvs;
    }

    



    /**
     * Create a Model.
     *
     * @param  array  $inputs
     * @return model
     */
    public function store($inputs) {
        // $model->created_at = date("F j, Y, g:i a");

        $this->model = new Cv();
        $this->model = $this->save($inputs);

        return $this->model;
    }

    /**
     * Update a model.
     *
     * @param  array  $inputs
     * @param  $id
     * @return void
     */
    public function update($inputs, $id) {
        $this->model = Cv::find($id);
        $this->model = $this->save($inputs);
        return $this->model;
    }


    

    public function statFiliere($annee=null)
    {
        $data = DB::table('cvs')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                ->join('filieres', 'filieres.id', '=', 'etudiants.filiere_id')
                ->select('filieres.code', DB::raw('count(cvs.id) as nombre'))
                
                ->groupBy('filieres.code')->get();


        return $data ;  
    }



    public function statCompetence($filiere=null)
    {
        $competence = new Competence();
        $query = $competence
                ->select ('competences.niveau', DB::raw('count(competences.niveau) as nombre'))
                ->orderby('nombre', 'desc')
                ->join ('cvs', 'cvs.id', '=', 'competences.cv_id')
                ->join ('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id');
                
        if ($filiere) {
            $query->where('etudiants.filiere_id', $filiere);
        }

        $query->groupBy ('competences.niveau');
                   

        $data = $query->get();


        for ($i=0; $i<4 ; $i++) { 
            if (!isset($data[$i])) {
                $niveau = $i+1;
                $valeur = ['niveau'=>$niveau, 'nombre'=>0];
                $data[$i] = $valeur;
            }
        }

        $sortie = array();
        foreach ($data as $value) {
            if ($value['niveau'] == 1) {

                $value['niveau'] = 'Débutant' ;

            }
            if ($value['niveau'] == 2) {
                $value['niveau'] = 'Intermediaire' ;
            }
            if ($value['niveau'] == 3) {
                $value['niveau'] = 'Avancé' ;
            }
            if ($value['niveau'] == 4) {
                $value['niveau'] = 'Expert' ;
            }

            $sortie[] = ['niveau' => $value['niveau'],'nombre' => $value['nombre']] ;
        }
        

        //var_dump($data) ;
        return $sortie;
        
    }


    public function statVille($filiere=null)
    {
        $experience = new Experience();
        $query = $experience->select('experiences.ville', DB::raw('count(experiences.ville) as nombre'))
                ->orderby('nombre', 'desc')
                ->limit(5)
                ->join('cvs', 'cvs.id', '=', 'experiences.cv_id')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id');
                
                


        if ($filiere) {
            $query->where('etudiants.filiere_id', $filiere);
        }

        $query ->groupBy('experiences.ville')
                ->get();
                   

        $data = $query->get();


               


        return $data ;  
    }

    public function statEntreprise($filiere=null)
    {
        $data = DB::table('experiences')
                ->join('cvs', 'cvs.id', '=', 'experiences.cv_id')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                ->select('experiences.organisation', DB::raw('count(experiences.organisation) as nombre'))
                ->orderby('nombre', 'desc')
                ->limit(5)
                ->groupBy('experiences.organisation')
                ->get();

        return $data ;  
    }

    
}
