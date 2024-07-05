document.addEventListener('DOMContentLoaded', function () {
    console.log("Website loaded");
    var audio = document.getElementById('audio');
    var animatedGif = document.getElementById('animatedGif');
    var staticGif = document.getElementById('staticGif');
    var togglePlayButton = document.getElementById('togglePlayButton'); // The new button

    togglePlayButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            console.log('Audio is playing');
            animatedGif.style.display = 'block';
            staticGif.style.display = 'none';
        } else {
            audio.pause();
            console.log('Audio is paused');
            animatedGif.style.display = 'none';
            staticGif.style.display = 'block';
        }
    });

    // Optional: Update GIF display when audio ends naturally
    audio.addEventListener('ended', function () {
        console.log('Audio has ended');
        animatedGif.style.display = 'none';
        staticGif.style.display = 'block';
    });
});