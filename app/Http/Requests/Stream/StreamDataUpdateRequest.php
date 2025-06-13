<?php

namespace App\Http\Requests\Stream;

use Illuminate\Foundation\Http\FormRequest;


use App\Models\User;
use App\Models\StreamData;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class StreamDataUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          'head_title' => ['string', 'max:255'],
          'head_description' => ['string', 'max:255'],
          'page_title' => ['string', 'max:255'],
          'page_description' => ['string', 'max:255'],
          'landing_h1' => ['string', 'max:255'],
          'landing_p1' => ['string', 'max:255'],
          'landing_p2' => ['string', 'max:255'],
          'landing_p3' => ['string', 'max:255'],
          'landing_cta' => ['string', 'max:255'],
          'landing_placeholder' => ['string', 'max:255'],
          'landing_downloads' => ['string', 'max:255'],
          'watch_h1' => ['string', 'max:255'],
          'watch_p1' => ['string', 'max:255'],
          'watch_p2' => ['string', 'max:255'],
          'closed_h1' => ['string', 'max:255'],
          'closed_p1' => ['string', 'max:255'],
          'closed_p2' => ['string', 'max:255'],
          'stream_url' => ['string', 'max:255'],
          'style_tag' => ['string', 'max:2550'],
          'stream_key' => ['string', 'max:255'],
          'stream_endpoint' => ['string', 'max:255'],
          'stream_domain' => ['string', 'max:255'],
          'starting_at' => ['date'],
          'ending_at' => ['date'],
        ];
    }
}


/*
'',

'',
'',
'',
*/
