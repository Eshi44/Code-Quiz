//Check to insure javascript file works
//console.log("Hello World");
var timeEl = document.getElementById("time");

var secondsLeft = 76;
//Set time
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time:" + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

setTime();