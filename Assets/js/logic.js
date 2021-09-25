var time = question.length * 15;
var timerId;
var currentQuestionIndex = 0;

//DOM elements
var startButton = document.querySelector('#start');
var questionElement = document.querySelector('#question');
var timerElement = document.querySelector('#timer');
var questionChoices = document.querySelector('#choice');
var startScreen = document.querySelector("#startScreen");
var currentQuestion = question[currentQuestionIndex];
var titleElement = document.querySelector("#questionTitle");

//Start Quiz
function startQuiz() {
    //Hide Start Screen
    
    startScreen.style.display = "none";
    showQuestions ();

    //Show questions
    questionElement.removeAttribute("class");
    showQuestions();



function showQuestions() {
    
    console.log(currentQuestion);
    
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

}























startButton.addEventListener("click", startQuiz);