<?php 

namespace App\Repositories;

use App\Models\Etablissement;

class EtablissementRepository extends BaseRepository{

	    
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
    public function __construct(Etablissement $etablissement) 
    {
        $this->model = $etablissement;
    }

    /**
	 * Get etablissements collection.
	 *
	 * @return Illuminate\Support\Collection
	 *
	 */
	
    public function index()
    {
        $etablissements = Etablissement::get();
        
        return $etablissements;
    }
	

    /**
     * Create or update a Formation.
     *
     * @param  App\Models\Formation $formation
     * @param  array  $inputs
     * @param  bool   $user_id
     * @return App\Models\Formation
     */
    public function save($inputs)
    {
        if (isset($inputs['code'])) {
            $this->model->code = $inputs['code']; 
        }
        if (isset($inputs['designation'])) {
            $this->model->designation = $inputs['designation'];
        }
        if (isset($inputs['ville'])) {
            $this->model->ville = $inputs['ville'];
        }
        
        $this->model->save();

        return $this->model;
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
    	
            return $this->model->find($id);
	    
        
    }

    /**
     * Create a Model.
     *
     * @param  array  $inputs
     * @return model
     */
    public function store($inputs) {

        
        // $model->created_at = date("F j, Y, g:i a");

        $this->model = new Etablissement() ;
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
        $this->model = Etablissement::find($id);
        return $this->save($inputs);
    }
}
