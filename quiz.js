const quizData = [
    {
        question: " In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        correct: "b",
    },
    {
        question: "Which of the following is not JavaScript Data Types?",
        a: "Undefined", 
        b: "Number",
        c: "Boolean",
        d: "Float",
        correct: "d",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<head>",
        c: "<meta>",
        d: "<style>",
        correct: "a",
    },
    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        a: "Global variable",
        b: "Local variable",
        c: "Both",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What are the types of Pop up boxes available in JavaScript?",
        a: "Alert",
        b: "Prompt",
        c: "Confirm",
        d: "All of the above",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});