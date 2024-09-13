const questions = [
  {
    question: "What is a data structure?",
    answers: [
      { text: "A programming language", correct: false },
      { text: "A collection of algorithms", correct: false },
      { text: "A type of computer hardware", correct: false },
      { text: "A way to store and organize data ", correct: true },
    ],
  },
  {
    question: "What are the disadvantages of arrays?",
    answers: [
      { text: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size", correct: true },
      { text: " Index value of an array can be negative", correct: false },
      { text: " Elements are sequentially accessed", correct: false },
      { text: "Data structure like queue or stack cannot be implemented", correct: false },
    ],
  },
  {
    question: "Which data structure is used for implementing recursion?",
    answers: [
      { text: "Queue", correct: false },
      { text: " List", correct: false },
      { text: "Array", correct: false },
      { text: " Stack", correct: true },
    ],
  },
  {
    question: "The data structure required to check whether an expression contains a balanced parenthesis is?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Tree", correct: false },
      { text: " Array", correct: false },
    ],
  },
  {
    question: " Which of the following is not the application of stack?",
    answers: [
      { text: "Compiler Syntax Analyzer", correct: true },
      { text: "Data Transfer between two asynchronous process", correct: false },
      { text: "Tracking of local variables at run time", correct: false },
      { text: "A parentheses balancing program ", correct: false },
    ],
  },
  {
    question: "Which data structure is needed to convert infix notation to postfix notation?",
    answers: [
      { text: " Tree", correct: false },
      { text: "Stack", correct: true},
      { text: "Branch", correct: false },
      { text: "Queue ", correct: false},
    ],
  },
  {
    question: "What is the value of the postfix expression 6 3 2 4 + – *?",
    answers: [
      { text: "-18", correct: true },
      { text: "74", correct: false },
      { text: " 22", correct: false },
      { text: "40", correct: false },
    ],
  },
  {
    question: "  What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
    answers: [
      { text: "Linked List", correct: false },
      { text: "Tree", correct: false },
      { text: "Queue", correct: false },
      { text: " Stack", correct: true },
    ],
  },
  {
    question: "Which of the following statement(s) about stack data structure is/are NOT correct?",
    answers: [
      { text: "Stack is the FIFO data structure", correct: true },
      { text: "Top of the Stack always contain the new node", correct: false },
      { text: "Null link is present in the last node at the bottom of the stack", correct: false },
      { text: "Linked List are used for implementing Stacks", correct: false },
    ],
  },
  {
    question: "The data structure required for Breadth First Traversal on a graph is?",
    answers: [
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "Tree", correct: false },
      { text: "Queue", correct: true },
    ],
  },
  {
    question: "The prefix form of A-B/ (C * D ^ E) is?",
    answers: [
      { text: "-A/BC*^DE", correct: false },
      { text: "-A/B*C^DE", correct: true },
      { text: "-ABCD*^DE", correct: false },
      { text: "-/*^ACBDE", correct: false },
    ],
  },
  {
    question: "Which of the following points is/are not true about Linked List data structure when it is compared with an array?",
    answers: [
      { text: "Random access is not allowed in a typical implementation of Linked Lists", correct: false },
      { text: "Arrays have better cache locality that can make them better in terms of performance", correct: false },
      { text: "It is easy to insert and delete elements in Linked List", correct: false },
      { text: "Access of elements in linked list takes less time than compared to arrays", correct: true },
    ],
  },
  {
    question: "Which data structure is based on the Last In First Out (LIFO) principle? ",
    answers: [
      { text: "Stack", correct: true },
      { text: "Tree", correct: false },
      { text: "Linked List", correct: false },
      { text: "Queue", correct: false },
    ],
  },
  {
    question: "Which of the following application makes use of a circular linked list? ",
    answers: [
      { text: "Recursive function calls", correct: false },
      { text: "Undo operation in a text editor ", correct: false },
      { text: "Implement Hash Tables", correct: false },
      { text: "Allocating CPU to resources", correct: true },
    ],
  },
  {
    question: "What is a bit array?",
    answers: [
      { text: "Data structure that compactly stores bits", correct: true },
      { text: "Data structure for representing arrays of records", correct: false },
      { text: "Array in which elements are not present in continuous locations", correct: false },
      { text: " An array in which most of the elements have the same value", correct: false },
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
  