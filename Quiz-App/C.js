const questions = [
  {
    question: "Who is the father of C language?",
    answers: [
      { text: "Steve Jobs", correct: false },
      { text: "James Gosling", correct: false },
      { text: "Dennis Ritchie", correct: true },
      { text: "Rasmus Lerdorf", correct: false },
    ],
  },
  {
    question: " Which of the following is not a valid C variable name?",
    answers: [
      { text: "int $main;", correct: true },
      { text: " int number;", correct: false },
      { text: "int variable_count;", correct: false },
      { text: "Afloat rate;", correct: false },
    ],
  },
  {
    question: "All keywords in C are in ____________",
    answers: [
      { text: "UpperCase letters", correct: false },
      { text: " CamelCase letters", correct: false },
      { text: "LowerCase letters", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " Which of the following is true for variable names in C?",
    answers: [
      { text: " Variable can be of any length", correct: false },
      { text: "Variable names cannot start with a digit", correct: true },
      { text: "It is not an error to declare a variable to be one of the keywords(like goto, static)", correct: false },
      { text: "They can contain alphanumeric characters as well as special characters", correct: false },
    ],
  },
  {
    question: "Which is valid C expression?",
    answers: [
      { text: " int my_num = 100000;", correct: true },
      { text: "int my_num = 100,000;", correct: false },
      { text: "int my num = 1000;", correct: false },
      { text: "int $my_num = 10000;", correct: false },
    ],
  },
  {
    question: " Which of the following cannot be a variable name in C?",
    answers: [
      { text: "true", correct: false },
      { text: "volatile", correct: true},
      { text: "friend", correct: false },
      { text: "export", correct: false},
    ],
  },
  {
    question: "What is short int in C programming?",
    answers: [
      { text: "Short is the qualifier and int is the basic data type", correct: true },
      { text: "The basic data type of C", correct: false },
      { text: "Qualifier", correct: false },
      { text: "All of the mentioned", correct: false },
    ],
  },
  {
    question: "Which keyword is used to prevent any changes in the variable within a C program?",
    answers: [
      { text: "immutable", correct: false },
      { text: "const", correct: true },
      { text: "mmutable", correct: false },
      { text: "volatile", correct: false },
    ],
  },
  {
    question: "What is the result of logical or relational expression in C?",
    answers: [
      { text: " 0 or 1", correct: true },
      { text: " True or False", correct: false },
      { text: "0 if an expression is false and any positive number if an expression is true", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: "Which of the following typecasting is accepted by C language?",
    answers: [
      { text: "Widening conversions", correct: false },
      { text: "Narrowing conversions", correct: false },
      { text: "Widening & Narrowing conversions", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Where in C the order of precedence of operators do not exist?",
    answers: [
      { text: "Within conditional statements, if, else", correct: false },
      { text: "Within while, do-while", correct: false },
      { text: "Within a macro definition", correct: false },
      { text: "None of the mentioned", correct: true },
    ],
  },
  {
    question: " Which of the following is NOT possible with any 2 operators in C?",
    answers: [
        { text: "Same precedence, different associativity", correct: true },
      { text: "Different precedence, same associativity", correct: false },
      { text: "Different precedence, different associativity", correct: false },
      { text: " All of the mentioned", correct: false },
    ],
  },
  {
    question: "What is an example of iteration in C?",
    answers: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "do-while", correct: false },
      { text: "all of the mentioned", correct: true },
    ],
  },
  {
    question: "Functions can return enumeration constants in C?",
    answers: [
      { text: "false", correct: false },
      { text: "depends on the standard", correct: false },
      { text: "depends on the compiler", correct: false },
      { text: "true", correct: true },
    ],
  },
  {
    question: "Functions in C Language are always _________",
    answers: [
      { text: "External", correct: true },
      { text: "Internal", correct: false },
      { text: "Both Internal and External", correct: false },
      { text: " External and Internal are not valid terms for functions", correct: false },
    ],
  },
  {
    question: " Which of following is not accepted in C?",
    answers: [
      { text: "static a = 10; //static as", correct: false },
      { text: "static int func (int); //parameter as static", correct: false },
      { text: "static static int a; //a static variable prefixed with static", correct: true },
      { text: " all of the mentioned", correct: false },
    ],
  },
  {
    question: "Property which allows to produce different executable for different platforms in C is called?",
    answers: [
      { text: "File inclusion", correct: false },
      { text: "Conditional compilation", correct: true },
      { text: "Selective inclusion", correct: false },
      { text: " Recursive macros", correct: false },
    ],
  },
  {
    question: " C preprocessors can have compiler specific features.",
    answers: [
      { text: "False", correct: false },
      { text: " Depends on the standard", correct: false },
      { text: "True", correct: true },
      { text: "Depends on the platform", correct: false },
    ],
  },
  {
    question: " Which of the following are C preprocessors?",
    answers: [
      
      { text: " #endif", correct: true },
      { text: "#ifdef", correct: false },
      { text: " #define", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "The C-preprocessors are specified with _________ symbol.",
    answers: [
      { text: "$", correct: false },
      { text: "#", correct: true },
      { text: "&", correct: false },
      { text: "*", correct: false },
    ],
  },
  {
    question: " How many number of pointer (*) does C have against a pointer variable declaration?",
    answers: [
      { text: "7", correct: false },
      { text: "127", correct: false },
      { text: "255", correct: false },
      { text: "No Limits", correct: true },
    ],
  },
  {
    question: " Which of the following is not possible statically in C language?",
    answers: [
      { text: "Rectangular Array", correct: false },
      { text: " Cuboidal Array", correct: false },
      { text: "Jagged Array", correct: true },
      { text: "Multidimensional Array", correct: false },
    ],
  },
  {
    question: "Which of the following return-type cannot be used for a function in C?",
    answers: [
      { text: "char*", correct: true },
      { text: "struct", correct: false },
      { text: "void", correct: false },
      { text: "none of the mentioned", correct: false },
    ],
  },
  {
    question: "When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
    answers: [
      { text: "Standard input", correct: false },
      { text: "Standard output", correct: false },
      { text: "Standard error", correct: false },
      { text: "All of the mentioned", correct: true },
    ],
  },
  {
    question: "In C language, FILE is of which data type?",
    answers: [
      { text: "int", correct: false },
      { text: "struct", correct: true },
      { text: "char*", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the sizeof(char) in a 32-bit C compiler?",
    answers: [
      { text: "1 Bit", correct: false },
      { text: "2 Bit", correct: false },
      { text: " 1 Byte", correct: true },
      { text: "2 Byte", correct: false },
    ],
  },
  {
    question: "How many keywords are there in Standard C programming language ?",
    answers: [
      { text: "32", correct: false },
      { text: "28", correct: false },
      { text: "44", correct: true },
      { text: "21", correct: false },
    ],
  },
  {
    question: " Which of the following is true about C programming language ?",
    answers: [
      { text: "C is a structural language.", correct: false },
      { text: "C is a procedural language.", correct: false },
      { text: "C does not supports function within function.", correct: false },
      { text: "All of these", correct: true },
    ],
  },
  {
    question: "Choose a syntax for C Ternary Operator from the list.",
    answers: [
      { text: "condition : expression1 ? expression2", correct: false },
      { text: "condition ? expression1 < expression2", correct: false },
      { text: "condition ? expression1 : expression2", correct: true },
      { text: "condition < expression1 ? expression2", correct: false },
    ],
  },
  {
    question: "In which year was C language developed?",
    answers: [
      { text: "1962", correct: false },
      { text: "1978", correct: false },
      { text: "1972", correct: true },
      { text: "1979", correct: false },
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
