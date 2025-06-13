
<!DOCTYPE html>
<html lang="en">
  <!-- # Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. -->
  <!-- # SPDX-License-Identifier: MIT-0 -->
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Amazon IVS Video.js Integration demo</title>
    <link rel="stylesheet" href="style.css" />

    <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.17.0/video-js.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.17.0/video.js"></script>
    <script src="https://player.live-video.net/1.10.0/amazon-ivs-videojs-tech.min.js"></script>
    <script src="https://player.live-video.net/1.10.0/amazon-ivs-quality-plugin.min.js"></script>

<style>
body{
  margin: 0px;
}

</style>

  </head>
  <body>


        <div class="player-wrapper">
          <video id="amazon-ivs-videojs" class="video-js vjs-fluid vjs-big-play-centered" controls autoplay playsinline></video>
        </div>

  </body>
  <script>
  /*
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: MIT-0
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy of this
   * software and associated documentation files (the "Software"), to deal in the Software
   * without restriction, including without limitation the rights to use, copy, modify,
   * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  // Playback configuration
  // Replace this with your own Amazon IVS Playback URL
  // const playbackUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';

//const playbackUrl = 'https://d11khm0072m6i3.cloudfront.net/990bb106-4b0a-4432-9679-6e47cf88988a/AppleHLS1/Tre-Stelle-Recipe-9.m3u8';
const playbackUrl = '{{$stream_data['stream_endpoint']}}';

  // Initialize player
  (function () {
    // Set up IVS playback tech and quality plugin
    registerIVSTech(videojs);
    registerIVSQualityPlugin(videojs);

    // Initialize video.js player
    const videoJSPlayer = videojs("amazon-ivs-videojs", {
        techOrder: ["AmazonIVS"],
        controlBar: {
            playToggle: {
                replay: false
            }, // Hides the replay button for VOD
            pictureInPictureToggle: false // Hides the PiP button
        }
    });

    // Use the player API once the player instance's ready callback is fired
    const readyCallback = function () {
        // This executes after video.js is initialized and ready
        window.videoJSPlayer = videoJSPlayer;

        // Get reference to Amazon IVS player
        const ivsPlayer = videoJSPlayer.getIVSPlayer();

        // Show the "big play" button when the stream is paused
        const videoContainerEl = document.querySelector("#amazon-ivs-videojs");
        videoContainerEl.addEventListener("click", () => {
            if (videoJSPlayer.paused()) {
                videoContainerEl.classList.remove("vjs-has-started");
            } else {
                videoContainerEl.classList.add("vjs-has-started");
            }
        });

        // Logs low latency setting and latency value 5s after playback starts
        const PlayerState = videoJSPlayer.getIVSEvents().PlayerState;
        ivsPlayer.addEventListener(PlayerState.PLAYING, () => {
            console.log("Player State - PLAYING");
            setTimeout(() => {
                console.log(
                    `This stream is ${
                        ivsPlayer.isLiveLowLatency() ? "" : "not "
                    }playing in ultra low latency mode`
                );
                console.log(`Stream Latency: ${ivsPlayer.getLiveLatency()}s`);
            }, 5000);
        });

        // Log errors
        const PlayerEventType = videoJSPlayer.getIVSEvents().PlayerEventType;
        ivsPlayer.addEventListener(PlayerEventType.ERROR, (type, source) => {
            console.warn("Player Event - ERROR: ", type, source);
        });

        // Log and display timed metadata
        ivsPlayer.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (cue) => {
            const metadataText = cue.text;
            const position = ivsPlayer.getPosition().toFixed(2);
            console.log(
                `Player Event - TEXT_METADATA_CUE: "${metadataText}". Observed ${position}s after playback started.`
            );
        });

        // Enables manual quality selection plugin
        videoJSPlayer.enableIVSQualityPlugin();

        // Set volume and play default stream
        videoJSPlayer.volume(0.5);
        videoJSPlayer.src(playbackUrl);
    };

    // Register ready callback
    videoJSPlayer.ready(readyCallback);
  })();
  </script>
</html>
