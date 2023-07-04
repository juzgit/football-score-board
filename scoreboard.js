window.onload = function(){
    let minutesEl = document.getElementsByClassName("minutes");
    let secondsEl = document.getElementsByClassName("seconds");
    let minutes = 0;
    let seconds = 0;
    let buttonStart = document.getElementsByClassName("start");
    let buttonPause = document.getElementsByClassName("pause");
    let buttonReset = document.getElementsByClassName("reset");
    var myInterval;
    
   buttonStart = function startTimer(){
        seconds++;
    
        if (seconds <= 9){
            secondsEl.textContent = "0" + seconds;
        }
    
        if (seconds > 9) {
            secondsEl.textContent = seconds;
        }
    
        if(seconds > 59){
            minutes++;
            minutesEl.textContent = "0" + minutes;
            seconds = 0;
            secondsEl.textContent = "0" + seconds;
        }
    
        if (minutes > 9){
            minutesEl.textContent = minutes;
        }
    
        myInterval = setInterval(startTimer, 1000);
    }
    
    startTimer();  
}

