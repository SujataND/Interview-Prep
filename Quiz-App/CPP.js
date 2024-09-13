const questions = [
    {
      question: " Who invented C++?",
      answers: [
        { text: "Brian Kernighan", correct: false },
        { text: "Dennis Ritchie", correct: false },
        { text: "Bjarne Stroustrup", correct: true },
        { text: " Ken Thompson", correct: false },
      ],
    },
    {
      question: "What is C++?",
      answers: [
        { text: " C++ supports both procedural and object oriented programming language", correct: true },
        { text: "C++ is an object oriented programming language", correct: false },
        { text: "C++ is a procedural programming language", correct: false },
        { text: "C++ is a functional programming language", correct: false },
      ],
    },
    {
      question: "Which of the following user-defined header file extension used in c++?",
      answers: [
        { text: "hg", correct: false },
        { text: "cpp", correct: false },
        { text: "h", correct: true },
        { text: "hf", correct: false },
      ],
    },
    {
      question: "Which of the following is a correct identifier in C++?",
      answers: [
        { text: "$var_name", correct: false },
        { text: " VAR_1234", correct: true },
        { text: "7VARNAME", correct: false },
        { text: " 7var_name", correct: false },
      ],
    },
    {
      question: "Which of the following is not a type of Constructor in C++?",
      answers: [
        { text: "Friend constructor", correct: true },
        { text: "Default constructor", correct: false },
        { text: "Parameterized constructor", correct: false },
        { text: "Copy constructor", correct: false },
      ],
    },
    {
      question: " Which of the following approach is used by C++?",
      answers: [
        { text: "Left-right", correct: false },
        { text: "Bottom-up", correct: true},
        { text: "Right-left", correct: false },
        { text: "Top-down", correct: false},
      ],
    },
    {
      question: "What is virtual inheritance in C++?",
      answers: [
        { text: "C++ technique to avoid multiple copies of the base class into children/derived class", correct: true },
        { text: "C++ technique to enhance multiple inheritance", correct: false },
        { text: " C++ technique to ensure that a private member of the base class can be accessed somehow", correct: false },
        { text: "C++ technique to avoid multiple inheritances of classes", correct: false },
      ],
    },
    {
      question: " What is the difference between delete and delete[] in C++?",
      answers: [
        { text: "delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case", correct: false },
        { text: "delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects", correct: true },
        { text: "delete is used to delete normal objects whereas delete[] is used to pointer objects", correct: false },
        { text: "delete is a keyword whereas delete[] is an identifier", correct: false },
      ],
    },
    {
      question: "Which of the following is correct about this pointer in C++?",
      answers: [
        { text: " this pointer is passed as a hidden argument in all non-static functions of a class", correct: true },
        { text: "this pointer is passed as a hidden argument in all static variables of a class", correct: false },
        { text: "this pointer is passed as a hidden argument in all the functions of a class", correct: false },
        { text: "this pointer is passed as a hidden argument in all static functions of a class", correct: false },
      ],
    },
    {
      question: "Which of the following type is provided by C++ but not C?",
      answers: [
        { text: "double", correct: false },
        { text: "int", correct: false },
        { text: "bool", correct: true },
        { text: "float", correct: false },
      ],
    },
    {
      question: "By default, all the files in C++ are opened in _________ mode.",
      answers: [
        { text: "ISCII", correct: false },
        { text: "Text", correct: true },
        { text: "Binary", correct: false },
        { text: "VTC", correct: false },
      ],
    },
    {
      question: "Which of the following correctly declares an array in C++?",
      answers: [
          { text: "int array[10];", correct: true },
        { text: " array{10};", correct: false },
        { text: "array array[10];", correct: false },
        { text: "int array;", correct: false },
      ],
    },
    {
      question: "What is the size of wchar_t in C++?",
      answers: [
        { text: " Based on the number of bits in the system", correct: true },
        { text: "2 or 4;", correct: false },
        { text: "4", correct: false },
        { text: "2", correct: false },
      ],
    },
    {
      question: "What is the use of the indentation in c++?",
      answers: [
        { text: "r distinguishes between comments and inner data", correct: false },
        { text: "distinguishes between comments and outer data", correct: false },
        { text: " r distinguishes between comments and outer data", correct: false },
        { text: "distinguishes between comments and code", correct: true },
      ],
    },
    {
      question: "Which is more effective while calling the C++ functions?",
      answers: [
        { text: "call by reference", correct: true },
        { text: "call by pointer", correct: false },
        { text: "call by value", correct: false },
        { text: "call by object", correct: false },
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
  