<?php

namespace App\Http\Controllers\stream;

use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Http\Requests\Stream\StreamDataUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\StreamData;
use App\Models\Users;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use App\Http\Controllers\Controller;

class StreamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      // Retrieve the currently authenticated user...
      $user = Auth::user();
      $roles = Role::all();
      // $stream_data = new StreamData();
      // $stream_data->user_id = 1;
      // $stream_data->head_title = "first stream titleasasa";
      // $stream_data->save();
      $user_id = $user->id;
      $stream_data = StreamData::where('user_id',$user_id)->first();
      if (is_null($stream_data)){
//        dd($stream_data);
          $stream_data = new StreamData;
      }
        // dd($stream_data);
      // $role = Role::create(['name' => 'superadmin']);
      // $permission = Permission::create(['name' => 'view all']);
      //
      // $user->assignRole('superadmin');

      if($user->hasRole('superadmin'))
        return Inertia::render('stream/list');

        //add for logged in normal users that control

      return Inertia::render('stream/edit', ['stream_data' => $stream_data]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $stream_data = new StreamData();
        $stream_data->save();
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
    //    public function update(Request $request, string $id)
     */
     public function update(StreamDataUpdateRequest $request, StreamData $stream_data): RedirectResponse
    {
      $user = Auth::user();
       // dd($request);
        // check to see if it is new or update
        if (isset($request->stream_data['id'])){
          $stream_data = StreamData::where('id', $request->stream_data['id'])->first();
          $stream_data->update($request->validated());
          $stream_data->save();

        }
        else{
          // dd(null);//2025-01-01
          $stream_data = StreamData::create($request->validated());
          $stream_data->user_id = $user['id'];
          $stream_data->save();
        }

        // $stream_data->page_title = $request->page_title;
        // $stream_data->head_description = $request->head_description;
        // $stream_data->head_title = $request->head_title;
        //
        //
        //
        // $stream_data->update();


        // dd($stream_data);
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

//
        return to_route('stream');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
