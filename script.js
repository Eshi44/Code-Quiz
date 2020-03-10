//Check to insure javascript file works
//console.log("Hello World");
var timeEl = document.getElementById("time");

//Create event listener so that when user clicks start quiz buttton, 
//the first-page will hide and the second page will appear
//Create seond-page in html

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