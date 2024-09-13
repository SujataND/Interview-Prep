const questions = [
  {
    question: "What is HTML?",
    answers: [
      { text: "HTML describes the structure of a webpage", correct: false },
      { text: "HTML is the standard markup language mainly used to create web pages", correct: false },
      { text: "HTML consists of a set of elements that helps the browser how to view the content", correct: false },
      { text: " All of the mentioned", correct: true },
    ],
  },
  {
    question: " Who is the father of HTML?",
    answers: [
      { text: "Tim Berners-Lee", correct: true },
      { text: "Rasmus Lerdorf", correct: false },
      { text: "Brendan Eich", correct: false },
      { text: "Sergey Brin", correct: false },
    ],
  },
  {
    question: "Which is larget desert in the world?",
    answers: [
      { text: "HyperText Machine Language", correct: false },
      { text: "HyperText Marking Language", correct: false },
      { text: "HighText Marking Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
    ],
  },
  {
    question: "What is DOM in HTML?",
    answers: [
      { text: "Language dependent application programming", correct: false },
      { text: "Convention for representing and interacting with objects in html documents", correct: true },
      { text: "Hierarchy of objects in ASP.NET", correct: false },
      { text: "Application programming interface", correct: false },
    ],
  },
  {
    question: " The correct sequence of HTML tags for starting a webpage is -",
    answers: [
      { text: "HTML, Head, Title, Body", correct: true },
      { text: "Head, Title, HTML, body", correct: false },
      { text: "HTML, Body, Title, Head", correct: false },
      { text: "HTML, Head, Title, Body", correct: false },
    ],
  },
  {
    question: "In which part of the HTML metadata is contained?",
    answers: [
      { text: " title tag", correct: false },
      { text: "head tag", correct: true},
      { text: "html tag", correct: false },
      { text: "body tag", correct: false},
    ],
  },
  {
    question: " Which of the following is not the element associated with the HTML table layout?",
    answers: [
      { text: "color", correct: true },
      { text: "alignment", correct: false },
      { text: " size", correct: false },
      { text: "spanning", correct: false },
    ],
  },
  {
    question: " Which element is used for or styling HTML5 layout?",
    answers: [
      { text: "PHP", correct: false },
      { text: "JavaScript", correct: false },
      { text: "jQuery", correct: false },
      { text: " CSS", correct: true },
    ],
  },
  {
    question: "HTML is a subset of ___________",
    answers: [
      { text: "SGML", correct: true },
      { text: "SGMT", correct: false },
      { text: "SGME", correct: false },
      { text: "XHTML", correct: false },
    ],
  },
  {
    question: "Which character is used to represent the closing of a tag in HTML?",
    answers: [
      { text: ",", correct: false },
      { text: ".", correct: false },
      { text: "!", correct: false },
      { text: "/", correct: true },
    ],
  },
  {
    question: "What is the work of <address> element in HTML5?",
    answers: [
      { text: "contains url", correct: false },
      { text: "contains contact details for author", correct: true },
      { text: "contains home address", correct: false },
      { text: "contains IP address", correct: false },
    ],
  },
  {
    question: " Which of the following is an HTML specification used to add more information to HTML tags?",
    answers: [
      { text: "Modifydata", correct: false },
      { text: "Minidata", correct: false },
      { text: "Macrodata", correct: false },
      { text: "Microdata", correct: true },
    ],
  },
  {
    question: " Which attribute is not essential under iframe ?",
    answers: [
      { text: " frameborder", correct: true },
      { text: "width", correct: false },
      { text: "height", correct: false },
      { text: "src", correct: false },
    ],
  },
  {
    question: " _____________ defines a group of content that should be used as a figure and may be labeled by a legend element.",
    answers: [
      { text: "details", correct: false },
      { text: "output", correct: false },
      { text: "aside", correct: false },
      { text: "figure", correct: true },
    ],
  },
  {
    question: "HTML tags are enclosed in-",
    answers: [
      { text: "< and >", correct: true },
      { text: "! and ?", correct: false },
      { text: "{ and }", correct: false },
      { text: "# and #", correct: false },
    ],
  },
  {
    question: "Which of the following tag is used to add rows in the table?",
    answers: [
      { text: "<td> and </td>", correct: false },
      { text: "<th> and </th>", correct: false },
      { text: "<tr> and </tr>", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "The <hr> tag in HTML is used for -",
    answers: [
      { text: "new line", correct: false },
      { text: "horizontal ruler", correct: true },
      { text: "vertical ruler", correct: false },
      { text: "new paragraph", correct: false },
    ],
  },
  {
    question: "Which of the following attribute is used to provide a unique name to an element?",
    answers: [
      { text: "class", correct: false },
      { text: "type", correct: false },
      { text: "id", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is Modernizr?",
    answers: [
      
      { text: "JavaScript Library", correct: true },
      { text: "CSS style sheet", correct: false },
      { text: "The source code of a web page", correct: false },
      { text: "PHP file", correct: false },
    ],
  },
  {
    question: "What is the JavaScript check for the HTML5 video feature?",
    answers: [
      { text: "Modernizr.video[format].", correct: false },
      { text: "Modernizr.video", correct: true },
      { text: "Modernizr.rgba", correct: false },
      { text: "Modernizr.rgba", correct: false },
    ],
  },
  {
    question: "Which of the following HTML 4 attributes is not removed in HTML5?",
    answers: [
      { text: "text", correct: false },
      { text: " mark", correct: true },
      { text: "rules", correct: false },
      { text: "link", correct: false },
    ],
  },
  {
    question: " What are the types of unordered or bulleted list in HTML?",
    answers: [
      { text: "disc, square, triangle", correct: false },
      { text: "polygon, triangle, circle", correct: false },
      { text: "disc, circle, square", correct: true },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which of the following HTML attribute is used to define inline styles?",
    answers: [
      { text: "style", correct: true },
      { text: "type", correct: false },
      { text: "class", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following element is not removed by HTML5?",
    answers: [
      { text: "vlink", correct: false },
      { text: "marginwidth", correct: false },
      { text: "span", correct: true },
      { text: "compact", correct: false },
    ],
  },
  {
    question: " An HTML program is saved by using the ____ extension.",
    answers: [
      { text: ".ht", correct: false },
      { text: ".html", correct: true },
      { text: ".hml", correct: false },
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
    question: "Which of the following is not a newly added element in HTML5?",
    answers: [
      { text: " article", correct: false },
      { text: "audio", correct: false },
      { text: " frameset", correct: true },
      { text: "nav", correct: false },
    ],
  },
  {
    question: "The tags in HTML are -",
    answers: [
      { text: "not case-sensitive", correct: true },
      { text: "in upper case", correct: false },
      { text: "in lowercase", correct: false },
      { text: "case-sensitive", correct: false },
    ],
  },
  {
    question: "____________ defines the accelerator key to be used for keyboard access to an element.",
    answers: [
      { text: "data-X", correct: false },
      { text: "rp", correct: false },
      { text: "accesskey", correct: true },
      { text: "command", correct: false },
    ],
  },
  {
    question: " Which of the following element sets is an item of metadata?",
    answers: [
      { text: " itemref", correct: false },
      { text: "itemtype", correct: false },
      { text: "itemscope", correct: true },
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
