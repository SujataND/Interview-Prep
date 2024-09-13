const questions = [
  {
    question: "Artificial Intelligence is about_.",
    answers: [
      { text: "Putting your intelligence in Machine", correct: false },
      { text: "Programming on Machine with your Own Intelligence", correct: false },
      { text: "Playing a game on Computer", correct: false },
      { text: " Making a machine Intelligent", correct: true },
    ],
  },
  {
    question: "Who is known as the -Father of AI",
    answers: [
      { text: "John McCarthy", correct: true },
      { text: "Allen Newell", correct: false },
      { text: "Alan Turing", correct: false },
      { text: "Fisher Ada", correct: false },
    ],
  },
  {
    question: "Select the most appropriate situation for that a blind search can be used.",
    answers: [
      { text: "Real-life situation", correct: false },
      { text: "Complex game", correct: false },
      { text: "All of the above", correct: false },
      { text: "Small Search Space", correct: true },
    ],
  },
  {
    question: "The application/applications of Artificial Intelligence is/are",
    answers: [
      { text: "Expert Systems", correct: false },
      { text: "All of the above", correct: true },
      { text: "Gaming", correct: false },
      { text: "Vision Systems", correct: false },
    ],
  },
  {
    question: " Among the given options, which search algorithm requires less memory?",
    answers: [
      { text: "Depth First Search", correct: true },
      { text: "Optimal Search", correct: false },
      { text: "Breadth-First Search", correct: false },
      { text: "Linear Search ", correct: false },
    ],
  },
  {
    question: "If a robot is able to change its own trajectory as per the external conditions, then the robot is considered as the__",
    answers: [
      { text: " Mobile", correct: false },
      { text: "Intelligent", correct: true},
      { text: "Non-Servo", correct: false },
      { text: " Open Loop", correct: false},
    ],
  },
  {
    question: "Which of the given language is not commonly used for AI?",
    answers: [
      { text: "Perl", correct: true },
      { text: "Python", correct: false },
      { text: " PROLOG", correct: false },
      { text: "LISP", correct: false },
    ],
  },
  {
    question: "A technique that was developed to determine whether a machine could or could not demonstrate the artificial intelligence known as the___ ",
    answers: [
      { text: "Boolean Algebra", correct: false },
      { text: "Logarithm", correct: false },
      { text: "Algorithm", correct: false },
      { text: "Turing Test", correct: true },
    ],
  },
  {
    question: "The component of an Expert system is_.",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Knowledge Base", correct: false },
      { text: "Inference Engine", correct: false },
      { text: "User Interface", correct: false },
    ],
  },
  {
    question: "Which algorithm is used in the Game tree to make decisions of Win/Lose?",
    answers: [
      { text: "Heuristic Search Algorithm", correct: false },
      { text: "DFS/BFS algorithm", correct: false },
      { text: "Greedy Search Algorithm", correct: false },
      { text: "Min/Max algorithm", correct: true },
    ],
  },
  {
    question: "The available ways to solve a problem of state-space-search.",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Among the given options, which is not the required property of Knowledge representation?",
    answers: [
      { text: "Inferential Efficiency", correct: false },
      { text: "Inferential Adequacy", correct: false },
      { text: "Representational Adequacy", correct: false },
      { text: "Representational Verification", correct: true },
    ],
  },
  {
    question: " An AI agent perceives and acts upon the environment using_.",
    answers: [
      { text: " Both b and d", correct: true },
      { text: "Sensors", correct: false },
      { text: "Perceiver", correct: false },
      { text: "Actuators", correct: false },
    ],
  },
  {
    question: " Which rule is applied for the Simple reflex agent?",
    answers: [
      { text: "Simple-action rule", correct: false },
      { text: "simple &Condition-action rule ", correct: false },
      { text: "None of the above", correct: false },
      { text: "Condition-action rule", correct: true },
    ],
  },
  {
    question: "Which agent deals with the happy and unhappy state?",
    answers: [
      { text: "Utility-based agent", correct: true },
      { text: "Model-based agent", correct: false },
      { text: "Goal-based Agent", correct: false },
      { text: "Learning Agent", correct: false },
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
  