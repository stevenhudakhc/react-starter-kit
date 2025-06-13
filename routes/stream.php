<?php
use App\Http\Controllers\stream\StreamController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
//  Route::get('stream', [StreamController::class, 'index'])->name('stream.index');
  // Route::resource('stream', StreamController::class)->name('stream');
  Route::get('stream', [StreamController::class, 'index'])->name('stream');
  Route::patch('stream', [StreamController::class, 'update'])->name('stream.update');
  // Route::get('stream', [RegisteredUserController::class, 'stream'])->name('stream');

});
