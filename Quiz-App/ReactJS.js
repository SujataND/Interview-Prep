const questions = [
  {
    question: "What is React.js?",
    answers: [
      { text: "Open-source JavaScript back-end library", correct: false },
      { text: "JavaScript front-end library to create a database", correct: false },
      { text: "None of the mentioned", correct: false },
      { text: " Free and open-source JavaScript front-end library", correct: true },
    ],
  },
  {
    question: "Which of the following acts as the input of a class-based component?",
    answers: [
      { text: "Props", correct: true },
      { text: "Class", correct: false },
      { text: "Factory", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: "React.js is written in which of the following language?",
    answers: [
      { text: "C", correct: false },
      { text: "C++", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },
  {
    question: "How many elements can a valid react component return?",
    answers: [
      { text: "React doesn’t return element", correct: false },
      { text: "1 Element", correct: true },
      { text: "More than 1 element", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: " In which of the following directory React Components are saved?",
    answers: [
      { text: " Inside js/components/", correct: true },
      { text: "Inside components/js/", correct: false },
      { text: "Inside vendor/js/components/", correct: false },
      { text: " Inside vendor/components/", correct: false },
    ],
  },
  {
    question: "Which of the following command is used to Install create-react-app?",
    answers: [
      { text: " npm install create-react-app", correct: false },
      { text: "npm install -g create-react-app", correct: true},
      { text: "npm install -f create-react-app", correct: false },
      { text: "install -g create-react-app ", correct: false},
    ],
  },
  {
    question: "In which condition is the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
    answers: [
      { text: "Both of the mentioned", correct: true },
      { text: "When the state of the component is updated", correct: false },
      { text: "When a component is created for the first time ", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following is method is not a part of ReactDOM? ",
    answers: [
      { text: " ReactDOM.hydrate()", correct: false },
      { text: "ReactDOM.createPortal()", correct: false },
      { text: "All of the mentioned", correct: false },
      { text: "ReactDOM.destroy()", correct: true },
    ],
  },
  {
    question: "Which of the following is correct about prop in react?",
    answers: [
      { text: "Cannot be changed in the component", correct: true },
      { text: "Can be changed inside another component", correct: false },
      { text: "Can be changed inside the component", correct: false },
      { text: "All of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following is used to pass data to a component from outside in React?",
    answers: [
      { text: "render with arguments", correct: false },
      { text: " setState", correct: false },
      { text: "PropTypes", correct: false },
      { text: " props", correct: true },
    ],
  },
  {
    question: "React is also known as _____.",
    answers: [
      { text: "ReactJS", correct: false },
      { text: "Both A. and C.", correct: true },
      { text: "js", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "JSX stands for _____.",
    answers: [
      { text: "JSON XML", correct: false },
      { text: "JSON", correct: false },
      { text: "JavaScript and AngularJS", correct: false },
      { text: "JavaScript XML", correct: true },
    ],
  },
  {
    question: "JSX allows us to write _____. ",
    answers: [
      { text: "HTML in React ", correct: true },
      { text: "jQuery in React", correct: false },
      { text: "Angular Code in React", correct: false },
      { text: "MySQL in React", correct: false },
    ],
  },
  {
    question: "What is the correct syntax to write expression in JSX? ",
    answers: [
      { text: "[ expression ]", correct: false },
      { text: "{{ expression }} ", correct: false },
      { text: "_expression", correct: false },
      { text: "{ expression }", correct: true },
    ],
  },
  {
    question: "A class component must include the _______ statement.",
    answers: [
      { text: "extends React.Component", correct: true },
      { text: "extends React", correct: false },
      { text: "extends Component", correct: false },
      { text: "extends React.Component.All", correct: false },
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
  