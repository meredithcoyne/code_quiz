var btnel = document.getElementById("start");
console.log(btnel);

btnel.addEventListener("click", startquiz);

function startquiz () {
    var startScreenElement = document.getElementById("startScreen");
    console.log(startScreenElement);
    
    startScreenElement.style.display = "none";
    showQuestions ();
}

function showQuestions () {

    var questionTitle =  document.getElementById("questionTitle");
    questionTitle.innerHTML = question[0].title;

    var choice = document.getElementById("choices");
    
    var btnel = document.createElement("button");
    btnel.innerHTML = question[0].choice[0]
    choice.appendChild(btnel);

    var btnel2 = document.createElement("button");
    btnel2.innerHTML = question[0].choice[1]
    choice.appendChild(btnel2);
}