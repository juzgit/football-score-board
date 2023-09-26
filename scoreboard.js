//declaring the minutes and seconds variables
let minutes = 0;
let seconds = 0;

//a function for the start button
function start(){
    //assign true to the timer
    //starts the counter
    timer = true;
    //invoking the counter function
    myCounter();
}

function stop(){
    //assign false to the timer
    //it stops the counter
    timer = false;
}

function reset(){
    //assign false to the timer
    //it stops the counter
    timer = false
    //reset the minutes and seconds to zero
    minutes = 0;
    seconds = 0;
    //display the zeros in the webpage
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
}

//counter function
function myCounter(){
    //if the timer is true
    if(timer){
        //seconds increment
        seconds++;
        //when seconds reaches 60
        if( seconds == 60){
            //minutes increments
            minutes++;
            //set seconds to zero 
            seconds = 0;
        }

        //if minutes reaches 10
        if(minutes == 10){
            //alert the match is over
            alert("The match is finished");
            //invoke the reset button
            reset();
        }

        //html elements get the minutes and seconds variables
        let minutesEl = minutes;
        let secondsEl = seconds;

        //the counter should show 0minutes:seconds
        //if its below 10
        if(minutes < 10){
            minutesEl = "0" + minutes;
        } 

        //the counter should show minutes:0second
        //if its below 10 seconds
        if (seconds < 10){
            secondsEl = "0" + seconds;
        }

        //get the html elements
        document.getElementById("minutes").textContent = minutesEl;
        document.getElementById("seconds").textContent = secondsEl;
        //the counter updates every second
        setTimeout(myCounter,1000);
    }
}


//getting the score elements
const teamOne = document.getElementById("score1");
const teamTwo = document.getElementById("score2");
//gettting the reset score button
const resetScoreBtn = document.getElementById("resetScore");

//the text of the scores will be in white
teamOne.style.color = "white";
teamTwo.style.color = "white";

//assigned the hometeam and awayteam default scores
let homeTeam = 0;
let awayTeam = 0;

//made the teamOneGoal function
//when team 1 scores it increments by pressing the goal 1 button
function teamOneGoal(){
    homeTeam++;
    teamOne.textContent = homeTeam;
}

//made the teamOneGoal function
//when team 1 scores it increments by pressing the goal 1 button
function teamTwoGoal(){
    awayTeam++;
    teamTwo.textContent = awayTeam;
}

//resets the goals to their default scores
function restartGoals(){
    homeTeam = 0;
    awayTeam = 0;
    teamOne.textContent = homeTeam;
    teamTwo.textContent = awayTeam;
}