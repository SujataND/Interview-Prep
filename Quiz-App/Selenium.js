const questions = [
  {
    question: "When was selenium developed?",
    answers: [
      { text: "2005", correct: false },
      { text: "2006", correct: false },
      { text: "2001", correct: false },
      { text: " 2004", correct: true },
    ],
  },
  {
    question: "Who developed selenium?",
    answers: [
      { text: "Jason Huggins", correct: true },
      { text: "Dan Cuellar", correct: false },
      { text: "Rossmanith Gmbh", correct: false },
    ],
  },
  {
    question: "Does selenium support a variety of languages?",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: true },
    ],
  },
  {
    question: "Can we deploy selenium on different platforms other than windows?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
    ],
  },
  {
    question: " Which of the following browsers supports selenium?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Google Chrome", correct: false },
      { text: "Mozilla Firefox", correct: false },
      { text: "Internet Explorer ", correct: false },
    ],
  },
  {
    question: "What is selenium, select the best answer.",
    answers: [
      { text: " Selenium is the open-source test automated tool to test web-based UI which only supports JavaScript’s", correct: false },
      { text: "Selenium is the open-source test automated tool to test web-based UI which supports many different languages like Java, Python, Perl, PHP, Ruby, and C#.", correct: true},
      { text: "Selenium is a behavioral testing tool that supports many different languages like Java, Python, Perl, PHP, Ruby, and C#.", correct: false },
    ],
  },
  {
    question: "What do you mean by open-source software?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Open-source software is software that is easy to use and where the code is stored in a public repository also it comes with a distributed license.", correct: false },
      { text: " Open-source software is software that circulated across the world with its source code which also means it is available for use, and modification", correct: false },
    ],
  },
  {
    question: " Which of the following is not the alternative to selenium?",
    answers: [
      { text: "Cucumber", correct: false },
      { text: "Cypress", correct: false },
      { text: "Puppeteer", correct: false },
      { text: "Mocha", correct: true },
    ],
  },
  {
    question: "Check whether the given statement is true or false?'Selenium web driver does not require server installation, test scripts interact directly with the browser.'",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
    ],
  },
  {
    question: "What is selenium IDE?",
    answers: [
      { text: "Selenium integrated distributed environment", correct: false },
      { text: "Selenium integrated dispense environment", correct: false },
      { text: "Selenium integrated development environment", correct: true },
    ],
  },
  {
    question: "Which selenium component allows to record and playback of the scripts?",
    answers: [
      { text: "Selenium Remote Control", correct: false },
      { text: "Selenium (IDE)", correct: true },
      { text: "WebDriver", correct: false },
      { text: "Selenium Grid.", correct: false },
    ],
  },
  {
    question: "Which selenium component is also known as selenium 1?",
    answers: [
      { text: "Selenium (IDE)", correct: false },
      { text: "WebDriver", correct: false },
      { text: "Selenium Grid.", correct: false },
      { text: "Selenium Remote Control", correct: true },
    ],
  },
  {
    question: "Does selenium RC supports a record or playback feature just like selenium IDE? ",
    answers: [
      { text: "No", correct: true },
      { text: "Yes", correct: false },
    ],
  },
  {
    question: " Selenium RC support which architecture?",
    answers: [
      { text: "Event-driven architecture", correct: false },
      { text: " Master-slave architecture", correct: false },
      { text: "Layered architecture", correct: false },
      { text: "Client-server architecture", correct: true },
    ],
  },
  {
    question: " Selenium RC is based on ____.",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "HTML", correct: false },
      { text: "Python", correct: false },
      { text: "Ruby", correct: false },
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
  