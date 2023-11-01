

//*********STOP-WATCH********** */

var hour = 0;
var minute = 0;
var sec = 0;
var milisec = 0;
var interval;

var hourHeading = document.getElementById("hour");
var minuteHeading = document.getElementById("minute");
var secHeading= document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");

function startTimer() {
    milisec++;
    milisecHeading.innerHTML = milisec;
    if(milisec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        milisec = 0;
    }
    else if(sec >= 60) {
        minute++;
        minuteHeading.innerHTML = minute;
        sec = 0;
    }
    else if(minute >= 60) {
        hour++;
        hourHeading.innerHTML = hour;
        minute = 0;
    }
}

function start(){
    interval = setInterval(startTimer, 10);

}

function pause() {
    clearInterval(interval);
}

function reset() {
     hour = 0;
     minute = 0;
     sec = 0;
     milisec = 0;
     hourHeading.innerHTML = hour;
     minuteHeading.innerHTML = minute;
     secHeading.innerHTML = sec;
     milisecHeading.innerHTML = milisec;
     pause();
}