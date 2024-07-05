// Example JavaScript to add interactivity (optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log("Website loaded");
    var audio = document.getElementById('audio');
    var animatedGif = document.getElementById('animatedGif');
    var staticGif = document.getElementById('staticGif');

    audio.addEventListener('play', function () {
        console.log('Audio is playing');
        animatedGif.style.display = 'block';
        staticGif.style.display = 'none';
    });

    audio.addEventListener('pause', function () {
        console.log('Audio is paused');
        animatedGif.style.display = 'none';
        staticGif.style.display = 'block';
    });

    audio.addEventListener('ended', function () {
        console.log('Audio has ended');
        animatedGif.style.display = 'none';
        staticGif.style.display = 'block';
    });
});