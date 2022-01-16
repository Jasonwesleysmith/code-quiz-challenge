const quizQuestions = [
    {
        question: "I am a question?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am question 2",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 3?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 4?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 5?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 6?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 7?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 8?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 9?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
    },
    {
        question: "I am a question 10?",
        answers: ["option1", "option2", "option3", "option4"],
        correctAnswer: 0 //index of answers array
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
    //do shit here
}

// ✅ WHEN I click the start button
// ✅ THEN a timer starts and I am presented with a question
// ✅ WHEN I answer a question
// ✅ THEN I am presented with another question
// ✅ THEN I am presented with another question
// ✅WHEN I answer a question incorrectly
// ✅THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score