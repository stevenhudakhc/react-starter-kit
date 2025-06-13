<?php

use App\Http\Controllers\landing\LandingController;
use App\Http\Controllers\Dashboard\DashboardController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LandingController::class, 'index'])->name('home');

Route::post('/check_password', [LandingController::class, 'check_password'])->name('check_password');


Route::get('/dashboard', function () {
//  return redirect('/admin'); // after we get the dashboar fleshed out
  return redirect('/stream'); // go directly to the stream after login
})->name('dashboard'); // renamed for auto redirect after auth

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //   // return Inertia::render('dashboard');
    // })->name('dashboard');
    Route::resource('admin', DashboardController::class);


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/stream.php';
