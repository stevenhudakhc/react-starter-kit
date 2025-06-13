<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stream_data', function (Blueprint $table) {
            $table->id();
            $table->string('head_title')->nullable();
            $table->string('head_description')->nullable();
            $table->string('page_title')->nullable();
            $table->string('page_description')->nullable();
            $table->string('landing_h1')->nullable();
            $table->string('landing_p1')->nullable();
            $table->string('landing_p2')->nullable();
            $table->string('landing_p3')->nullable();
            $table->string('landing_cta')->nullable();
            $table->string('landing_placeholder')->nullable();
            $table->string('landing_downloads')->nullable();
            $table->string('watch_h1')->nullable();
            $table->string('watch_p1')->nullable();
            $table->string('watch_p2')->nullable();
            $table->string('watch_password')->nullable();
            $table->string('closed_h1')->nullable();
            $table->string('closed_p1')->nullable();
            $table->string('closed_p2')->nullable();
            $table->string('stream_url')->nullable();
            $table->string('stream_key')->nullable();
            $table->string('stream_endpoint')->nullable();
            $table->string('stream_domain')->nullable();
            $table->string('stream_password')->nullable();

            $table->text('style_tag')->nullable();

            $table->foreignId('user_id')->nullable()->index();

            $table->timestamp('starting_at')->nullable();
            $table->timestamp('ending_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stream_data');
    }
};
