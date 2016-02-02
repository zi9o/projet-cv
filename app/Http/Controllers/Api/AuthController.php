<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{

	public function __construct()
    {
        $this->middleware('auth');
        
        
    }

    public function logged()
    {
        return Auth::user()->etudiant;
    }

}
