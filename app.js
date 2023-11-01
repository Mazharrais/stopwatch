

//*********STOP-WATCH********** */

var hour = 0;
var minute = 0;
var sec = 0;
var count = 0;


var timer = flase;



function start(){
    timer = true;
    stopWatch()

}

function stop() {
    timer = false;
}

function reSet() {
    timer = false;


   hour = 0;
     minute = 0;
     sec = 0;
     count = 0;

    
   document.getElementById("hr").innerHTML = "00";
   document.getElementById("mint").innerHTML = "00";
    document.getElementById("sec").innerHTML ="00";
    document.getElementById("count").innerHTML = "00";
    
    
}

function stopWatch(){
  if(timer == true){
    count = count+1;

    if(count == 60){
        sec = sec+1;
        count = 0;
    }
    if(sec == 60){
        minute = minute+1;
        sec = 0
    }
   if(mint == 60){
    hour = hour+1;
    minute = 0;
    sec = 0;
     

   var hourString = hour;
   var minuteString = minute;
   var secString = sec;
   var countString = count;

   if(hour < 10){
      hourString = "0" + hourString;
   }
   if(minute < 10){
    minuteString = "0" + minuteString;
   }
   if(secString < 10){
    secString = "0" + secString;
   }
  if(countString < 10){
    countString = "0" + countString;
  }




   }
   document.getElementById("hr").innerHTML = hour;
   document.getElementById("mint").innerHTML = minute;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;


    setTimeout(stopWatch , 10);
  }
}