const questions = [
    {
      question: " What is Kotlin?",
      answers: [
        { text: " A database", correct: false },
        { text: " An operating system", correct: false },
        { text: "A programming language", correct: true },
        { text: "A markup language", correct: false },
      ],
    },
    {
      question: "Which of the following is true about Kotlin?",
      answers: [
        { text: "It is an object-oriented programming language", correct: true },
        { text: "It is a functional programming language", correct: false },
        { text: "It is a procedural programming language", correct: false },
        { text: "It is a scripting language", correct: false },
      ],
    },
    {
      question: "What is the main advantage of using Kotlin over Java?",
      answers: [
        { text: "Better performance", correct: false },
        { text: "Better memory management", correct: false },
        { text: "More concise syntax", correct: true },
        { text: "Better support for multi-threading", correct: false },
      ],
    },
    {
      question: "Which of the following is a feature of Kotlin?",
      answers: [
        { text: "Checked exceptions", correct: false },
        { text: "Extension functions", correct: true },
        { text: "Null pointer exceptions", correct: false },
        { text: " Multiple inheritance", correct: false },
      ],
    },
    {
      question: "Which of the following is true about Kotlin’s null safety?",
      answers: [
        { text: "Kotlin uses the ? operator to denote nullability", correct: true },
        { text: "Kotlin does not allow null values", correct: false },
        { text: " Kotlin uses the ! operator to denote nullability", correct: false },
        { text: "Kotlin uses the ?? operator to denote nullability", correct: false },
      ],
    },
    {
      question: "Which of the following is true about Kotlin’s type system?",
      answers: [
        { text: "Kotlin’s type system is similar to Java’s", correct: false },
        { text: "Kotlin’s type system is more strict than Java’s", correct: true},
        { text: "Kotlin’s type system is less strict than Java’s", correct: false },
        { text: "Kotlin’s type system does not allow inheritance", correct: false},
      ],
    },
    {
      question: "What is a data class in Kotlin?",
      answers: [
        { text: "A class that is used to represent data structures", correct: true },
        { text: " A class that is used to perform database operations", correct: false },
        { text: "A class that is used to store constants", correct: false },
        { text: " A class that is used to handle exceptions", correct: false },
      ],
    },
    {
      question: "What is a lambda in Kotlin?",
      answers: [
        { text: "A class that is used to represent data structures", correct: false },
        { text: "A function that is passed as an argument to another function", correct: true },
        { text: "A type of variable in Kotlin", correct: false },
        { text: "A keyword used to define classes", correct: false },
      ],
    },
    {
      question: "What is the Elvis operator in Kotlin?",
      answers: [
        { text: " An operator used to check for null values", correct: true },
        { text: " A binary operator used to perform mathematical operations", correct: false },
        { text: "An operator used to compare two values", correct: false },
        { text: "An operator used to perform type conversion", correct: false },
      ],
    },
    {
      question: " Which of the following is true about Kotlin’s when expression?",
      answers: [
        { text: "It is used to declare variables", correct: false },
        { text: "It is used to handle exceptions", correct: false },
        { text: "It is similar to the switch statement in Java", correct: true },
        { text: "It can only be used with Boolean values", correct: false },
      ],
    },
    {
      question: ". What is the purpose of the apply() function in Kotlin?",
      answers: [
        { text: " To create a new instance of a class", correct: false },
        { text: "To modify the properties of an existing instance of a class", correct: true },
        { text: "To perform mathematical calculations", correct: false },
        { text: "To handle exceptions", correct: false },
      ],
    },
    {
      question: " What is the purpose of the let() function in Kotlin?",
      answers: [
          { text: "To perform a null-check and execute code only if the value is not null", correct: true },
        { text: "To create a new instance of a class", correct: false },
        { text: "To modify the properties of an existing instance of a class", correct: false },
        { text: "To perform mathematical calculations", correct: false },
      ],
    },
    {
      question: " What is a companion object in Kotlin?",
      answers: [
        { text: "An object that is used to define static members of a class", correct: true },
        { text: "An object that is used to store constants", correct: false },
        { text: "An object that is used to represent data structures", correct: false },
        { text: "An object that is used to create instances of a class", correct: false },
      ],
    },
    {
      question: "Which of the following is true about Kotlin’s data classes?",
      answers: [
        { text: "They must implement the Serializable interface", correct: false },
        { text: " They are final by default and cannot be extended", correct: false },
        { text: "They cannot have any properties", correct: false },
        { text: "They must implement the equals() and hashCode() methods", correct: true },
      ],
    },
    {
      question: "What is a sealed class in Kotlin?",
      answers: [
        { text: "A class that is used to define a closed set of subclasses", correct: true },
        { text: "A class that is used to represent data structures", correct: false },
        { text: " A class that is used to create instances of a class", correct: false },
        { text: "A class that is used to store constants", correct: false },
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
  