<?php

namespace App\Repositories;

use App\Models\Langue;
use App\Models\Cv;

class LangueRepository extends BaseRepository {

    /**
     * The Tag instance.
     *
     * @var App\Models\Tag
     */
    protected $cv;

    

    /**
     * Create a new LangueRepository instance.
     *
     * @param  App\Models\Langue $langue
     * @param  App\Models\Tag $tag
     * @param  App\Models\Comment $comment
     * @return void
     *
     */
    public function __construct(Langue $langue, Cv $cv) 
    {
        $this->model = $langue;
        $this->cv = $cv;
    }

    /**
     * Create or update a Langue.
     *
     * @param  App\Models\Langue $langue
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\Langue
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
     * Get Langue collection.
     *
     * @param  App\Models\Langue $langue
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

        $this->model = new Langue() ;
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
        $this->model = Langue::find($id);
        return $this->save($inputs);
    }

}
