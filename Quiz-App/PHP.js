const questions = [
  {
    question: " What is PHP?",
    answers: [
      { text: "PHP is an open-source programming language", correct: false },
      { text: "PHP is used to develop dynamic and interactive websites", correct: false },
      { text: "PHP is a server-side scripting language", correct: false },
      { text: " All of the mentioned", correct: true },
    ],
  },
  {
    question: "Who is the father of PHP?",
    answers: [
      { text: "Rasmus Lerdorf", correct: true },
      { text: "Drek Kolkevi", correct: false },
      { text: "Willam Makepiece", correct: false },
      { text: "List Barely", correct: false },
    ],
  },
  {
    question: "What does PHP stand for?",
    answers: [
      { text: "PHP stands for Preprocessor Home Page", correct: false },
      { text: "PHP stands for Pretext Hypertext Processor", correct: false },
      { text: "PHP stands for Personal Hyper Processor", correct: false },
      { text: "PHP stands for Hypertext Preprocessor", correct: true },
    ],
  },
  {
    question: "Which of the following is the correct syntax to write a PHP code?",
    answers: [
      { text: "<?php ?>", correct: false },
      { text: "<? ?>", correct: true },
      { text: "< php >", correct: false },
      { text: "< ? php ?>", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct way to add a comment in PHP code? ",
    answers: [
      { text: "All of the mentioned", correct: true },
      { text: "/* */", correct: false },
      { text: " //", correct: false },
      { text: " # ", correct: false },
    ],
  },
  {
    question: "Which of the following is the default file extension of PHP files?",
    answers: [
      { text: ".ph ", correct: false },
      { text: ".php", correct: true},
      { text: ".xml", correct: false },
      { text: ".html ", correct: false},
    ],
  },
  {
    question: "How to define a function in PHP?",
    answers: [
      { text: "function functionName(parameters) {function body}", correct: true },
      { text: "functionName(parameters) {function body}", correct: false },
      { text: "function {function body} ", correct: false },
      { text: "data type functionName(parameters) {function body}", correct: false },
    ],
  },
  {
    question: " Which is the right way of declaring a variable in PHP?",
    answers: [
      { text: "$3hello", correct: false },
      { text: " $this", correct: false },
      { text: "$5_Hello", correct: false },
      { text: " $_hello", correct: true },
    ],
  },
  {
    question: "Which of the following PHP functions can be used for generating unique ids?",
    answers: [
      { text: "uniqueid()", correct: true },
      { text: "md5()", correct: false },
      { text: "mdid()", correct: false },
      { text: "id()", correct: false },
    ],
  },
  {
    question: "How many functions does PHP offer for searching and modifying strings using Perl-compatible regular expressions.",
    answers: [
      { text: "10", correct: false },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "8", correct: true },
    ],
  },
  {
    question: " A function in PHP which starts with __ (double underscore) is known as __________",
    answers: [
      { text: " Default Functio", correct: false },
      { text: "Magic Function", correct: true },
      { text: "User Defined Function", correct: false },
      { text: "Inbuilt Function", correct: false },
    ],
  },
  {
    question: "Which of the following web servers are required to run the PHP script?",
    answers: [
      { text: "Apache and PHP", correct: false },
      { text: "XAMPP", correct: false },
      { text: "Any of the mentioned", correct: false },
      { text: "IIS", correct: true },
    ],
  },
  {
    question: " Which of the following PHP functions can be used to get the current memory usage?",
    answers: [
      { text: "memory_get_usage() ", correct: true },
      { text: "memory_get_peak_usage()", correct: false },
      { text: "get_peak_usage()", correct: false },
      { text: "get_usage()", correct: false },
    ],
  },
  {
    question: " Which one of the following PHP function is used to determine a file’s last access time?",
    answers: [
      { text: " filetime()", correct: false },
      { text: " fileltime()", correct: false },
      { text: " filectime()", correct: false },
      { text: "fileatime()", correct: true },
    ],
  },
  {
    question: " PHP recognizes constructors by the name _________",
    answers: [
      { text: "function __construct()", correct: true },
      { text: " function _construct()", correct: false },
      { text: "classname()", correct: false },
      { text: " _construct()", correct: false },
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
  