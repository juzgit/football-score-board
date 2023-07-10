let minute = 0;
let second = 0;
let interval;

document.timeWrapper.start.onclick =() =>
start();
document.timeWrapper.pause.onclick = () =>
stop();
document.timeWrapper.reset.onclick = () =>
reset();

function start(){
    pause();
    interval = setInterval(() => { timer(); }, 10);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    minute = 0;
    second = 0;

    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

}

function timer(){
    if(second == 60){
        second = 0;
        minute++;
    }

    if(minute == 45 ){
        pause();
        alert("It is half-time")
        minute = 45;
    }

    if(minute == 90){
        reset();
        alert("It is full-time");
        minute = 90;
    }

    document.getElementById("minutes").innerText = returnData(minute);
    document.getElementById("seconds").innerText = returnData(second);

    function returnData(){

    }

}

let team1 = document.getElementsByClassName("score1");
let team2 = document.getElementsByClassName("score2");
let team1Goal = document.getElementsByClassName("goal1");
let team2Goal = document.getElementsByClassName("goal2");
let scoreDisplay = document.getElementsByClassName("scoreHolder");
updateScores();

team1Goal.addEventListener("click",()=>{
    team1++;
    updateScores();

});

team2Goal.addEventListener("click", ()=>{
    team2++;
    updateScores();
});

function updateScores(){
    scoreDisplay.innerHTML = team1||team2;
};