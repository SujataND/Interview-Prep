const questions = [
  {
    question: "Which of the following statement is correct for AngularJS?",
    answers: [
      { text: "AngularJS is an HTML framework", correct: false },
      { text: "AngularJS is a Java framework", correct: false },
      { text: "AngularJS is a SQL framework", correct: false },
      { text: "AngularJS is a JavaScript framework ", correct: true },
    ],
  },
  {
    question: "On which of the Architectural pattern AngularJS is based?",
    answers: [
      { text: "MVVM Architectural pattern", correct: true },
      { text: "MVC Architecture pattern", correct: false },
      { text: "Decorator pattern", correct: false },
      { text: "Observer Pattern", correct: false },
    ],
  },
  {
    question: "AngularJS is perfect for?",
    answers: [
      { text: "MPAs", correct: false },
      { text: "DPAs", correct: false },
      { text: "CPAs", correct: false },
      { text: "SPAs", correct: true },
    ],
  },
  {
    question: "Which of the following is the correct syntax for writing AngularJS expressions?",
    answers: [
      { text: "(expression)", correct: false },
      { text: "{{expression}}", correct: true },
      { text: "{{{expression}}}", correct: false },
      { text: "[expression]", correct: false },
    ],
  },
  {
    question: " Do AngularJS provide reusable components?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
    ],
  },
  {
    question: "Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
    answers: [
      { text: "ng-app directive ", correct: false },
      { text: "ng-bind directive", correct: true},
      { text: "ng-model directive", correct: false },
      { text: " ng-init directive", correct: false},
    ],
  },
  {
    question: "Which of the following syntax is correct for applying multiple filters in AngularJS?",
    answers: [
      { text: "{{ expression | filter1 | filter2 | ... }}", correct: true },
      { text: "{{ expression | {filter1} | {filter2} | ... }}", correct: false },
      { text: "{{ expression - {filter1} - {filter2} - ... }} ", correct: false },
      { text: "{{ {filter1} | {filter2} | ...-expression}}", correct: false },
    ],
  },
  {
    question: "Which of the following statement is true about the lowercase filter? ",
    answers: [
      { text: "The lowercase filter is a function that takes text as input.", correct: false },
      { text: "Both of the above.", correct: false },
      { text: "None of the above.", correct: false },
      { text: "The lowercase filter converts a text to lower case text.", correct: true },
    ],
  },
  {
    question: "Which of the following is an advantage of AngularJS?",
    answers: [
      { text: "All of the above.", correct: true },
      { text: "AngularJS code is unit testable.", correct: false },
      { text: "AngularJS uses dependency injection and makes use of separation of concerns.", correct: false },
      { text: "AngularJS provides reusable components.", correct: false },
    ],
  },
  {
    question: "Which of the following statement is true about $dirty flag?",
    answers: [
      { text: "None of the above..", correct: false },
      { text: "$dirty flag is used to state that the form has invalid data.", correct: false },
      { text: "Both of the above.", correct: false },
      { text: "$dirty flag is used to state that value has been changed.", correct: true },
    ],
  },
  {
    question: "What is the use of Angular Controllers in the application?",
    answers: [
      { text: "Angular controllers are used for displaying the data.", correct: false },
      { text: "Angular controllers are used for controlling the data.", correct: true },
      { text: "Both of the above are correct.", correct: false },
      { text: "None of the above is correct.", correct: false },
    ],
  },
  {
    question: "Which of the following syntax is used to create a module in AngularJS?",
    answers: [
      { text: "var myModule= angular.module();", correct: false },
      { text: "var myModule= new Module();", correct: false },
      { text: "None of the above", correct: false },
      { text: "module(app, []);", correct: true },
    ],
  },
  {
    question: " Which of the following is used to share data between controller and view in AngularJS?",
    answers: [
      { text: "using services ", correct: true },
      { text: "using Model", correct: false },
      { text: "using factory", correct: false },
      { text: "using $scope", correct: false },
    ],
  },
  {
    question: "Which of the following statement specifies the data-binding in AngularJS? ",
    answers: [
      { text: "Synchronization of data between the model and controller components.", correct: false },
      { text: "Synchronization of data between the controller and view components. ", correct: false },
      { text: "None of the above", correct: false },
      { text: "Synchronization of data between the model and view components.", correct: true },
    ],
  },
  {
    question: "Which of the following is not a valid AngularJS filter?",
    answers: [
      { text: "email", correct: true },
      { text: "lowercase", correct: false },
      { text: "orderby", correct: false },
      { text: "currency", correct: false },
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
  