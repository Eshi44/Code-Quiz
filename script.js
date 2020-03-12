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
var ques2Answer = document.getElementById("twoBtn3Correct");
var incorrectTwo = document.querySelectorAll("#twoBtn1, #twoBtn2, #twoBtn4");
var ques3Answer = document.getElementById("threeBtn4Correct");
var incorrectThree = document.querySelectorAll("#threeBtn1, #threeBtn2, #threeBtn3");
var ques4Answer = document.getElementById("fourBtn3Correct");
var incorrectFour = document.querySelectorAll("#fourBtn1, #fourBtn2, #fourBtn4");
var ques5Answer = document.getElementById("fiveBtn4Correct");
var incorrectFive = document.querySelectorAll("#fiveBtn1, #fiveBtn2, #fiveBtn3");

var firstPage = document.getElementById("first-page");
var secondPage = document.getElementById("second-page");
var thirdPage = document.getElementById("third-page");
var fourthPage = document.getElementById("fourth-page");
var fifthPage = document.getElementById("fifth-page");
var sixthPage = document.getElementById("sixth-page");
var seventhPage = document.getElementById("seventh-page");

var secondsLeft = 0;
var timeToStop = false;
var score = 0;



timeEl.textContent = "Time: " + secondsLeft;

secondPage.style.display = "none";
thirdPage.style.display = "none";
fourthPage.style.display = "none";
fifthPage.style.display = "none";
sixthPage.style.display = "none";
seventhPage.style.display = "none";

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

    if(timeToStop) {
      score = secondsLeft;
      console.log(timerInterval);
      document.getElementById("highscore").innerHTML =  score;
      clearInterval(timerInterval);
    }

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

//User clicks on correct answer for question 1
ques1Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPage, 2000);
});

for (var i=0; i<incorrectOne.length; i++){
  incorrectOne[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    secondsLeft-=15;
    setTimeout(goToNextPage, 2000);
  });
};

function goToNextPage() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  secondPage.style.display = "none";
  thirdPage.style.display = "block";
}

ques2Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPageTwo, 2000);
});

for (var i=0; i<incorrectTwo.length; i++){
  incorrectTwo[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    secondsLeft-=15;
    setTimeout(goToNextPageTwo, 2000);
  });
};

function goToNextPageTwo() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  thirdPage.style.display = "none";
  fourthPage.style.display = "block";
}

ques3Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPageThree, 2000);
});

for (var i=0; i<incorrectThree.length; i++){
  incorrectThree[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    secondsLeft-=15;
    setTimeout(goToNextPageThree, 2000);
  });
};

function goToNextPageThree() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  fourthPage.style.display = "none";
  fifthPage.style.display = "block";
}

ques4Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPageFour, 2000);
});

for (var i=0; i<incorrectFour.length; i++){
  incorrectFour[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    secondsLeft-=15;
    setTimeout(goToNextPageFour, 2000);
  });
};

function goToNextPageFour() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  fifthPage.style.display = "none";
  sixthPage.style.display = "block";
}

ques5Answer.addEventListener("click", function () {
  document.getElementById("correct-answer").style.display = "block";
  setTimeout(goToNextPageFive, 2000);
});

for (var i=0; i<incorrectFive.length; i++){
  incorrectFive[i].addEventListener("click", function(){
    document.getElementById("incorrect-answer").style.display = "block";
    secondsLeft-=15;
    setTimeout(goToNextPageFive, 2000);
  });
};

function goToNextPageFive() {
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("incorrect-answer").style.display = "none";

  sixthPage.style.display = "none";
  seventhPage.style.display = "block";
  timeToStop=true;
}




// var initials = document.getElementById("initials");
// initials = JSON.parse(localStorage.getItem("initials"));

function saveInitialsAndScore() {
  var initials = document.getElementById("initials").value;
  // Stringify and set "todos" key in localStorage to todos array
  console.log("save initials");
  console.log(initials);
  console.log(score);
  localStorage.setItem("initials", JSON.stringify(initials));
  localStorage.setItem("score", JSON.stringify(score));
}

var initialsForm = document.getElementById("save");
console.log(initialsForm);

// When form is submitted...
initialsForm.addEventListener("click", function() {
  console.log("SUBMITTED");
  // Store updated todos in localStorage, re-render the list
  saveInitialsAndScore();
  
});


      
