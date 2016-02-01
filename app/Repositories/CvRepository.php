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
     * Get cv collection.
     *
     * @param  int  $id
     * @return array
     */
    public function GetByIdWithTags($id)
    {
        return $this->model->with('tags')->findOrFail($id);
    }

    
    /**
     * Update "seen" in cv.
     *
     * @param  array  $inputs
     * @param  int    $id
     * @return void
     */
    public function updateSeen($inputs, $id)
    {
        $cv = $this->getById($id);

        $this->model->seen = $inputs['seen'] == 'true';

        $this->model->save();
    }

    /**
     * Update "active" in cv.
     *
     * @param  array  $inputs
     * @param  int    $id
     * @return void
     */
    public function updateActive($inputs, $id)
    {
        $cv = $this->getById($id);

        $this->model->active = $inputs['active'] == 'true';

        $this->model->save();
    }
    /**
     * Destroy a cv.
     *
     * @param  App\Models\cv $cv
     * @return void
     */
    // public function destroy($cv) {
    //     $this->model->tags()->detach();

    //     $this->model->delete();
    // }

    /**
     * Get cv slug.
     *
     * @param  int  $comment_id
     * @return string
     */
    public function getSlug($comment_id)
    {
        return $this->comment->findOrFail($comment_id)->cv->slug;
    }

    /**
     * Get tag name by id.
     *
     * @param  int  $tag_id
     * @return string
     */
    public function getTagById($tag_id)
    {
        return $this->tag->findOrFail($tag_id)->tag;
    }

    
}
