let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let timeHolder = document.getElementsByClassName("timeWrapper");
var myInterval;

function start(){
    let minutes = 0;
    let seconds = 0;
    timeHolder.textContent = minutesEl + secondsEl;
    
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

// This works
const teamOne = document.getElementById("score1");
const teamTwo = document.getElementById("score2");
const resetScoreBtn = document.getElementById("resetScore");

teamOne.style.color = "white";
teamTwo.style.color = "white";

let homeTeam = 0;
let awayTeam = 0;

function teamOneGoal(){
    homeTeam++;
    teamOne.textContent = homeTeam;
}

function teamTwoGoal(){
    awayTeam++;
    teamTwo.textContent = awayTeam;
}

function restartGoals(){
    homeTeam = 0;
    awayTeam = 0;
    teamOne.textContent = homeTeam;
    teamTwo.textContent = awayTeam;
}