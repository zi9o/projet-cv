<?php

namespace App\Repositories;

use App\Models\Experience;
use App\Models\Cv;
use DB;

class ExperienceRepository extends BaseRepository {

    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $cv;

    

    /**
     * Create a new ExperienceRepository instance.
     *
     * @param  App\Models\experience $experience
     * @param  App\Models\Tag $tag
     * @param  App\Models\Comment $comment
     * @return void
     *
     */
    public function __construct(Experience $experience, Cv $cv) 
    {
        $this->model = $experience;
        $this->cv = $cv;
    }

    /**
     * Create or update a experience.
     *
     * @param  App\Models\experience $experience
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\Experience
     */
    public function save($inputs)
    {
        if (isset($inputs['intitule'])) {
            $this->model->intitule = $inputs['intitule']; 
        }
        if (isset($inputs['description'])) {
            $this->model->description = $inputs['description'];
        }
        if (isset($inputs['organisation'])) {
            $this->model->organisation = $inputs['organisation'];
        }
        if (isset($inputs['ville'])) {
            $this->model->ville = $inputs['ville'];
        }
        if (isset($inputs['date_debut'])) {
            $this->model->date_debut = $inputs['date_debut'];
        }

        if (isset($inputs['date_fin'])) {
            $this->model->date_fin = $inputs['date_debut'];
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
     * Get experience collection.
     *
     * @param  App\Models\experience $experience
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

        $this->model = new Experience() ;
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
        $this->model = Experience::find($id);
        return $this->save($inputs);
    }

}
