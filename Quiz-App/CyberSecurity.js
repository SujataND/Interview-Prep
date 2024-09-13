const questions = [
  {
    question: "What is Cyber Security?",
    answers: [
      { text: "Cyber Security provides security against malware", correct: false },
      { text: "Cyber Security provides security against cyber-terrorists", correct: false },
      { text: "Cyber Security protects a system from cyber attacks", correct: false },
      { text: "All of the mentioned ", correct: true },
    ],
  },
  {
    question: "What does cyber security protect?",
    answers: [
      { text: "Cyber security protects internet-connected systems", correct: true },
      { text: "Cyber security protects criminals", correct: false },
      { text: "Cyber security protects hackers", correct: false },
      { text: "None of the mentioned", correct: false },
    ],
  },
  {
    question: "Who is the father of computer security?",
    answers: [
      { text: "Charles", correct: false },
      { text: "Robert", correct: false },
      { text: "Bob Thomas", correct: false },
      { text: "August Kerckhoffs", correct: true },
    ],
  },
  {
    question: "Which of the following is defined as an attempt to steal, spy, damage or destroy computer systems, networks, or their associated information?",
    answers: [
      { text: "Computer security", correct: false },
      { text: "Cyber attack", correct: true },
      { text: "Cryptography", correct: false },
      { text: "Digital hacking", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of cyber security? ",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Cloud Security", correct: false },
      { text: "Network Security", correct: false },
      { text: "  Application Security", correct: false },
    ],
  },
  {
    question: "What are the features of cyber security?",
    answers: [
      { text: "Compliance ", correct: false },
      { text: "All of the above", correct: true},
      { text: "Defense against internal threats", correct: false },
      { text: "Threat Prevention ", correct: false},
    ],
  },
  {
    question: "Which of the following is an objective of network security?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Confidentiality", correct: false },
      { text: "  Integrity", correct: false },
      { text: " Availability", correct: false },
    ],
  },
  {
    question: "Which of the following is not a cybercrime? ",
    answers: [
      { text: "Denial of Service", correct: false },
      { text: "Man in the Middle", correct: false },
      { text: "Malware", correct: false },
      { text: "AES", correct: true },
    ],
  },
  {
    question: "Which of the following is a component of cyber security?",
    answers: [
      { text: "Internet Of Things", correct: true },
      { text: "AI", correct: false },
      { text: "Database", correct: false },
      { text: "Attacks", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of cyber attack?",
    answers: [
      { text: "Phishing", correct: false },
      { text: " SQL Injections", correct: false },
      { text: " Password Attack", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following is not an advantage of cyber security?",
    answers: [
      { text: "Minimizes computer freezing and crashes", correct: false },
      { text: "Makes the system slower", correct: true },
      { text: "Gives privacy to users", correct: false },
      { text: "Protects system against viruses", correct: false },
    ],
  },
  {
    question: "Cyberspace” was coined by _________",
    answers: [
      { text: "Scott Fahlman", correct: false },
      { text: "Andrew Tannenbaum", correct: false },
      { text: "Richard Stallman", correct: false },
      { text: "William Gibson", correct: true },
    ],
  },
  {
    question: " In which year has hacking become a practical crime and a matter of concern in the field of cyber technology?",
    answers: [
      { text: "1970 ", correct: true },
      { text: "1991", correct: false },
      { text: "1983", correct: false },
      { text: "1964", correct: false },
    ],
  },
  {
    question: "Governments hired some highly skilled hackers for providing cyber security for the country or state. These types of hackers are termed as _______ ",
    answers: [
      { text: "CIA triad", correct: false },
      { text: "Special Hackers ", correct: false },
      { text: "Government Hackers", correct: false },
      { text: "Nation / State sponsored hackers", correct: true },
    ],
  },
  {
    question: "Which of the following act violates cyber security?",
    answers: [
      { text: "Attack", correct: true },
      { text: " Exploit", correct: false },
      { text: "Threat", correct: false },
      { text: "Vulnerability", correct: false },
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
  