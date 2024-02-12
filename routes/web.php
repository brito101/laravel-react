<?php

use App\Http\Controllers\SpaController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');

Route::view('/{path?}', 'index')
     ->where('path', '.*')
     ->name('react');
