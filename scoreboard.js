var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var myInterval;

var seconds;
var minutes;

function start(){

    myInterval = setTimeout(start, 1000);
   
     minutes = 0;
     seconds = 0;

    secondsEl.textContent = "0" + seconds;
    minutesEl.textContent = "0" + minutes;

     let totalMinutes = 11 * 60;
    
    
    for (let i = 0; i <= 60; i++){
        
        seconds++;
     
        if(seconds <= 9){
        secondsEl.textContent;
       
    } if (seconds > 9){
        seconds;
      
    } if (seconds == 59){
        minutes++;
        seconds = 0;
        minutesEl.textContent = "0" + minutes;
       
     } if(minutes == totalMinutes){
        stop();
        alert("It is full-time");
       }
       
      myInterval = setInterval(seconds, 1000);
    }
   
}

function stop(){
    clearInterval(myInterval);
    setTimeout(myInterval,1000);
}

function reset(){
    clearInterval(myInterval);
    seconds = "00";
    minutes = "00";
    secondsEl.textContent = seconds;
    minutesEl.textContent = minutes;
   
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