document.addEventListener('DOMContentLoaded', function () {
    console.log("Website loaded");

    var audio = document.querySelector('#latest');

    audio.addEventListener('play', function () {
        console.log('Audio played');
        // Perform actions when the audio starts playing
    });

    audio.addEventListener('pause', function () {
        console.log('Audio paused');
        // Perform actions when the audio is paused
    });

    audio.addEventListener('ended', function () {
        console.log('Audio ended');
        // Perform actions when the audio finishes playing
    });
});