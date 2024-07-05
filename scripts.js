// Example JavaScript to add interactivity (optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log("Website loaded");
    var audio = document.getElementById('audio');
    var animatedGif = document.getElementById('animatedGif');
    var staticGif = document.getElementById('staticGif');

    audio.addEventListener('play', function () {
        animatedGif.style.display = 'block';
        staticGif.style.display = 'none';
    });

    audio.addEventListener('pause', function () {
        animatedGif.style.display = 'none';
        staticGif.style.display = 'block';
    });

    audio.addEventListener('ended', function () {
        animatedGif.style.display = 'none';
        staticGif.style.display = 'block';
    });
});