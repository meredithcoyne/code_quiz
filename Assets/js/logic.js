// Var with array and object for questions 
var question = [
    {
        title: "The hashtag symbol is technically called an ________.",
        choices: ["Pound Sign", "Octofield", "Octothorpe", "Number Sign"],
        answer: "Octothorpe"
    },
    {
        title: "The unicorn is the national animal of ____.",
        choices: ["Moracco", "Turkey", "Scotland", "Norway"],
        answer: "Scotland"
    },
    {
        title: "The largest known living organism is an _______ grove.",
        choices: ["yellow", "pine", "wooded", "aspen"],
        answer: "aspen"
    },
    {
        title: "M&M stands for _____ & ______.",
        choices: ["Mars & Maple", "Marty & Murrie", "Mars & Murrie", "Musketeer & Murrie"],
        answer: "Mars & Murrie"
    },
    {
        title: "The odds of getting a royal flush are exactly 1 in ________.",
        choices: ["546,639", "1,586,954", "43,872", "649,740"],
        answer: "649,740"
    },
    {
        title: "You can major in ________ at Cornell University.",
        choices: ["Wine", "Under Water Basket Weaving ", "Mind Reading", "Home Decor"],
        answer: "Wine"
    },
    {
        title: "About _____ grapes go into one bottle of wine.",
        choices: ["100", "700", "500", "1000"],
        answer: "700"
    },
    {
        title: "Fear of the number 13 is called _____________.",
        choices: ["Threedaphobia", "Triskaidekaphobia", "Thirtaidephobia", "Thirteenidephobia"],
        answer: "Triskaidekaphobia"
    },
    {
        title: "The largest sand castle in the world measured ___ feet high.",
        choices: ["54", "23", "76", "42"],
        answer: "54"
    },
    {
        title: "A group of bunnies is called a '_________'",
        choices: ["buns", "fluffie", "fluffs", "bouncies"],
        answer: "fluffie"
    },

];




// Declared variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionDiv = document.querySelector("#questionDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

var userQuestion = question[questionIndex].title;
var userChoices = question[questionIndex].choices;
var listItem = document.createElement("li");

// shows user time on screen when timer button is clicked.
timer.addEventListener("click", function () {
    // Timer starts as zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < question.length; i++) {
        // Appends question title only
        questionDiv.textContent = userQuestion;
    }
    // New for each question choices
    userChoices.forEach(function (newItem) {
        listItem.textContent = newItem;
        questionDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == question[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + question[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answer
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + question[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;
    if (questionIndex >= question.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + question.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}
