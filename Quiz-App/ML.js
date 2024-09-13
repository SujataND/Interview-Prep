const questions = [
  {
    question: "What is Machine learning?",
    answers: [
      { text: "The selective acquisition of knowledge through the use of computer programs", correct: false },
      { text: "The selective acquisition of knowledge through the use of manual programs", correct: false },
      { text: "The autonomous acquisition of knowledge through the use of manual programs", correct: false },
      { text: " The autonomous acquisition of knowledge through the use of computer programs", correct: true },
    ],
  },
  {
    question: "K-Nearest Neighbors (KNN) is classified as what type of machine learning algorithm?",
    answers: [
      { text: " Instance-based learning", correct: true },
      { text: "Parametric learning", correct: false },
      { text: "Non-parametric learning", correct: false },
      { text: "Model-based learning", correct: false },
    ],
  },
  {
    question: "Which of the following is not a supervised machine learning algorithm?",
    answers: [
      { text: "Naïve Bayes", correct: false },
      { text: "SVM for classification problems", correct: false },
      { text: "Decision tree", correct: false },
      { text: "K-means", correct: true },
    ],
  },
  {
    question: "What’s the key benefit of using deep learning for tasks like recognizing images?",
    answers: [
      { text: "They need less training data than other methods.", correct: false },
      { text: "They can learn complex details from the data on their own.", correct: true },
      { text: "They’re easier to explain and understand than other models.", correct: false },
      { text: "They work faster and are more efficient computationally.", correct: false },
    ],
  },
  {
    question: " Which algorithm is best suited for a binary classification problem?",
    answers: [
      { text: "Decision Trees", correct: true },
      { text: "K-nearest Neighbors", correct: false },
      { text: "Random Forest", correct: false },
      { text: " Linear Regression", correct: false },
    ],
  },
  {
    question: "What is the key difference between supervised and unsupervised learning?",
    answers: [
      { text: "Supervised learning predicts labels, while unsupervised learning discovers patterns. ", correct: false },
      { text: "Supervised learning requires labeled data, while unsupervised learning does not.", correct: true},
      { text: "Supervised learning is used for classification, while unsupervised learning is used for regression.", correct: false },
      { text: " Supervised learning is always more accurate than unsupervised learning.", correct: false},
    ],
  },
  {
    question: "Which type of machine learning algorithm falls under the category of “unsupervised learning”?",
    answers: [
      { text: "K-means Clustering", correct: true },
      { text: "Linear Regression", correct: false },
      { text: " Decision Trees", correct: false },
      { text: "Random Forest", correct: false },
    ],
  },
  {
    question: "  Which of the following statements is true about AdaBoost?",
    answers: [
      { text: "It is particularly prone to overfitting on noisy datasets", correct: false },
      { text: "Complexity of the weak learner is important in AdaBoost", correct: false },
      { text: "It improves classification accuracy", correct: false },
      { text: "It is generally more prone to overfitting", correct: true },
    ],
  },
  {
    question: "Which one of the following models is a generative model used in machine learning?",
    answers: [
      { text: "Naïve Bayes", correct: true },
      { text: "Support vector machines", correct: false },
      { text: "Logistic Regression", correct: false },
      { text: "Linear Regression", correct: false },
    ],
  },
  {
    question: "An artificially intelligent car decreases its speed based on its distance from the car in front of it. Which algorithm is used?",
    answers: [
      { text: "Naïve-Bayes", correct: false },
      { text: "Decision Tree", correct: false },
      { text: "Logistic Regression", correct: false },
      { text: "Linear Regression", correct: true },
    ],
  },
  {
    question: "Which of the following statements is false about Ensemble learning?",
    answers: [
      { text: " It is a supervised learning algorithm", correct: false },
      { text: " It is an unsupervised learning algorithm", correct: true },
      { text: " More random algorithms can be used to produce a stronger ensemble", correct: false },
      { text: "Ensembles can be shown to have more flexibility in the functions they can represent", correct: false },
    ],
  },
  {
    question: " Which of the following statements is true about stochastic gradient descent?",
    answers: [
      { text: "It is computationally very expensive, if the number of training examples is large", correct: false },
      { text: " It processes all the training examples for each iteration of gradient descent", correct: false },
      { text: "It is not preferred, if the number of training examples is large", correct: false },
      { text: "It processes one training example per iteration", correct: true },
    ],
  },
  {
    question: "Decision tree uses the inductive learning machine learning approach. ",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "What elements describe the Candidate-Elimination algorithm? ",
    answers: [
      { text: "depends on the dataset", correct: false },
      { text: "  just a set of candidate hypotheses", correct: false },
      { text: "just a set of instances", correct: false },
      { text: "set of instances, set of candidate hypotheses", correct: true },
    ],
  },
  {
    question: " Which of the following statements is not true about boosting?",
    answers: [
      { text: "It mainly increases the bias and the variance", correct: true },
      { text: " It tries to generate complementary base-learners by training the next learner on the mistakes of the previous learners", correct: false },
      { text: "It is a technique for solving two-class classification problems", correct: false },
      { text: "It uses the mechanism of increasing the weights of misclassified data in preceding classifiers", correct: false },
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
  