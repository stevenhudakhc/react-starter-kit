<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StreamData extends Model
{
    //
    /**
 * The attributes that are mass assignable.
 *
 * @var array<int, string>
 */
protected $fillable = [
  'head_title',
  'head_description',
  'page_title',
  'page_description',
  'landing_h1',
  'landing_p1',
  'landing_p2',
  'landing_p3',
  'landing_cta',
  'landing_placeholder',
  'landing_downloads',
  'watch_h1',
  'watch_p1',
  'watch_p2',
  'closed_h1',
  'closed_p1',
  'closed_p2',
  'stream_url',
  'style_tag',
  'stream_key',
  'stream_endpoint',
  'stream_domain',
  'stream_password',
  'starting_at',
  'ending_at',
];






/**
 * The attributes that should be hidden for serialization.
 *
 * @var array<int, string>
 */
protected $hidden = [
];
}
