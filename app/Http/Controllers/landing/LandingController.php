<?php

namespace App\Http\Controllers\landing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\StreamData;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class LandingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user = Auth::user();
        $roles = Role::all();
        $stream_domain = $_SERVER['SERVER_NAME'];
        $stream_data = StreamData::where('stream_domain',$stream_domain)->first();

// dd($ending_ts);
        if (is_null($stream_data)){ // if the domain doesn't match a record
          return Inertia::render('welcome');
        }

        $starting_ts = strtotime($stream_data['starting_at']);
        $ending_ts = strtotime($stream_data['ending_at']);
        $current_ts = strtotime(date("Y-m-d h:i:s"));


        // check the states to see which site to show
        // pre event

        if ($current_ts < $starting_ts ){ // current time is smaller than start
          return Inertia::render('dashboard', ['stream_data' => $stream_data, 'stuff' => "stuff"]);

        }

        // event live

        if ($current_ts > $starting_ts && $current_ts < $ending_ts){ // current time is bigger than start but less than ending
          return Inertia::render('password_check', ['stream_data' => $stream_data, 'stuff' => "stuff"]);

        }

        // post event - list as default
        if ($current_ts > $ending_ts){ // current time is bigger than  ending
          return Inertia::render('stream_over', ['stream_data' => $stream_data, 'stuff' => "stuff"]);

        }



    }

    /**
     * Show the form for creating a new resource.
     */
    public function check_password(Request $request)
    {
        //
        $user = Auth::user();
        $roles = Role::all();
        $stream_domain = $_SERVER['SERVER_NAME'];
        $watch_password = $request['watch_password'];
        $stream_data = StreamData::where('stream_domain',$stream_domain)->where('watch_password',$watch_password)->first();
        // dd($stream_data);
        return view('show_stream', ['stream_data' => $stream_data]);
        //
        // return Inertia::render('show_stream');

    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
