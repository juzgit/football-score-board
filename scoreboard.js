var second = 0;
function start( count ){
    return count > 9 ? count : '0' + count; }
    setInterval( function(){
        document.getElementById('seconds').innerHTML = start(++second % 60);
        document.getElementById('minutes').innerHTML = start(parseInt(second/ 60, 10));
    },1000);




/* function reset(){
    clearInterval(myInterval);
    seconds = "00";
    minutes = "00";
    secondsEl.textContent = seconds;
    minutesEl.textContent = minutes;
   
} */

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