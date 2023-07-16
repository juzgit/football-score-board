let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
var myInterval;

function start(){
    let minutes = 0;
    let seconds = 0;
    
    secondsEl.textContent = "0" + seconds;
    minutesEl.textContent = "0" + minutes;

    seconds++;
    
    for (let i = 0; i == 59; i++){
      
     if(seconds[i] <= 9){
        secondsEl.textContent;
       
    } if (seconds[i] > 9){
        seconds;
      
    } if (seconds[i] == 59){
        minutes++;
        seconds = 0;
        minutesEl.textContent = "0" + minutes;
       
    } if(minutes[i] > 9){
        minutesEl.textContent = minutes;
       
    } if(minutes[i] == 45){
        stop();
        alert("It is full-time");
       }
       
      myInterval = setInterval(seconds, 1000);
    }
    
   myInterval = setTimeout(start, 1000);

   return timeHolder;
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