function playSong(songs) {
    var audioPlayer = document.getElementById("audio-player");
    var songTitle = document.getElementById("song-title");
    var songInfo = document.querySelector(".song-info");
    var songImage = document.getElementById("song-image");
    var audioPlayer = document.getElementById("audio-player");
    var currentTimeDisplay = document.getElementById("current-time");
    var durationDisplay = document.getElementById("duration");

//popup ani
    document.querySelectorAll(".song-info").forEach(function(info) {
        info.classList.remove("show");
    });

// play song func
    if (songs === 'dieforu') {
        audioPlayer.src = "songs/dieforu.mp3";
        songTitle.innerText = "Die For You";
        songImage.src = "picutre/dieforuu.png";
    } else if (songs === 'cooldown') {
        audioPlayer.src = "songs/cooldown.mp3";
        songTitle.innerText = "Cool Down";
        songImage.src = "picutre/cooldownn.jpg";
    } else if (songs === 'magnetic') {
        audioPlayer.src = "songs/magnetic.mp3";
        songTitle.innerText = "Magnetic";
        songImage.src = "picutre/magnetic.jpg";
    }
    
//song timer
    audioPlayer.addEventListener("timeupdate", function() {
        var currentTime = audioPlayer.currentTime;
        var duration = audioPlayer.duration;
    
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    });

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return minutes + ":" + seconds;
    }

    audioPlayer.play();
    songInfo.classList.add("show");
}
