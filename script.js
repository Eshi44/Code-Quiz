//Check to insure javascript file works
//console.log("Hello World");
var timeEl = document.getElementById("time");

//Create event listener so that when user clicks start quiz buttton, 
//the first-page will hide and the second page will appear
//and the timer will start
//Create seond-page in html

var starBtn = document.getElementById("start-Btn");
var ques2Answer = document.getElementById("oneBtn3Correct");
var firstPage = document.getElementById("first-page");
var secondPage = document.getElementById("second-page");
var thirdPage = document.getElementById("third-page");
var fourthPage = document.getElementById("fourth-page");
var fifthPage = document.getElementById("fifth-page");
var sixthPage = document.getElementById("sixth-page");

var secondsLeft = 0;
timeEl.textContent = "Time: " + secondsLeft;

secondPage.style.display = "none";
thirdPage.style.display = "none";
fourthPage.style.display = "none";

starBtn.addEventListener("click", function () {
   
    secondsLeft = 75; 
    setTime();
    firstPage.style.display = "none";
    secondPage.style.display = "block";
 // console.log("You've clicked me!");  
});

ques2Answer.addEventListener("click", function () {
   
    secondPage.style.display = "none";
    thirdPage.style.display = "block";
  //console.log("You've clicked me!");  
});




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


