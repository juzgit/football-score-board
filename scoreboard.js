let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
const startBtn = document.querySelector(".start");
var myInterval;

startBtn.addEventListener("click", function() {

    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";

    let fullTime = 11*60;

    let totalTime = parseInt(minutesEl.innerHTML) + parseInt(secondsEl.innerHTML);

    fullTime = totalTime;
    

    secondsEl++;
   
    if(secondsEl.innerHTML <= 9){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if(secondsEl.innerHTML == 9){
        totalTime = minutesEl.innerHTML + parseInt("10") + secondsEl.innerHTML;
    } if(secondsEl.innerHTML <= 19 ){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if(secondsEl.innerHTML == 19){
        totalTime = minutesEl.innerHTML + parseInt("20") + secondsEl.innerHTML;
    } if(secondsEl.innerHTML <= 29){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if(secondsEl.innerHTML == 29){
        totalTime = minutesEl.innerHTML + parseInt("30") + secondsEl.innerHTML;
    } if (secondsEl.innerHTML <= 39){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if (secondsEl.innerHTML == 39){
        totalTime = minutesEl.innerHTML + parseInt("40") + secondsEl.innerHTML;
    } if (secondsEl.innerHTML <= 49 ){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if (secondsEl.innerHTML == 49){
        totalTime = minutesEl.innerHTML + parseInt("50") + secondsEl.innerHTML;
    } if(secondsEl.innerHTML <= 59){
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
    } if(secondsEl.innerHTML == 59){
        minutesEl.innerHTML++;
        totalTime = minutesEl.innerHTML + secondsEl.innerHTML;
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