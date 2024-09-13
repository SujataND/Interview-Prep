const questions = [
  {
    question: "What is the full form ASP?",
    answers: [
      { text: "Access Server Pages", correct: false },
      { text: "Active Service Pages", correct: false },
      { text: "Access Service Pages", correct: false },
      { text: "Active Server Pages ", correct: true },
    ],
  },
  {
    question: "ASP.NET is a ____.",
    answers: [
      { text: "Server-side technology", correct: true },
      { text: "Client-Side technology", correct: false },
      { text: "Both", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "Which of the following programming language can be used with ASP.NET?",
    answers: [
      { text: "C#.NET", correct: false },
      { text: "VB.NET", correct: false },
      { text: "None", correct: false },
      { text: "Both", correct: true },
    ],
  },
  {
    question: "What is the extension of the ASP.NET page?",
    answers: [
      { text: ".asp", correct: false },
      { text: ".aspx", correct: true },
      { text: ".asx", correct: false },
      { text: ".apx", correct: false },
    ],
  },
  {
    question: " Is ASP.NET Web form part of ASP.NET core?",
    answers: [
      { text: "No", correct: true },
      { text: "Yes", correct: false },
    ],
  },
  {
    question: "Which of the following technologies are also used with ASP.NET?",
    answers: [
      { text: "CSS ", correct: false },
      { text: "All", correct: true},
      { text: "JavaScript", correct: false },
      { text: " AJAX", correct: false},
    ],
  },
  {
    question: "In which form does Postback occur?",
    answers: [
      { text: "Web Forms", correct: true },
      { text: "Win Forms", correct: false },
      { text: "HTML Forms ", correct: false },
      { text: "All", correct: false },
    ],
  },
  {
    question: " What is the correct use of the web.config file?",
    answers: [
      { text: "To store global information and variable definitions", correct: false },
      { text: "To configure the domain serve", correct: false },
      { text: "To configure to domain client", correct: false },
      { text: "Store information about web browser", correct: true },
    ],
  },
  {
    question: "Is ASP.NET web form supports an event-driven application model?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "MVC stands for ____.",
    answers: [
      { text: "Model Vocal Controller", correct: false },
      { text: "Model View Count", correct: false },
      { text: "Mode View Controller", correct: false },
      { text: "Model View Controller", correct: true },
    ],
  },
  {
    question: "What namespace is used for ASP.NET Web Form by default?",
    answers: [
      { text: "System.Web.Form", correct: false },
      { text: "System.Web.UI.Form", correct: true },
      { text: "System.Web.Form", correct: false },
      { text: "System.Web.GUI.Page", correct: false },
    ],
  },
  {
    question: "Which of the following attribute must be set on a validator control for the validation?",
    answers: [
      { text: "ValidateControl", correct: false },
      { text: "ValidateToBind", correct: false },
      { text: "ValidateControl", correct: false },
      { text: "ControlToValidate", correct: true },
    ],
  },
  {
    question: " Can we style tree view, and menus with CSS?",
    answers: [
      { text: " True", correct: true },
      { text: "False", correct: false },
          ],
  },
  {
    question: " Every Server control of ASP.NET must have an id?",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },
  {
    question: "Which of the following is not an ASP.NET event?",
    answers: [
      { text: "Import", correct: true },
      { text: "Init", correct: false },
      { text: "Load", correct: false },
      { text: "All", correct: false },
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
  