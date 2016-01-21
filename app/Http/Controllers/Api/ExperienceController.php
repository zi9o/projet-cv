<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Experience;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $experience = new Experience() ;

        if (isset($request->all()['intitule'])) {
            $experience->intitule = $request->all()['intitule']; 
        }
        if (isset($request->all()['description'])) {
            $experience->description = $request->all()['description'];
        }
        if (isset($request->all()['organisation'])) {
            $experience->organisation = $request->all()['organisation'];
        }
        if (isset($request->all()['debut'])) {
            $experience->date_debut = $request->all()['debut'];
        }

        if (isset($request->all()['fin'])) {
            $experience->date_fin = $request->all()['fin'];
        }
        if (isset($request->all()['cv_id'])) {
            $experience->cv = \App\Models\Cv::find(intval($request->all()['cv_id']));
            if($this->cv != null) {
                $experience->cv_id = $this->cv->id;
            }
        }

        $experience->save();

        return $experience;
    }

    public function experiences($id)
    {
        $cv = \App\Models\Cv::find($id);
        return $cv->experiences;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cv = \App\Models\Cv::find($id);
        return $cv->experiences;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function edit($id)
    {
        //
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
        $experience = Experience::find($id) ;

        if (isset($request->all()['intitule'])) {
            $experience->intitule = $request->all()['intitule']; 
        }
        if (isset($request->all()['description'])) {
            $experience->description = $request->all()['description'];
        }
        if (isset($request->all()['organisation'])) {
            $experience->organisation = $request->all()['organisation'];
        }
        if (isset($request->all()['ville'])) {
            $experience->organisation = $request->all()['ville'];
        }
        if (isset($request->all()['debut'])) {
            $experience->date_debut = $request->all()['debut'];
        }

        if (isset($request->all()['fin'])) {
            $experience->date_fin = $request->all()['fin'];
        }
        
        $experience->save();

        return $experience ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
