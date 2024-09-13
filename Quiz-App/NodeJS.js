const questions = [
  {
    question: "Which of the following statement is correct?",
    answers: [
      { text: "js is the Client Side Language.", correct: false },
      { text: "js is both Server Side and Client Side Language.", correct: false },
      { text: "None of the above.", correct: false },
      { text: " js is Server Side Language.", correct: true },
    ],
  },
  {
    question: "What does the REPL stand for?",
    answers: [
      { text: "REPL stands for Read Eval Print Loop", correct: true },
      { text: "REPL stands for Research Eval Program Learn.", correct: false },
      { text: "REPL stands for Read Earn Point Learn.", correct: false },
      { text: "REPL stands for Read Eval Point Loop.", correct: false },
    ],
  },
  {
    question: "Which of the following command is used to start a REPL session?",
    answers: [
      { text: "$ node start", correct: false },
      { text: "$ node repl", correct: false },
      { text: "$ node console", correct: false },
      { text: "$ node", correct: true },
    ],
  },
  {
    question: "In which language is Node.js written?",
    answers: [
      { text: "C", correct: false },
      { text: "C++", correct: true },
      { text: "Javascript", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which of the following command is used to install the Node.js express module? ",
    answers: [
      { text: "$ npm install express", correct: true },
      { text: "$ node install express", correct: false },
      { text: "$ install express", correct: false },
      { text: "None of the above ", correct: false },
    ],
  },
  {
    question: "What is Callback?",
    answers: [
      { text: " The callback is a technique in which a method calls back the caller method.", correct: false },
      { text: "The callback is an asynchronous equivalent for a function.", correct: true},
      { text: "Both of the above.", correct: false },
      { text: " None of the above.", correct: false},
    ],
  },
  {
    question: "Which of the following extension is used to save the Node.js files?",
    answers: [
      { text: ".js", correct: true },
      { text: ".node", correct: false },
      { text: ".java ", correct: false },
      { text: ".txt", correct: false },
    ],
  },
  {
    question: "The Node.js modules can be exposed using: ",
    answers: [
      { text: "expose", correct: false },
      { text: "module", correct: false },
      { text: "All of the above", correct: false },
      { text: "exports", correct: true },
    ],
  },
  {
    question: "Which of the following module is not a built-in node module?",
    answers: [
      { text: "fsread", correct: true },
      { text: "zlib", correct: false },
      { text: "https", correct: false },
      { text: "dgram", correct: false },
    ],
  },
  {
    question: "Which of the following method of fs module is used to get file information?",
    answers: [
      { text: "fs.open(path, flags[, mode], callback)", correct: false },
      { text: "fs.readFile(path, flags[, mode], callback)", correct: false },
      { text: "None of the above.", correct: false },
      { text: "fs.stat(path, callback)", correct: true },
    ],
  },
  {
    question: "What does the fs module stand for?",
    answers: [
      { text: "File Service", correct: false },
      { text: "File System", correct: true },
      { text: "File Store", correct: false },
      { text: "File Sharing", correct: false },
    ],
  },
  {
    question: "Which of the following method of fs module is used to truncate a file?",
    answers: [
      { text: "fs.delete(fd, len, callback)", correct: false },
      { text: "fs.remove(fd, len, callback)", correct: false },
      { text: "None of the above.", correct: false },
      { text: "fs.ftruncate(fd, len, callback)", correct: true },
    ],
  },
  {
    question: "Which of the following template engines can be used with Node.js? ",
    answers: [
      { text: "Handlebars ", correct: true },
      { text: "Jade", correct: false },
      { text: "Vash", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which of the following code print the platform of operating system?    ",
    answers: [
      { text: "console.log('platform : ' + os.platform);", correct: false },
      { text: " console.log('platform : ' + os.getPlatform());", correct: false },
      { text: "None of the above.      ", correct: false },
      { text: "console.log('platform : ' + os.platform());", correct: true },
    ],
  },
  {
    question: "Which of the following method is used to return the current working directory of the process?",
    answers: [
      { text: "cwd();", correct: true },
      { text: "pwd();", correct: false },
      { text: "cwd();", correct: false },
      { text: "None of the above.", correct: false },
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
  