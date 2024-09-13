const questions = [
    {
      question: "Who invented Java Programming?",
      answers: [
        { text: "Brian Kernighan", correct: false },
        { text: "Dennis Ritchie", correct: false },
        { text: "James Gosling", correct: true },
        { text: "Guido van Rossum", correct: false },
      ],
    },
    {
      question: "Which statement is true about Java?",
      answers: [
        { text: "Java is a platform-independent programming language", correct: true },
        { text: "Java is a sequence-dependent programming language", correct: false },
        { text: " Java is a code dependent programming language", correct: false },
        { text: "Java is a platform-dependent programming language", correct: false },
      ],
    },
    {
      question: "Which component is used to compile, debug and execute the java programs?",
      answers: [
        { text: "JRE", correct: false },
        { text: "JIT", correct: false },
        { text: "JDK", correct: true },
        { text: "JVM", correct: false },
      ],
    },
    {
      question: "Which one of the following is not a Java feature?",
      answers: [
        { text: "Object-oriented", correct: false },
        { text: "Use of pointers", correct: true },
        { text: " Portable", correct: false },
        { text: "Dynamic and Extensible", correct: false },
      ],
    },
    {
      question: "Which of these cannot be used for a variable name in Java?",
      answers: [
        { text: " keyword", correct: true },
        { text: "identifier & keyword", correct: false },
        { text: "identifier", correct: false },
        { text: " none of the mentioned", correct: false },
      ],
    },
    {
      question: "What is the extension of java code files?",
      answers: [
        { text: ".js", correct: false },
        { text: " .java", correct: true},
        { text: ".txt", correct: false },
        { text: ".class", correct: false},
      ],
    },
    {
      question: "Which environment variable is used to set the java path?",
      answers: [
        { text: " JAVA_HOME", correct: true },
        { text: "MAVEN_Path", correct: false },
        { text: " JavaPATH", correct: false },
        { text: " JAVA", correct: false },
      ],
    },
    {
      question: " Which of the following is not an OOPS concept in Java?",
      answers: [
        { text: "Polymorphism", correct: false },
        { text: "Compilation", correct: true },
        { text: " Compilation", correct: false },
        { text: " Encapsulation", correct: false },
      ],
    },
    {
      question: " What is not the use of “this” keyword in Java?",
      answers: [
        { text: " Passing itself to the method of the same class", correct: true },
        { text: "Referring to the instance variable when a local variable has the same name", correct: false },
        { text: " Passing itself to another method", correct: false },
        { text: "Calling another constructor in constructor chaining", correct: false },
      ],
    },
    {
      question: " Which of the following is a type of polymorphism in Java Programming?",
      answers: [
        { text: "Multilevel polymorphism", correct: false },
        { text: "Execution time polymorphism", correct: false },
        { text: "Compile time polymorphism", correct: true },
        { text: "Multiple polymorphism", correct: false },
      ],
    },
    {
      question: "What is Truncation in Java?",
      answers: [
        { text: " Floating-point value assigned to a Floating type", correct: false },
        { text: "Floating-point value assigned to an integer type", correct: true },
        { text: " Integer value assigned to floating type", correct: false },
        { text: "Integer value assigned to floating type", correct: false },
      ],
    },
    {
      question: "What is the extension of compiled java classes?",
      answers: [
          { text: ".class", correct: true },
        { text: ".js", correct: false },
        { text: ".txt", correct: false },
        { text: ".java", correct: false },
      ],
    },
    {
      question: " Which exception is thrown when java is out of memory?",
      answers: [
        { text: "OutOfMemoryError", correct: true },
        { text: "MemoryError", correct: false },
        { text: "MemoryOutOfBoundsException", correct: false },
        { text: "MemoryFullException", correct: false },
      ],
    },
    {
      question: "Which of these are selection statements in Java?",
      answers: [
        { text: "break", correct: false },
        { text: "continue", correct: false },
        { text: "for()", correct: false },
        { text: "if()", correct: true },
      ],
    },
    {
      question: " Which of these keywords is used to define interfaces in Java?",
      answers: [
        { text: "interface", correct: true },
        { text: "intf", correct: false },
        { text: "Intf", correct: false },
        { text: "Interface", correct: false },
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
  