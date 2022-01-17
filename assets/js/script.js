const quizQuestions = [
    {
        question: "Which is not a Javascript data type?",
        answers: ["string", "object", "class", "undefined"],
        correctAnswer: 2 //index of answers array
    },
    {
        question: "What is a Nan value?",
        answers: ["a type of bread", "term for zero", "not a number", "null"],
        correctAnswer: 2 //index of answers array
    },
    {
        question: "What company developed JavaScript?",
        answers: ["Apple", "Netscape", "Dell", "CBS"],
        correctAnswer: 1 //index of answers array
    },
    {
        question: "What is the symbol for commenting in Javascript",
        answers: ["//", "&&", "#", "!"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "Which one is a strict quality operator?",
        answers: ["[]", "{}", "<=", "==="],
        correctAnswer: 3 //index of answers array
    },
    {
        question: "Which one is not a type of pop up box in Javascript?",
        answers: ["Alert", "Confirm", "Prompt", "Window"],
        correctAnswer: 3 //index of answers array
    },
    {
        question: "What is Var short for ",
        answers: ["Varnish", "Variable", "Victory and revenge", "VAR"],
        correctAnswer: 1 //index of answers array
    },
    {
        question: "In Javascript, what symbols would be used to denote an array?",
        answers: ["[]", "{}", "<><>", "++"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "What does a for loop run through?",
        answers: ["methods", "variables", " all properties of an object", "points"],
        correctAnswer: 2 //index of answers array
    },
    {
        question: "what does event bubbling refer to?",
        answers: ["typing", "click", "numbers", "methods"],
        correctAnswer: 1 //index of answers array
    },
]

let count = 60;
let interval = setInterval(function(){
  document.getElementById('countdown-timer').innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    endGame();
  }
}, 1000);


document.querySelector("#start").addEventListener("click", startGame);

//add event listener to all answer buttons
const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", checkAnswer);
}

function startGame() {
    document.querySelector(".welcome").style.display = "none";
    document.querySelector("#quizBox").style.display = "block";
    displayQuestion();
}

let currentQuestion = 0;

function displayQuestion() {
    document.querySelector("#question").innerHTML = quizQuestions[currentQuestion].question;
    document.querySelector("#option0").innerHTML = quizQuestions[currentQuestion].answers[0];
    document.querySelector("#option1").innerHTML = quizQuestions[currentQuestion].answers[1];
    document.querySelector("#option2").innerHTML = quizQuestions[currentQuestion].answers[2];
    document.querySelector("#option3").innerHTML = quizQuestions[currentQuestion].answers[3];
}


function checkAnswer(e) {
    const index = e.target.dataset.index;
    const result = document.querySelector("#result");
    
    if (index == quizQuestions[currentQuestion].correctAnswer) {
        result.innerHTML = "ALL RIGHTTTTT!!!";
    } else {
        count = count - 10;
        result.innerHTML = "WRONG!";
    }

    currentQuestion++;
    displayQuestion()
}

function endGame() {

}

