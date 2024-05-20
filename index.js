const questions = [
    {
        question: "Who is making the web standards?",
        answers: [
            { text: "Mozilla", correct: "false" },
            { text: "Microsoft", correct: "false" },
            { text: "The World Wide Web Consortium", correct: "true" }
        ]
    },
    {
        question: "How can you create an e-mail link?",
        answers: [
            { text: "mailto:example@example.com", correct: "true" }, 
            { text: "Csa", correct: "false" },
            { text: "Xxx@yyy", correct: "false" }
        ]
    },
    {
        question: "How can you open a link in a new browser window?",
        answers: [
            { text: "_blank", correct: "true" },
            { text: "Target", correct: "false" },
            { text: "Same", correct: "false" },
            { text: "Open", correct: "false" }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyperlinks and Text Markup Language", correct: "false" },
            { text: "Hyper Text Markup Language", correct: "true" },
            { text: "Home Tool Markup Language", correct: "false" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answer-buttons");
const nextButtonElement = document.getElementById("nextButton");
const questionNumberElement = document.getElementById("questionNumber");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtonElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    questionNumberElement.innerHTML = "Question No : "+questionNumber;
    answersElement.innerHTML = ''; 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("optionBtn");
        button.addEventListener('click', () => selectAnswer(answer.correct)); 
        answersElement.appendChild(button); 
    });
}

function selectAnswer(correct) {
    if (correct === "true") {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionNumberElement.innerHTML = "Total Score";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answersElement.innerHTML = '';
    nextButtonElement.innerHTML = "Restart";
    nextButtonElement.addEventListener('click', startQuiz);
}

startQuiz();
