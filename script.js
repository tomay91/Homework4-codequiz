//Question Arrays
var questions = [

    {   question: "What does CSS stand for",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Creature Style Sheets", "Clayvoiant Style Sheets"],
        correctAnswer: ["Cascading Sylte Sheets"],
        }
    
    {
        question: "Who killed their husband",
        answer: [ "Joe Exotic",  "Carol Baskin", "No one killed him", "O.J. Simpson"],
        correctAnswer: ["Carol Baskin"],
        },
    
    { 
        question: "Which is NOT a programming language",
        answer: [ "JQuery", "JavaScript",  "HREF",  "Python"],
        correctAnswer: ["HREF"],
        }
    
    {
        question: "Which one of these is a free open source CSS framework site",
        answer: ["BootcampSpot", "GitHub", "GitLab", "Bootstrap"],
        correctAnswer: ["Bootstrap"],
        }
    
    ]

//Variables 
var startBtn = document.getElementById ("Start");
var submitBtn = document.getElementById ("Submit")
var resetBtn = document.getElementById ("Reset")
var questionsEl = getElementById ("questions")
var answers = getElementById ("answers")
var correctAnswer = getElementById ("correct answer")
var intials = getElementById ("Intials")

//Varibales to keep track of quiz state
var currentQuestionIndex - 0;
var time = questions.length = 20
var timerID;

//starting quiz
startBtn.onclick - startQuiz;

submitBtn.onclick - showScore;


function startQuiz() {
    var startScreenEl-document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide")

    questionsEl.removeAttribute("class");

    timerID - setInterval(startTimer, 1000);

    timerEl.textContent - time;

    getQuestion();
}

function startTimer(){
    time--;
    timerEl.textContent - time;

    if (time <-0) {
        endQuiz()
    }
}

funciton endQuiz() {
    clearInterval(timerID);

    var endScreenEl - document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    var finalScoreEl - document.getElementById("final-score");
    finalScoreEl.textContent - time;
    
    questionsEl.setAttribute("class", "hide");

}

function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl - document.getElementById("question-title");
    titleEl.textContent -currentQuestion.title;

    choicesEl.innerHTML - "";
     
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode =document.createElement("button");
        choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", "choice");

        choiceNode.textContent - i + 1 = ", " + choice;

        choicesEl.appendChild(choiceNode);
    }

}

funciton questionClick() {
    if (this.value !--questions[currentQuestionIndex].answer) {
        time -- 20;

    timerEl.textContent = time;

        if (time < 0) {
            time = 0;
        }
        feedbackEl.textContent - "Wrong!"

            else {
                feedbackEl.textContent - "Yes!"
            }
    
    feedbackEl.setAttribute("class", "feedback")
    setTimeout(function() {
        feebackEl.setAttribute("class", "feeback hide");
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    }   else {
        getQuestion();
    }
}


    window.onload=function() {
        var startButton = document.getElementById("startBtn")
        startButton.addEventListener("click", function(){
            setTime();
            setQuestion();
            console.log(event);
        });
    }
    var timeElement = document.querySelector("p");
    var secondsLeft = 120;
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeElement.textContent = secondsLeft
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendTimeMessage();
            }
        }, 1000);
    }
    function sendTimeMessage() {
        timeElement.textContent = " ";
    }
    function setQuestion() {
    }







