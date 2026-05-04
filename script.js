/*Add your JavaScript here*/
var maldivesScore = 0; //Store the maldives score
var romeScore = 0; //Store the rome score

var questionCount = 0; //Store the number of answers clicked on

// // Store HTML elements using the DOM
var result = document.getElementById("result");

var restart = document.getElementById("restart")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// // Listen for click on answer buttons and call functions if clicked
q1a1.addEventListener("click", Maldives);
q1a2.addEventListener("click", Rome);

q2a1.addEventListener("click", Rome);
q2a2.addEventListener("click", Maldives);

q3a1.addEventListener("click", Rome);
q3a2.addEventListener("click", Maldives);

restart.addEventListener("click", restartQuiz);

// // Track maldives score and check if quiz is complete
function Maldives () {
  maldivesScore += 1;
  questionCount += 1;

  console.log ("questionCount = " + questionCount + " maldivesScore = " + maldivesScore)

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
  
}

// // Track rome score and check if quiz is complete
function Rome () {
  romeScore += 1;
  questionCount += 1;

  console.log ("questionCount = " + questionCount + " romeScore = " + romeScore)

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
  
}

// Restart quiz
function restartQuiz() {
  maldivesScore = 0;
  romeScore = 0;
  questionCount = 0;
  result.innerHTML = "Your result is..."
  console.log("Quiz restarted!");
}

// Update quiz result
function updateResult() {
   if (maldivesScore > romeScore) {
     result.innerHTML = "Your result is Maldives!";
     console.log("Your result is Maldives!");
   } else {
     result.innerHTML = "Your result is Rome!";
     console.log("Your result is Rome!");
   }
  
}