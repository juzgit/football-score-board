window.onload = function(){
    let minutesEl = document.querySelector(".minutes");
    let secondsEl = document.querySelector(".seconds");
    let minutes = 0;
    let seconds = 0;
    let buttonStart = document.querySelector(".start")
    let buttonPause = document.querySelector(".pause");
    let buttonReset = document.querySelector(".reset");
    var myInterval;
    
   function startTimer(){
    seconds++; // seconds increase by 1

    if (seconds <= 9){
        secondsEl.innerHTML = "0" + seconds; //seconds less 9, display 00:07
    }
    
    if (seconds > 9) {
        secondsEl.innerHTML= seconds; //seco
    }

    if(seconds > 59){
        minutes++;
        minutesEl.innerHTML = "0" + minutes;
        seconds = 0;
        secondsEl.innerHTML = "0" + seconds;
    }

    if (minutes > 9){
        minutesEl.innerHTML = minutes;
    }

    myInterval = setInterval(startTimer, 1000);
}
 
 
}