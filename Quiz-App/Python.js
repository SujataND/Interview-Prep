const questions = [
  {
    question: "Who developed Python Programming Language?",
    answers: [
      { text: "Wick van Rossum", correct: false },
      { text: "Rasmus Lerdorf", correct: false },
      { text: "Niene Stom", correct: false },
      { text: " Guido van Rossum", correct: true },
    ],
  },
  {
    question: " Which type of Programming does Python support?",
    answers: [
      { text: "all of the mentioned", correct: true },
      { text: "object-oriented programming", correct: false },
      { text: "structured programming", correct: false },
      { text: "functional programming", correct: false },
    ],
  },
  {
    question: "Is Python case sensitive when dealing with identifiers?",
    answers: [
      { text: "no", correct: false },
      { text: "none of the mentioned", correct: false },
      { text: "machine dependent", correct: false },
      { text: "yes", correct: true },
    ],
  },
  {
    question: "Which of the following is the correct extension of the Python file?",
    answers: [
      { text: ".python", correct: false },
      { text: ".py", correct: true },
      { text: ".pl", correct: false },
      { text: ".p", correct: false },
    ],
  },
  {
    question: " Is Python code compiled or interpreted?",
    answers: [
      { text: " Python code is both compiled and interpreted", correct: true },
      { text: "Python code is neither compiled nor interpreted", correct: false },
      { text: "Python code is only compiled", correct: false },
      { text: " Python code is only interpreted", correct: false },
    ],
  },
  {
    question: "All keywords in Python are in _________",
    answers: [
      { text: " Capitalized", correct: false },
      { text: "None of the mentioned", correct: true},
      { text: "lower case", correct: false },
      { text: " UPPER CASE", correct: false},
    ],
  },
  {
    question: "What will be the value of the following Python expression? ",
    answers: [
      { text: "7", correct: true },
      { text: "2", correct: false },
      { text: " 4", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: " Which of the following is used to define a block of code in Python language?",
    answers: [
      { text: "All of the mentioned", correct: false },
      { text: "Key", correct: false },
      { text: "Brackets", correct: false },
      { text: " Indentation", correct: true },
    ],
  },
  {
    question: "Which keyword is used for function in Python language?",
    answers: [
      { text: "def", correct: true },
      { text: "Function", correct: false },
      { text: "fun", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "Which of the following character is used to give single-line comments in Python?",
    answers: [
      { text: "//", correct: false },
      { text: "/*", correct: false },
      { text: "!", correct: false },
      { text: "#", correct: true },
    ],
  },
  {
    question: "Which of the following functions can help us to find the version of python that we are currently working on?",
    answers: [
      { text: "sys.version(1)", correct: false },
      { text: "sys.version", correct: true },
      { text: "sys.version(0)", correct: false },
      { text: "sys.version()", correct: false },
    ],
  },
  {
    question: "Python supports the creation of anonymous functions at runtime, using a construct called __________ ",
    answers: [
      { text: "pi", correct: false },
      { text: "anonymous", correct: false },
      { text: "none of the mentioned", correct: false },
      { text: "lambda", correct: true },
    ],
  },
  {
    question: " ",
    answers: [
      { text: " ", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: " What is the order of precedence in python?",
    answers: [
      { text: "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction", correct: false },
      { text: " Exponential, Parentheses, Division, Multiplication, Addition, Subtraction", correct: false },
      { text: "Parentheses, Exponential, Multiplication, Division, Subtraction, Addition", correct: false },
      { text: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction", correct: true },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: " What will be the output of the following Python code snippet if x=1? x<<2",
    answers: [
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "4", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What does pip stand for python?",
    answers: [
      { text: "Pip Installs Python", correct: false },
      { text: "Preferred Installer Program", correct: true },
      { text: "Pip Installs Packages", correct: false },
      { text: "All of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following is true for variable names in Python?",
    answers: [
      { text: "underscore and ampersand are the only two special characters allowed", correct: false },
      { text: "all private members must have leading and trailing underscores", correct: false },
      { text: "unlimited length", correct: true },
      { text: " none of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following is the truncation division operator in Python?",
    answers: [
      
      { text: "//", correct: true },
      { text: "|", correct: false },
      { text: "/", correct: false },
      { text: "%", correct: false },
    ],
  },
  {
    question: "Which of the following functions is a built-in function in python?",
    answers: [
      { text: "factorial()", correct: false },
      { text: "print()", correct: true },
      { text: "seed()", correct: false },
      { text: "sqrt()", correct: false },
    ],
  },
  {
    question: "Which of the following is the use of id() function in python?",
    answers: [
      { text: "Every object doesn’t have a unique id", correct: false },
      { text: "Id returns the identity of the object", correct: true },
      { text: "All of the mentioned", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: " Which of the following is not a core data type in Python programming?",
    answers: [
      { text: " Tuples", correct: false },
      { text: " Lists", correct: false },
      { text: "Class", correct: true },
      { text: "Dictionary ", correct: false },
    ],
  },
  {
    question: "Which of these is the definition for packages in Python?",
    answers: [
      { text: " A folder of python modules", correct: true },
      { text: " A set of main modules", correct: false },
      { text: "A number of files containing Python definitions and statements", correct: false },
      { text: "A set of programs making use of Python modules", correct: false },
    ],
  },
  {
    question: "What is the order of namespaces in which Python looks for an identifier?",
    answers: [
      { text: "Python first searches the built-in namespace, then the global namespace and finally the local namespace", correct: false },
      { text: "Python first searches the built-in namespace, then the local namespace and finally the global namespace", correct: false },
      { text: "Python first searches the local namespace, then the global namespace and finally the built-in namespace", correct: true },
      { text: "Python first searches the global namespace, then the local namespace and finally the built-in namespace", correct: false },
    ],
  },
  {
    question: "Which one of the following is not a keyword in Python language?",
    answers: [
      { text: "pass", correct: false },
      { text: "eval", correct: true },
      { text: "assert", correct: false },
      { text: "nonlocal", correct: false },
    ],
  },
  {
    question: "Which module in the python standard library parses options received from the command line? ",
    answers: [
      { text: "getarg", correct: false },
      { text: "main", correct: false },
      { text: "getopt", correct: true },
      { text: "os", correct: false },
    ],
  },
  {
    question: "What arithmetic operators cannot be used with strings in Python?",
    answers: [
      { text: " *", correct: false },
      { text: "+", correct: false },
      { text: "-", correct: true },
      { text: "All of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following statements is used to create an empty set in Python?",
    answers: [
      { text: "set()", correct: true },
      { text: "{}", correct: false },
      { text: "[]", correct: false },
      { text: "()", correct: false },
    ],
  },
  {
    question: "To add a new element to a list we use which Python command?",
    answers: [
      { text: "list1.addEnd(5)", correct: false },
      { text: " list1.addLast(5)", correct: false },
      { text: "list1.append(5)", correct: true },
      { text: "list1.add(5)", correct: false },
    ],
  },
  {
    question: "Which one of the following is the use of function in python? ",
    answers: [
      { text: " Functions don’t provide better modularity for your application", correct: false },
      { text: "you can’t also create your own functions", correct: false },
      { text: "Functions are reusable pieces of programs", correct: true },
      { text: "All of the mentioned", correct: false },
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
  