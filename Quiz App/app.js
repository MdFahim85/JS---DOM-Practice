// Questions

const questions = [
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Charles Dickens", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "CO2", correct: false },
      { text: "HO", correct: false },
    ],
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: true },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "South Korea", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "100°C", correct: true },
      { text: "0°C", correct: false },
      { text: "212°C", correct: false },
      { text: "50°C", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent Van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What currency is used in Japan?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Euro", correct: false },
    ],
  },
  {
    question: "Which organ pumps blood through the body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Kidney", correct: false },
    ],
  },
];

// Variables

const countDown = document.querySelector(".countDown");
const startBtn = document.querySelector(".startBtn");
const quesBox = document.querySelector(".quesBox");
const quest = quesBox.querySelector(".question");
const ansBox = quesBox.querySelector(".ansBox");
const next = quesBox.querySelector(".nextBtn");
const restart = quesBox.querySelector(".restartBtn");

// Start quiz call

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  quesBox.classList.remove("hidden");
  startQuiz();
});

// Start quiz function

let quesNo = 0;
let score = 0;
let timer;

function startQuiz() {
  clearInterval(timer);
  counter();
  next.classList.add("hidden");
  if (quesNo < questions.length) {
    let ques = questions[quesNo];
    let ansList = ques.answers;
    quest.innerText = `${quesNo + 1}. ${ques.question}`;
    ansList.forEach((ans) => {
      const ansBtn = document.createElement("button");
      ansBtn.classList.add("ansBtn");
      ansBtn.innerText = ans.text;
      ansBtn.dataset.correct = ans.correct;
      ansBox.appendChild(ansBtn);
    });
    quesNo++;
  } else {
    countDown.classList.add("hidden");
    quest.classList.add("align");
    quest.innerText = `Your Score is - ${score} out of ${quesNo}`;
    restart.classList.remove("hidden");
  }
}

// Next function

function nextQuiz() {
  while (ansBox.firstChild) {
    ansBox.firstChild.remove();
  }
  startQuiz();
}

// Answer decider

ansBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("ansBtn")) {
    if (e.target.dataset.correct == "true") {
      e.target.classList.add("true");
      score++;
    } else {
      e.target.classList.add("false");
    }
    const allAnsBtns = document.querySelectorAll(".ansBtn");
    allAnsBtns.forEach((btn) => {
      btn.disabled = true;
    });
    next.classList.remove("hidden");
  }
});

// Next call

next.addEventListener("click", () => {
  nextQuiz();
});

// Restart call

restart.addEventListener("click", () => {
  quesNo = 0;
  score = 0;
  countDown.classList.remove("hidden");
  quest.classList.remove("align");
  restart.classList.add("hidden");
  startQuiz();
});

// Timer

function counter() {
  let time = 60;
  timer = setInterval(() => {
    const minute = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.textContent = `${minute} : ${seconds}`;
    if (time > 0) {
      time--;
    } else {
      nextQuiz();
    }
  }, 1000);
}
