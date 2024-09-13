const questions = [
  {
    question: "CSS stands for -",
    answers: [
      { text: "Color and style sheets", correct: false },
      { text: "Cascade style sheets", correct: false },
      { text: "Cascading style sheets", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " The property in CSS used to change the background color of an element is -",
    answers: [
      { text: "background-color", correct: true },
      { text: "bgcolor", correct: false },
      { text: "color", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to control the element's font-size is -",
    answers: [
      { text: "text-style", correct: false },
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " Which of the following CSS property is used to set the background image of an element?",
    answers: [
      { text: "background-attachment", correct: false },
      { text: "background-image", correct: true },
      { text: "background-color", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following property is used as the shorthand property for the padding properties?",
    answers: [
      { text: "padding", correct: true },
      { text: "padding-left", correct: false },
      { text: "padding-right", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to make the text bold is -",
    answers: [
      { text: " weight: bold", correct: false },
      { text: "font-weight : bold", correct: true},
      { text: "font: bold", correct: false },
      { text: "style: bold", correct: false},
    ],
  },
  {
    question: "Are the negative values allowed in padding property?",
    answers: [
      { text: "No", correct: true },
      { text: "Yes", correct: false },
      { text: "Can't say", correct: false },
      { text: "May be", correct: false },
    ],
  },
  {
    question: "Which of the following property is used as the shorthand property of margin properties?",
    answers: [
      { text: "margin-left", correct: false },
      { text: "margin", correct: true },
      { text: "margin-right", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to specify the transparency of an element is -",
    answers: [
      { text: "opacity", correct: true },
      { text: "filter", correct: false },
      { text: "visibility", correct: false },
      { text: "overlay", correct: false },
    ],
  },
  {
    question: "Which of the following is used to specify the subscript of text using CSS?",
    answers: [
      { text: "vertical-align: super", correct: false },
      { text: "vertical-align: subscript", correct: false },
      { text: "vertical-align: sub", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
    answers: [
      { text: "calpha-spacing", correct: false },
      { text: "letter-spacing", correct: true },
      { text: "character-spacing", correct: false },
      { text: "alphabet-spacing", correct: false },
    ],
  },
  {
    question: "  The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
    answers: [
        { text: "writing-mode", correct: true },
      { text: "text-indent", correct: false },
      { text: "word-break", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    answers: [
      { text: "text-transform : capitalize;", correct: true },
      { text: "text-transform : capital;", correct: false },
      { text: "transform : capitalize", correct: false },
      { text: "text-style : capital;", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    answers: [
      { text: "div ~ p", correct: false },
      { text: "div#p", correct: false },
      { text: "p", correct: false },
      { text: "div p", correct: true },
    ],
  },
  {
    question: " Which of the following is the correct syntax to select the p siblings of a div element?",
    answers: [
      { text: "div ~ p", correct: true },
      { text: "div + p", correct: false },
      { text: "div p", correct: false },
      { text: "p", correct: false },
    ],
  },
  {
    question: "The CSS property used to draw a line around the elements outside the border?",
    answers: [
      { text: "border", correct: false },
      { text: "padding", correct: false },
      { text: "outline", correct: true },
      { text: "line", correct: false },
    ],
  },
  {
    question: "Which of the following CSS property is used to add shadows to the text?",
    answers: [
      { text: "text-stroke", correct: false },
      { text: "text-shadow", correct: true },
      { text: "text-overflow", correct: false },
      { text: "text-decoration", correct: false },
    ],
  },
  {
    question: "Which of the following is not a value of the font-variant property in CSS?",
    answers: [
      { text: "normal", correct: false },
      { text: "small-caps", correct: false },
      { text: "large-caps", correct: true },
      { text: "inherit", correct: false },
    ],
  },
  {
    question: "Which of the following CSS property is used to specify whether the table cells share the common or separate border?",
    answers: [
      
      { text: "border-collapse", correct: true },
      { text: "border-radius", correct: false },
      { text: "border-spacing", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to make the rounded borders, or rounded corners around an element is -",
    answers: [
      { text: "border-collapse", correct: false },
      { text: "border-radius", correct: true },
      { text: "border-spacing", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to set the distance between the borders of the adjacent cells in the table is -",
    answers: [
      { text: "border-collapset", correct: false },
      { text: " border-spacing", correct: true },
      { text: "border-radius", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    answers: [
      { text: "d:! selector", correct: false },
      { text: ":empty selector", correct: false },
      { text: ":not selector", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is not a type of combinator?",
    answers: [
      { text: "*", correct: true },
      { text: "+", correct: false },
      { text: ">", correct: false },
      { text: "~", correct: false },
    ],
  },
  {
    question: "Which of the following CSS property defines how an image or video fits into container with established height and width?",
    answers: [
      { text: "object-position", correct: false },
      { text: "position", correct: false },
      { text: "object-fit", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " Which of the following CSS property specifies the origin of the background-image?",
    answers: [
      { text: "background-attachment", correct: false },
      { text: "background-origin", correct: true },
      { text: "background-size", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: " A program in HTML can be rendered and read by -",
    answers: [
      { text: "Server", correct: false },
      { text: "memory", correct: false },
      { text: "Interpreter", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "The CSS property used to set the maximum width of the element's content box is -",
    answers: [
      { text: " height property", correct: false },
      { text: "max-height property", correct: false },
      { text: " max-width property", correct: true },
      { text: "position property", correct: false },
    ],
  },
  {
    question: "Which if the following CSS function allows us to perform calculations?",
    answers: [
      { text: "calc() function", correct: true },
      { text: "calculator() function", correct: false },
      { text: "calculate() function", correct: false },
      { text: "cal() function", correct: false },
    ],
  },
  {
    question: "The CSS property used to set the minimum width of the element's content box is -",
    answers: [
      { text: "max-width property", correct: false },
      { text: "width property", correct: false },
      { text: "min-width property", correct: true },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: " Which of the following CSS property is used to specify the type of quotation mark?",
    answers: [
      { text: "z-index property", correct: false },
      { text: "hyphens property", correct: false },
      { text: "quotes property", correct: true },
      { text: "None of the above", correct: false },
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
