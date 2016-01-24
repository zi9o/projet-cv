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
        if (isset($inputs['intitule'])) {
            $this->model->intitule = $inputs['intitule']; 
        }
        if (isset($inputs['diplome'])) {
            $this->model->diplome = $inputs['diplome'];
        }
        if (isset($inputs['date_debut'])) {
            $this->model->date_debut = $inputs['date_debut'];
        }
        if (isset($inputs['date_fin'])) {
            $this->model->date_fin = $inputs['date_debut'];
        }
        if (isset($inputs['mention'])) {
            $this->model->mention = $inputs['mention'];
        }
        if (isset($inputs['cv_id'])) {
            $this->cv = Cv::find(intval($inputs['cv_id']));
            if($this->cv != null) {
                $this->model->cv_id = $this->cv->id;
            }
        }

        if (isset($inputs['etablissemant_id'])) {
            $this->etablissement = Cv::find(intval($inputs['etablissemant_id']));
            if($this->cv != null) {
                $this->model->etablissemant_id = $this->etablissement->id;
            }
        }
        
        $this->model->save();

        return $this->model;
    }

 
    
   

    public function getFormations($cv_id)
    {
        $cv = Cv::find($cv_id);
        $formations = $cv->formations;

        foreach ($formations as $formation) {
            
            $formation['etablissement'] = $formation->etablissement;
        
        }
        return $formations;
    }

    /**
     * Destroy a model.
     *
     * @param  int $id
     * @return void
     */

    public function destroy($id) {
        try {
            $this->model = $this->getById($id);
            $this->model->delete();
            return $this->model;
        } catch (Exception $e) {
            return null;
        }
        
    }

    /**
     * Get Model by id.
     *
     * @param  int  $id
     * @return App\Models\Model
     */
    public function getById($id) {
        return $this->model->findOrFail($id);
    }

    /**
     * Create a Model.
     *
     * @param  array  $inputs
     * @return model
     */
    public function store($inputs) {

        
        // $model->created_at = date("F j, Y, g:i a");

        $this->model = new Formation() ;
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
        $this->model = Formation::find($id);
        return $this->save($inputs);
    }

}
