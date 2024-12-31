const btnPlay = document.getElementById("play-button"); 
const btnPause = document.getElementById("pause-button");
const btnStop = document.getElementById("stop-button");

let myVideo = document.getElementsByTagName("video");
       myVideo = myVideo[0];

       let myInterval = setInterval(postTime, 1000);

       function postTime(e) {
        let time = Math.round(myVideo.currentTime);
            document.getElementById("timeOut").innerHTML = "Time: " + time;
       }        

        btnPlay.addEventListener("click", (e) => {
            myVideo.play(); 

    });

        btnPause.addEventListener("click", (e) => {
            myVideo.pause();
            
   }); 

        btnStop.addEventListener("click", (e) => {
            myVideo.pause(); 
            myVideo.currentTime = 0;
    });
