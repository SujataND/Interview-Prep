const questions = [
  {
    question: "What is the full form of SQL?",
    answers: [
      { text: "Structured Query List", correct: false },
      { text: "sample Query Language", correct: false },
      { text: "None of these.", correct: false },
      { text: "Structure Query Language ", correct: true },
    ],
  },
  {
    question: "Which of the following is not a valid SQL type?",
    answers: [
      { text: "DECIMAL", correct: true },
      { text: "FLOAT", correct: false },
      { text: "NUMERIC", correct: false },
      { text: "CHARACTER", correct: false },
    ],
  },
  {
    question: "Which of the following is not a DDL command?",
    answers: [
      { text: "TRUNCATE", correct: false },
      { text: "ALTER", correct: false },
      { text: "CREATE", correct: false },
      { text: "UPDATE", correct: true },
    ],
  },
  {
    question: "Which of the following are TCL commands?",
    answers: [
      { text: "UPDATE and TRUNCATE", correct: false },
      { text: "COMMIT and ROLLBACK", correct: true },
      { text: "SELECT and INSERT", correct: false },
      { text: "GRANT and REVOKE", correct: false },
    ],
  },
  {
    question: " Which statement is used to delete all rows in a table without having the action logged?",
    answers: [
      { text: "TRUNCATE", correct: true },
      { text: "DELETE", correct: false },
      { text: "REMOVE", correct: false },
      { text: " DROP", correct: false },
    ],
  },
  {
    question: "SQL Views are also known as",
    answers: [
      { text: " Simple tables", correct: false },
      { text: "Virtual tables", correct: true},
      { text: "Complex tables", correct: false },
      { text: "Actual Tables ", correct: false},
    ],
  },
  {
    question: "How many Primary keys can have in a table?",
    answers: [
      { text: "Only 1", correct: true },
      { text: "Only 2", correct: false },
      { text: " Depends on no of Columns", correct: false },
      { text: "Depends on DBA", correct: false },
    ],
  },
  {
    question: " Which datatype can store unstructured data in a column?",
    answers: [
      { text: "CHAR", correct: false },
      { text: "NUMERIC", correct: false },
      { text: "VARCHAR", correct: false },
      { text: "RAW", correct: true },
    ],
  },
  {
    question: "Which of the following is not Constraint in SQL?",
    answers: [
      { text: "Union", correct: true },
      { text: "Primary Key", correct: false },
      { text: "Not Null", correct: false },
      { text: "Check", correct: false },
    ],
  },
  {
    question: "Which of the following is not a valid aggregate function?",
    answers: [
      { text: "COUNT", correct: false },
      { text: "SUM", correct: false },
      { text: "MAX", correct: false },
      { text: "COMPUTE", correct: true },
    ],
  },
  {
    question: "Which data manipulation command is used to combines the records from one or more tables?",
    answers: [
      { text: "SELECT", correct: false },
      { text: "JOIN", correct: true },
      { text: "PROJECT", correct: false },
      { text: "PRODUCT", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare a value to a specified list of values?",
    answers: [
      { text: "ANY", correct: false },
      { text: "BETWEEN", correct: false },
      { text: "ALL", correct: false },
      { text: "IN", correct: true },
    ],
  },
  {
    question: " What operator tests column for absence of data",
    answers: [
      { text: " IS NULL Operator", correct: true },
      { text: "NOT Operator", correct: false },
      { text: "Exists Operator", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " In which of the following cases a DML statement is not executed?",
    answers: [
      { text: "When existing rows are modified. ", correct: false },
      { text: " When some rows are deleted.", correct: false },
      { text: "All of the above", correct: false },
      { text: "When a table is deleted.", correct: true },
    ],
  },
  {
    question: "If we have not specified ASC or DESC after a SQL ORDER BY clause, the following is used by default",
    answers: [
      { text: "ASC", correct: true },
      { text: "DESC", correct: false },
      { text: "There is no default value", correct: false },
      { text: "None of the mentioned", correct: false },
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
  