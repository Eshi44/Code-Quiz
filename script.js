//Check to insure javascript file works
//console.log("Hello World");
var timeEl = document.getElementById("time");

//Create event listener so that when user clicks start quiz buttton, 
//the first-page will hide and the second page will appear
//and the timer will start
//Create seond-page in html

var starBtn = document.getElementById("start-Btn");
var ques1Answer = document.getElementById("oneBtn3Correct");
var incorrectOne = document.querySelectorAll("#oneBtn1, #oneBtn2, #oneBtn3");
console.log(incorrectOne);

var ques2Answer = document.getElementById("twoBtn3Correct");
var ques3Answer = document.getElementById("threeBtn4Correct");
var ques4Answer = document.getElementById("fourBtn3Correct");
var ques5Answer = document.getElementById("fiveBtn4Correct");
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
fifthPage.style.display = "none";
sixthPage.style.display = "none";

starBtn.addEventListener("click", function () {
   
    secondsLeft = 75; 
    setTime();
    firstPage.style.display = "none";
    secondPage.style.display = "block";
 // console.log("You've clicked me!");  
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


//User clicks on correct answer for question 1
ques1Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPage, 2000);
      
    
// //console.log("You've clicked me!");  
});


for (var i=0; i<incorrectOne.length; i++){
  incorrectOne[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    setTimeout(goToNextPage, 2000);
  });

//console.log("You've clicked me!");  
};

  
function goToNextPage() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  secondPage.style.display = "none";
  thirdPage.style.display = "block";

}


// question2.addEventListener("click", function () {
   
//   thirdPage.style.display = "none";
//   fourthPage.style.display = "block";
// //console.log("You've clicked me!");  
// });

// question3.addEventListener("click", function () {
   
//   fourthPage.style.display = "none";
//   fifthPage.style.display = "block";
// //console.log("You've clicked me!");  
// });

// question4.addEventListener("click", function () {
   
//   fifthPage.style.display = "none";
//   sixthPage.style.display = "block";
// //console.log("You've clicked me!");  
// });




      
