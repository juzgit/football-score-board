let seconds = 0;
let minutes = 0;

function start(){
    let timeHolder = document.querySelector(".timeWrapper");
    let minutesElChild = parentElement.querySelector("#minutes")[0];
    let secondsElChild = parentElement.querySelector("#seconds")[1];
    minutesElChild.textContent = "00";
    secondsElChild.textContent = "00";
    timeHolder.textContent = minutesElChild + ":" + secondsElChild;
    
}