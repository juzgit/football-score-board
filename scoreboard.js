let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
const startBtn = document.querySelector(".start");
var myInterval;

startBtn.addEventListener("click", function() {

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    let fullTime = 11*60;

    let totalTime = parseInt(minutesEl) + parseInt(secondsEl);

    fullTime = totalTime;
    

    secondsEl++;
   
    if(secondsEl <= 9){
        totalTime = minutesEl + secondsEl;
    } if(secondsEl == 9){
        totalTime = minutesEl + parseInt("10") + secondsEl;
    } if(secondsEl <= 19 ){
        totalTime = minutesEl + secondsEl;
    } if(secondsEl == 19){
        totalTime = minutesEl + parseInt("20") + secondsEl;
    } if(secondsEl <= 29){
        totalTime = minutesEl + secondsEl;
    } if(secondsEl == 29){
        totalTime = minutesEl + parseInt("30") + secondsEl;
    } if (secondsEl <= 39){
        totalTime = minutesEl + secondsEl;
    } if (secondsEl == 39){
        totalTime = minutesEl + parseInt("40") + secondsEl;
    } if (secondsEl <= 49 ){
        totalTime = minutesEl + secondsEl;
    } if (secondsEl == 49){
        totalTime = minutesEl + parseInt("50") + secondsEl;
    } if(secondsEl <= 59){
        totalTime = minutesEl + secondsEl;
    } if(secondsEl == 59){
        minutesEl++;
        totalTime = minutesEl + secondsEl;
    }
}); 



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