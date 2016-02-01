<?php

namespace App\Repositories;

use App\Models\Competence;
use App\Models\Cv;

class CompetenceRepository extends BaseRepository {

    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $cv;

    

    /**
     * Create a new CompetenceRepository instance.
     *
     * @param  App\Models\Competence $competence
     * @param  App\Models\Tag $tag
     * @param  App\Models\Comment $comment
     * @return void
     *
     */
    public function __construct(Competence $competence, Cv $cv) 
    {
        $this->model = $competence;
        $this->cv = $cv;
    }

    /**
     * Create or update a competence.
     *
     * @param  App\Models\Competence $Competence
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\Competence
     */
    public function save($inputs)
    {
        if (isset($inputs['intitule'])) {
            $this->model->intitule = $inputs['intitule']; 
        }
        if (isset($inputs['niveau'])) {
            $this->model->niveau = $inputs['niveau'];
        }
        if (isset($inputs['cv_id'])) {
            $this->cv = Cv::find(intval($inputs['cv_id']));
            if($this->cv != null) {
                $this->model->cv_id = $this->cv->id;
            }
        }

        $this->model->save();

        return $this->model;
    }


    /**
     * Get Competence collection.
     *
     * @param  App\Models\competence $competence
     * @return array
     */

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

        $this->model = new Competence() ;
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
        $this->model = Competence::find($id);
        return $this->save($inputs);
    }

}
