const questions = [
  {
    question: "Which of the following best describes MongoDB?",
    answers: [
      { text: "Relational database", correct: false },
      { text: "Spreadsheet program", correct: false },
      { text: "Graph database", correct: false },
      { text: "Document-based NoSQL database ", correct: true },
    ],
  },
  {
    question: "In MongoDB, a record is equivalent to a:",
    answers: [
      { text: " Document", correct: true },
      { text: "Row", correct: false },
      { text: "Table", correct: false },
      { text: "Database", correct: false },
    ],
  },
  {
    question: "Which of the following is the default port for MongoDB?",
    answers: [
      { text: "8080", correct: false },
      { text: "3306", correct: false },
      { text: " 5432", correct: false },
      { text: "27017", correct: true },
    ],
  },
  {
    question: "Which MongoDB command is used to display the database you are currently using?",
    answers: [
      { text: "show currentDatabase", correct: false },
      { text: "db", correct: true },
      { text: "show db", correct: false },
      { text: "use db", correct: false },
    ],
  },
  {
    question: " To create or switch to a database in MongoDB, which command would you use?",
    answers: [
      { text: "use <database_name>", correct: true },
      { text: "createDatabase(name)", correct: false },
      { text: "switchDatabase(name)", correct: false },
      { text: " db.<database_name>", correct: false },
    ],
  },
  {
    question: "Which of the following commands will show you all the collections in your current database?",
    answers: [
      { text: " list collections", correct: false },
      { text: "show collections", correct: true},
      { text: "display collections", correct: false },
      { text: " db.collections()", correct: false},
    ],
  },
  {
    question: "How do you insert a new document into a collection in MongoDB?",
    answers: [
      { text: "db.<collection_name>.insert()", correct: true },
      { text: "db.<collection_name>.newDocument()", correct: false },
      { text: "db.<collection_name>.add()", correct: false },
      { text: "db.<collection_name>.append()", correct: false },
    ],
  },
  {
    question: "  Which of the following commands deletes a MongoDB database?    ",
    answers: [
      { text: "removeDatabase()", correct: false },
      { text: "deleteDatabase()", correct: false },
      { text: "destroyDatabase()", correct: false },
      { text: "db.dropDatabase()", correct: true },
    ],
  },
  {
    question: "Which MongoDB method can be used to remove one or more documents from a collection?",
    answers: [
      { text: "db.<collection_name>.remove()", correct: true },
      { text: "db.<collection_name>.delete()", correct: false },
      { text: "db.<collection_name>.discard()", correct: false },
      { text: "db.<collection_name>.drop()", correct: false },
    ],
  },
  {
    question: "What is the BSON in MongoDB?",
    answers: [
      { text: "A database engine", correct: false },
      { text: "A query language", correct: false },
      { text: "A backup tool", correct: false },
      { text: "Binary representation of JSON", correct: true },
    ],
  },
  {
    question: " Which MongoDB command returns statistics about the database?",
    answers: [
      { text: "db.info()", correct: false },
      { text: "db.stats()", correct: true },
      { text: "db.data()", correct: false },
      { text: "db.details()", correct: false },
    ],
  },
  {
    question: "What format does MongoDB use for its queries?",
    answers: [
      { text: "SQL", correct: false },
      { text: "XML", correct: false },
      { text: " XQuery", correct: false },
      { text: "BSON", correct: true },
    ],
  },
  {
    question: "To update a document in a collection, which method is appropriate? ",
    answers: [
      { text: "db.<collection_name>.update()", correct: true },
      { text: "db.<collection_name>.revise()", correct: false },
      { text: "db.<collection_name>.edit()", correct: false },
      { text: "db.<collection_name>.modify()", correct: false },
    ],
  },
  {
    question: " Which of the following operations provides a sorted list of the documents in a collection?    ",
    answers: [
      { text: " db.<collection_name>.arrange()", correct: false },
      { text: " db.<collection_name>.listSorted()", correct: false },
      { text: "b.<collection_name>.orderBy()", correct: false },
      { text: "db.<collection_name>.sort()", correct: true },
    ],
  },
  {
    question: "How can you backup your MongoDB database?",
    answers: [
      { text: "mongodump", correct: true },
      { text: "mongobackup", correct: false },
      { text: "mongosave", correct: false },
      { text: "mongoarchive", correct: false },
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
  