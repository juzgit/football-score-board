let seconds = 0;
let minutes = 0;

function start(){
    let timeHolder = document.querySelector(".timeWrapper");
    let minutesElChild = parentElement.querySelector("#minutes")[0];
    let secondsElChild = parentElement.querySelector("#seconds")[1];
    minutesElChild.textContent = "00";
    secondsElChild.textContent = "00";
    timeHolder.textContent = minutesElChild + ":" + secondsElChild;
    let myInterval;

    minutes = minutesElChild;
    seconds = secondsElChildElChild;

    seconds++;
    clearInterval(myInterval);
    myInterval = setInterval(start(), 1000);
    
    if (seconds <= 9){
        secondsElChild.textContent= "0" + seconds;
    
    } if(seconds > 9){
        secondsElChild.textContent = seconds;
   
    } if(seconds > 59){
        minutes++;
        minutesElChild.textContent = "0" + minutes;
        seconds = 0;
        secondsElChild.textContent = "0" + seconds
    
    } if (minutes > 9){
        minutesElChild.textContent = minutes;
    
    } if(minutes == 45){

    }

    }

