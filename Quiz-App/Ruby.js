const questions = [
  {
    question: "Why do we use comments?",
    answers: [
      { text: "For later use to understand the working of the program", correct: false },
      { text: "It is an efficient way of programming", correct: false },
      { text: " It makes easy for the third person to understand", correct: false },
      { text: " All of the mentioned", correct: true },
    ],
  },
  {
    question: "Which of the following type of comments are valid in ruby?",
    answers: [
      { text: "All of the mentioned", correct: true },
      { text: "Double line comments", correct: false },
      { text: "Multi line comments", correct: false },
      { text: "Single line comments", correct: false },
    ],
  },
  {
    question: "How to comment multiple lines in ruby?",
    answers: [
      { text: " Using single line comments", correct: false },
      { text: "No option to comment      ", correct: false },
      { text: "All of the mentioned", correct: false },
      { text: "Using multiline comments", correct: true },
    ],
  },
  {
    question: "How to comment a single line?",
    answers: [
      { text: "Using begin and end", correct: false },
      { text: "Using #", correct: true },
      { text: "Using //", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: " This the right way to comment a single line.“Ruby”.length # I’m a single line comment!",
    answers: [
      { text: "True", correct: true },
      { text: " False", correct: false },
    ],
  },
  {
    question: "What is the output of the given code?“Ruby”.length #to find the length of given string",
    answers: [
      { text: "4 to find the length of given string ", correct: false },
      { text: "4", correct: true},
      { text: "To find the length of given string", correct: false },
      { text: " Ruby", correct: false},
    ],
  },
  {
    question: "Why do we use =begin and =end?",
    answers: [
      { text: "All of the mentioned", correct: true },
      { text: "To mark the start and end of multiline comment", correct: false },
      { text: " To comment multiple lines", correct: false },
      { text: "To avoid the use of # again and again", correct: false },
    ],
  },
  {
    question: " Space between 2+5 or 2 + 5 is valid but =begin and = begin is not valid.",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },
  {
    question: "Which of the following statement is not a feature of ruby?",
    answers: [
      { text: "Ruby can not be connected to Database", correct: true },
      { text: "Ruby is interpreted programming language", correct: false },
      { text: "Ruby can be embedded into HTML.", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "________ datatypes are valid in Ruby.",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Integer", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following is not a valid datatype in Ruby?",
    answers: [
      { text: "Float", correct: false },
      { text: "Timedate", correct: true },
      { text: "Integer", correct: false },
      { text: "String", correct: false },
    ],
  },
  {
    question: "Which of the following is the valid string method?",
    answers: [
      { text: ".downcase method", correct: false },
      { text: ".length method", correct: false },
      { text: ".upcase method", correct: false },
      { text: ".irreverse method", correct: true },
    ],
  },
  {
    question: " Is Ruby an object oriented general purpose programming language?",
    answers: [
      { text: "yes ", correct: true },
      { text: "no", correct: false },
      { text: "may be", correct: false },
      { text: "none", correct: false },
    ],
  },
  {
    question: " ",
    answers: [
      { text: "", correct: false },
      { text: " ", correct: false },
      { text: "", correct: false },
      { text: "", correct: true },
    ],
  },
  {
    question: "What is a controller?",
    answers: [
      { text: "A controller is a container for a group of web pages", correct: true },
      { text: "An array uses indices and a hash uses “keys”", correct: false },
      { text: "When the order matters, use an array", correct: false },
      { text: "It’s a test that simulates a browser accessing our application", correct: false },
    ],
  },
  {
    question: "Which of the following is valid conditional statement? ",
    answers: [
      { text: "if else", correct: false },
      { text: "elif", correct: false },
      { text: "else", correct: true },
      { text: "else if", correct: false },
    ],
  },
  {
    question: "The notation \b stands for_",
    answers: [
      { text: "bold", correct: false },
      { text: "backspace", correct: true },
      { text: "blank", correct: false },
      { text: "black", correct: false },
    ],
  },
  {
    question: "Ruby is designed by ____________",
    answers: [
      { text: "Yukihiro Matsumoto", correct: false },
      { text: "BJames Gosling", correct: false },
      { text: "Guido van Rossum", correct: true },
      { text: " Martin Odersky", correct: false },
    ],
  },
  {
    question: "What error does the if condition gives if not terminated with end statement?",
    answers: [
      
      { text: "All of the above", correct: true },
      { text: "Expecting keyword end", correct: false },
      { text: "Unexpected end", correct: false },
      { text: "Syntax error", correct: false },
    ],
  },
  {
    question: " What is Ruby?",
    answers: [
      { text: "markup language", correct: false },
      { text: "scripting language", correct: true },
      { text: "procedural language", correct: false },
      { text: "stylesheet language", correct: false },
    ],
  },
  {
    question: "_______ character is used to give comment in ruby",
    answers: [
      { text: "@", correct: false },
      { text: "#", correct: true },
      { text: "$", correct: false },
      { text: "%", correct: false },
    ],
  },
  {
    question: " Ruby was created in which year?",
    answers: [
      { text: " 1994", correct: false },
      { text: " 1991", correct: false },
      { text: "1993", correct: true },
      { text: " 1997", correct: false },
    ],
  },
  {
    question: "Which of the languages syntax matches with the Ruby’s syntax?",
    answers: [
      { text: " Perl", correct: true },
      { text: " Python", correct: false },
      { text: "Java", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What is the extension used for saving the ruby file?",
    answers: [
      { text: " .rrb", correct: false },
      { text: ".ruby", correct: false },
      { text: ".rb", correct: true },
      { text: ".rub", correct: false },
    ],
  },
  {
    question: "What is the size of an integer data type in ruby?",
    answers: [
      { text: "-2^30 to 2^28", correct: false },
      { text: "-2^30 to 2^29", correct: true },
      { text: "-2^30 to 2^30", correct: false },
      { text: "-2^29 to 2^29", correct: false },
    ],
  },
  {
    question: " What is the sequence of ruby strings?",
    answers: [
      { text: "32-bit bytes", correct: false },
      { text: "4-bit bytes", correct: false },
      { text: "8-bit bytes", correct: true },
      { text: "16-bit bytes", correct: false },
    ],
  },
  {
    question: "Which of these is not a valid library function?",
    answers: [
      { text: "Get ", correct: false },
      { text: "Print", correct: false },
      { text: "Gets", correct: true },
      { text: "Puts", correct: false },
    ],
  },
  {
    question: "Why do we use comments?",
    answers: [
      { text: "Both of the above", correct: true },
      { text: "It is an efficient way of programming", correct: false },
      { text: "It makes easy for the third person to understand", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Block comment conceals several lines from the interpreter with ______",
    answers: [
      { text: "=end", correct: false },
      { text: "=start and =end ", correct: false },
      { text: "=begin and =end", correct: true },
      { text: "=here and =end", correct: false },
    ],
  },
  {
    question: "Ruby runs on which platform?",
    answers: [
      { text: "Mac OS", correct: false },
      { text: "Unix", correct: false },
      { text: "All of the Above", correct: true },
      { text: "Windows", correct: false },
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
  