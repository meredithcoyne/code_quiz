var time = question.length * 15;
var timerId;
var currentQuestionIndex = 0;

//DOM elements
var startButton = document.querySelector('#start');
var questionElement = document.querySelector('#question');
var timerElement = document.querySelector('#timer');
var questionChoices = document.querySelector('#choice');


//Start Quiz
function startQuiz() {
    //Hide Start Screen
    var startScreen = document.querySelector("#startScreen");
    startScreen.setAttribute("class", "hide")

    //Show questions
    questionElement.removeAttribute("class");
    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = question[currentQuestionIndex];
    console.log(currentQuestion);
    var titleElement = document.querySelector("#questionTitle");
    titleElement.textContent = currentQuestion.title
    questionChoices.textContent = "";

    for(var i = 0; i < currentQuestion.choice.length; i++) {
      let choices = document.createElement("button");
      choices.setAttribute("class", "choice");
      choices.setAttribute("value",  currentQuestion.choice[i]);
    
      choices.textContent = i + 1 + "." + currentQuestion.choice[i];
      questionChoices.appendChild(choices);
    }
}























startButton.addEventListener("click", startQuiz);