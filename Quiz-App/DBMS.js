const questions = [
  {
    question: "What is the full form of DBMS?",
    answers: [
      { text: " Data of Binary Management System", correct: false },
      { text: "Database Management Service", correct: false },
      { text: "Database Management System", correct: true },
      { text: "Rasmus Lerdorf", correct: false },
    ],
  },
  {
    question: "What is a database?",
    answers: [
      { text: "Organized collection of data or information that can be accessed, updated, and managed", correct: true },
      { text: "Organized collection of information that cannot be accessed, updated, and managed", correct: false },
      { text: "Collection of data or information without organizing", correct: false },
      { text: "Organized collection of data that cannot be updated", correct: false },
    ],
  },
  {
    question: "What is DBMS?",
    answers: [
      { text: " DBMS is a collection of queries", correct: false },
      { text: "DBMS is a high-level language", correct: false },
      { text: "DBMS stores, modifies and retrieves data", correct: true },
      { text: "DBMS is a programming language", correct: false },
    ],
  },
  {
    question: "Who created the first DBMS?",
    answers: [
      { text: "Edgar Frank Codd", correct: false },
      { text: "Charles Bachman", correct: true },
      { text: "Charles Babbage", correct: false },
      { text: "Sharon B. Codd", correct: false },
    ],
  },
  {
    question: " Which type of data can be stored in the database?",
    answers: [
      { text: " Image oriented data", correct: false },
      { text: " Text, files containing data", correct: false },
      { text: "Data in the form of audio or video", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "In which of the following formats data is stored in the database management system?",
    answers: [
      { text: "Image", correct: false },
      { text: "Table", correct: true},
      { text: "Text", correct: false },
      { text: "Graph", correct: false},
    ],
  },
  {
    question: "Which of the following is not a type of database?",
    answers: [
      { text: "Decentralized", correct: true },
      { text: "Hierarchical", correct: false },
      { text: " Network", correct: false },
      { text: "Distributed", correct: false },
    ],
  },
  {
    question: "Which of the following is not an example of DBMS?",
    answers: [
      { text: "Microsoft Acess", correct: false },
      { text: "Google", correct: true },
      { text: " IBM DB2", correct: false },
      { text: "MySQL", correct: false },
    ],
  },
  {
    question: "Which of the following is not a feature of DBMS?",
    answers: [
      { text: "Single-user Access only", correct: true },
      { text: " Minimum Duplication and Redundancy of Data", correct: false },
      { text: "Support ACID Property", correct: false },
      { text: "High Level of Security", correct: false },
    ],
  },
  {
    question: "Which of the following is a feature of the database?",
    answers: [
      { text: " No-backup for the data stored", correct: false },
      { text: "Store data in multiple locations", correct: false },
      { text: "User interface provided", correct: true },
      { text: " Lack of Authentication", correct: false },
    ],
  },
  {
    question: "Which of the following is not a function of the database?",
    answers: [
      { text: "Managing stored data", correct: false },
      { text: "Manipulating data", correct: false },
      { text: "Security for stored data", correct: false },
      { text: "Analysing code", correct: true },
    ],
  },
  {
    question: "Which of the following is a function of the DBMS?",
    answers: [
      { text: "Storing data", correct: false },
      { text: "Providing multi-users access control", correct: false },
      { text: " Data Integrity", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following is a component of the DBMS?",
    answers: [
      { text: "Data", correct: false },
      { text: "Data Languages", correct: false },
      { text: "Data Manager", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: " Which of the following is known as a set of entities of the same type that share same properties, or attributes?",
    answers: [
      { text: "Relation set", correct: false },
      { text: "Tuples", correct: false },
      { text: "Entity Relation model", correct: false },
      { text: "Entity set", correct: true },
    ],
  },
  {
    question:"What is information about data called? ",
    answers: [
      { text: "Meta data", correct: true },
      { text: "Hyper data", correct: false },
      { text: "Tera data", correct: false },
      { text: "Relations", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Score ${score} Out Of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
