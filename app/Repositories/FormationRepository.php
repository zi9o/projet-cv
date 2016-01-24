<?php

namespace App\Repositories;

use App\Models\Formation;
use App\Models\Cv;
use App\Models\Etablissement;

class FormationRepository extends BaseRepository {

    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $cv;

    
    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $etablissement;

    
    

    /**
     * Create a new FormationRepository instance.
     *
     * @param  App\Models\Formation $formation
     * @param  App\Models\Tag $tag
     * @param  App\Models\Comment $comment
     * @return void
     *
     */
    public function __construct(Formation $formation, Cv $cv, Etablissement $etablissement) 
    {
        $this->model = $formation;
        $this->cv = $cv;
        $this->etablissement = $etablissement;

    }

    /**
     * Create or update a Formation.
     *
     * @param  App\Models\Formation $formation
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\Formation
     */
    public function save($inputs, $cv_id=null)
    {
        $this->model->intitule = $inputs['intitule'];
        $this->model->diplome = $inputs['diplome'];
        // $this->model->date_debut = $inputs['date_debut'];
        // $this->model->date_fin = $inputs['date_fin'];
        $this->model->mention = $inputs['mention'];
        $this->cv = Cv::find(intval($inputs['cv']));
        if($this->cv != null) {
            $this->model->cv_id = $this->cv->id;
        }
        $this->etablissement = Etablissement::find(intval($inputs['etablissement']));
        if($this->etablissement != null) {
            $this->model->etablissement_id = $this->etablissement->id;
        }
        
        $this->model->save();

        return $this->model;
    }

    /**
     * Get Formation collection.
     *
     * @param  int  $id
     * @return array
     */
    public function GetByIdWithTags($id)
    {
        return $this->model->with('tags')->findOrFail($id);
    }

    
    /**
     * Update "seen" in Formation.
     *
     * @param  array  $inputs
     * @param  int    $id
     * @return void
     */
    public function updateSeen($inputs, $id)
    {
        $formation = $this->getById($id);

        $this->model->seen = $inputs['seen'] == 'true';

        $this->model->save();
    }

    /**
     * Update "active" in Formation.
     *
     * @param  array  $inputs
     * @param  int    $id
     * @return void
     */
    public function updateActive($inputs, $id)
    {
        $formation = $this->getById($id);

        $this->model->active = $inputs['active'] == 'true';

        $this->model->save();
    }
    /**
     * Destroy a Formation.
     *
     * @param  App\Models\Formation $formation
     * @return void
     */
    // public function destroy($formation) {
    //     $this->model->tags()->detach();

    //     $this->model->delete();
    // }

    /**
     * Get Formation slug.
     *
     * @param  int  $comment_id
     * @return string
     */
    public function getSlug($comment_id)
    {
        return $this->comment->findOrFail($comment_id)->Formation->slug;
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

    public function get($id)
    {
        $value = Formation::find($id);  

        if (empty($value)) {
            return array();
        }

        $formation = array ( 
                            "id"=>$value->id,
                            "intitule"=>$value->intitule,
                            "diplome"=>$value->diplome,
                            "date_debut"=>$value->date_debut,
                            "date_fin"=>$value->date_fin,
                            "mention"=>$value->mention,
                            "etablissement"=>$value->etablissement,  
                    );
        return ['formation'=> $formation];
        
    }
}
