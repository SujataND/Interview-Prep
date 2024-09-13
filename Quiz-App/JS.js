const questions = [
  {
    question: "Which type of JavaScript language is ___",
    answers: [
      { text: "High-level", correct: false },
      { text: "Assembly-language", correct: false },
      { text: "Object-Oriented", correct: false },
      { text: "Object-Based ", correct: true },
    ],
  },
  {
    question: "Which one of the following also known as Conditional Expression:",
    answers: [
      { text: "immediate if", correct: true },
      { text: "If-then-else statement", correct: false },
      { text: "Switch statement", correct: false },
      { text: "Alternative to if-else", correct: false },
    ],
  },
  {
    question: "In JavaScript, what is a block of statement?",
    answers: [
      { text: "Conditional block", correct: false },
      { text: "both conditional block and a single statement", correct: false },
      { text: "block that contains a single statement", correct: false },
      { text: "block that combines a number of statements into a single compound statement", correct: true },
    ],
  },
  {
    question: "When interpreter encounters an empty statements, what it will do:",
    answers: [
      { text: "Shows a warning", correct: false },
      { text: "Ignores the statements", correct: true },
      { text: "Prompts to complete the statement", correct: false },
      { text: "Throws an error", correct: false },
    ],
  },
  {
    question: " The function and  var are known as:",
    answers: [
      { text: "Declaration statements", correct: true },
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: " Prototypes", correct: false },
    ],
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "Global variable ", correct: false },
      { text: "The local element", correct: true},
      { text: "The two of the above", correct: false },
      { text: " None of the above", correct: false},
    ],
  },
  {
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answers: [
      { text: "Function/Method", correct: true },
      { text: "Preprocessor", correct: false },
      { text: " Triggering Event", correct: false },
      { text: "RMI", correct: false },
    ],
  },
  {
    question: " Which of the following type of a variable is volatile?",
    answers: [
      { text: "Immutable variable", correct: false },
      { text: "Dynamic variable", correct: false },
      { text: "Volatile variable      ", correct: false },
      { text: "Mutable variable", correct: true },
    ],
  },
  {
    question: "Which of the following option is used as hexadecimal literal beginning?",
    answers: [
      { text: "Both 0x and 0X", correct: true },
      { text: "00", correct: false },
      { text: "0x", correct: false },
      { text: "0Z", correct: false },
    ],
  },
  {
    question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints__.",
    answers: [
      { text: "Prints an exception error", correct: false },
      { text: "Prints an overflow error", correct: false },
      { text: "Prints the value as such", correct: false },
      { text: "Displays Infinity", correct: true },
    ],
  },
  {
    question: " In the JavaScript, which one of the following is not considered as an error:",
    answers: [
      { text: "Syntax error", correct: false },
      { text: "Division by zero", correct: true },
      { text: "Missing of semicolons", correct: false },
      { text: "Missing of Bracket", correct: false },
    ],
  },
  {
    question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    answers: [
      { text: "toLocaleString()", correct: false },
      { text: "toPrecision()", correct: false },
      { text: "toExponential()", correct: false },
      { text: "toFixed()", correct: true },
    ],
  },
  {
    question: " Which of the following number object function returns the value of the number?",
    answers: [
      { text: "valueOf() ", correct: true },
      { text: "toString()", correct: false },
      { text: "toLocaleString()", correct: false },
      { text: "toPrecision()", correct: false },
    ],
  },
  {
    question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters? ",
    answers: [
      { text: "search()", correct: false },
      { text: "slice() ", correct: false },
      { text: "split()", correct: false },
      { text: "substr()", correct: true },
    ],
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    answers: [
      { text: "Both are equal in the value and data type.", correct: true },
      { text: "Both are not same at all.", correct: false },
      { text: "Both are x and y are equal in value only.", correct: false },
      { text: "Both x and y are equal in value, type and reference address as well.", correct: false },
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
  