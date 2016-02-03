<?php

namespace App\Repositories;

use App\Models\Cv;
use App\Models\Etudiant;
use App\Models\Filiere;
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
     * Get cv collection.
     *
     * @param  string  $slug
     * @return array
     */
    public function show($slug)
    {
        $cv = $this->model->with('user', 'tags')->whereSlug($slug)->firstOrFail();

        $comments = $this->comment
                ->wherecv_id($this->model->id)
                ->with('user')
                ->whereHas('user', function($q) {
                    $q->whereValid(true);
                })
                ->get();

        return compact('cv', 'comments');
    }

    /**
     * Get cv collection.
     *
     * @param  App\Models\cv $cv
     * @return array
     */
    public function edit($cv)
    {
        $tags = [];

        foreach ($this->model->tags as $tag) {
            array_push($tags, $tag->tag);
        }

        return compact('cv', 'tags');
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


    // public function statFiliere()
    // {
    //     return [[    
    //                 'key' => "Cumulative Return",
    //                 'values' => [
    //                                   [ 
    //                                     'label' => "A" ,
    //                                     'value' => -29.765957771107
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "B" , 
    //                                     'value' => 0
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "C" , 
    //                                     'value' => 32.807804682612
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "D" , 
    //                                     'value' => 196.45946739256
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "E" ,
    //                                     'value' => 0.19434030906893
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "F" , 
    //                                     'value' => -98.079782601442
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "G" , 
    //                                     'value' => -13.925743130903
    //                                   ] , 
    //                                   [ 
    //                                     'label' => "H" , 
    //                                     'value' => -5.1387322875705
    //                                   ]                            
    //                             ]
    //             ]];   
    // }


    public function statFiliere($annee=null)
    {
        $data = DB::table('cvs')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                ->join('filieres', 'filieres.id', '=', 'etudiants.filiere_id')
                ->select('filieres.code', 'filieres.designation', DB::raw('count(cvs.id) as nombre'))
                
                ->groupBy('filieres.code')->get();


        return $data ;  
    }



    public function statCompetence($filiere=null)
    {
        $data = DB::table('competences')
                   ->join ('cvs', 'cvs.id', '=', 'competences.cv_id')
                   ->join ('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                   ->select ('competences.niveau', DB::raw('count(competences.niveau) as nombreNiveau'))
                   ->groupBy ('competences.niveau')
                   ->get();
        return $data ;  
    }


    public function statVille($filiere=null)
    {
        $data = DB::table('experiences')
                ->join('cvs', 'cvs.id', '=', 'experiences.cv_id')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                ->select('experiences.ville', DB::raw('count(experiences.ville) as nombre'))
                ->groupBy('experiences.ville')
                ->get();


        return $data ;  
    }

    public function statEntreprise($filiere=null)
    {
        $data = DB::table('experiences')
                ->join('cvs', 'cvs.id', '=', 'experiences.cv_id')
                ->join('etudiants', 'etudiants.id', '=', 'cvs.etudiant_id')
                ->select('experiences.organisation', DB::raw('count(experiences.organisation) as nombre'))
                ->groupBy('experiences.organisation')
                ->get();

        return $data ;  
    }

    
}
