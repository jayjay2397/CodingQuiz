//Quiz questions

var questions = [{
    title: "1. What is the HTML tag under which one can write the JavaScript code?",
    choices: ["javascript", "scripted", "script", "js"],
    answer: "script"
},
{
    title: "2. Which of the following is the correct syntax to display 'Jose is Awesome' in an alert box using JavaScript?",
    choices: ["alertbox('Jose is awesome)", "msg('Jose is awesome')", "msgbox('Jose is awesome')", "alert('Jose is awesome')"],
    answer: "alert('Jose is awesome')"
},
{
    title: " 3. What is the correct syntax for referring to an external script called “script.js”?",
    choices: ["script src='script.js'", "script href='script.js'", "script ref='script.js", "None of the above."],
    answer: "script src='script.js'"
},
{
    title: "4. What is the syntax for creating a function in JavaScript named as Geekfunc? ",
    choices: ["function = Geekfunc() ", "function Geekfunc()", "function:= Geekfunc() ", "function : Geekfunc()"],
    answer: "function Geekfunc()"
},
{
    title: "How is the function called in JavaScript?",
    choices: ["call Geekfunc(); ", "call function GeekFunc(); ", "Geekfunc();", "function Geekfunc();"],
    answer: "Geekfunc();"
}]

// function variables 

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// Timer starts when user clicks start 
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").textContent = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").textContent = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz(); 
        }
    }, 1000);

    next();
}

// Question loop
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endQuiz();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}


// Timer that takes off time for wrong answer and ends the game
function incorrect() {
    timeLeft -= 15; 
    next();
}

function endQuiz() {
    clearInterval(timer);

    var quizContent = `
    <h2>Quiz over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}


// Scores that are calculated , saved to local storage , and Scores cleared 

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}


function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Retake Quiz!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");

    resetGame();
}

function correct() {
    score += 20;
    next();
}

// Restart Quiz

function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to Retake!   
    </h3>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}