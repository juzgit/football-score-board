let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
var myInterval;

function start(){
    let minutes = 0;
    let seconds = 0;
    
    secondsEl.textContent = "0" + seconds;
    
    for (seconds = 0; seconds === 59; seconds++){
      
     if(seconds <= 9){
        secondsEl.textContent;
       
    } if (seconds > 9){
        seconds;
      
    } if (seconds === 59){
        minutes++;
        seconds = 0;
        minutesEl.textContent = "0" + minutes;
       
    } if(minutes > 9){
        minutesEl.textContent = minutes;
       
    } if(minutes === 45){
        stop();
        alert("It is full-time");
       }
       
      myInterval = setInterval(seconds, 1000);
    }
    
   myInterval = setTimeout(start, 1000);
}

function stop(){
    clearInterval(myInterval);
    setTimeout(myInterval,1000);
}

function reset(){
   let seconds = 0;
   let minutes = 0;
    secondsEl.textContent = "0" + seconds;
    minutesEl.textContent = "0" + minutes;
    clearInterval(myInterval);
    setTimeout(myInterval);
}