let minutes = 0;
let seconds = 0;

function start(){
    timer = true;
    myCounter();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false
    minutes = 0;
    seconds = 0;
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
}

function myCounter(){
    if(timer){
        seconds++;
        
        if( seconds == 60){
            minutes++;
            seconds = 0;
        }

        if(minutes == 10){
            alert("The match is finished");
            reset();
        }

        let minutesEl = minutes;
        let secondsEl = seconds;

        if(minutes < 10){
            minutesEl = "0" + minutes;
        } 

        if (seconds < 10){
            secondsEl = "0" + seconds;
        }

        document.getElementById("minutes").textContent = minutesEl;
        document.getElementById("seconds").textContent = secondsEl;
        setTimeout(myCounter,1000);
    }
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