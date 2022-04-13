const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

var quizIdx = 0;
var score = 0;
var currentAns = "a";
loadQuiz();

function loadQuiz (){
    questionEl.innerText = quizData[quizIdx].question;
    a_text.innerText = quizData[quizIdx].a;
    b_text.innerText = quizData[quizIdx].b;
    c_text.innerText = quizData[quizIdx].c;
    d_text.innerText = quizData[quizIdx].d;

}

function getAnswer() {
    answerEls.forEach(ans => {
        if(ans.checked){
            currentAns = ans.id;
        }
    })
}



submitBtn.addEventListener('click', () => {
    getAnswer();

    if( currentAns == quizData[quizIdx].correct ){
        score++;
    }
    
    quizIdx ++;
    if(quizIdx < quizData.length){
       
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>

        `;
    }


    
})


