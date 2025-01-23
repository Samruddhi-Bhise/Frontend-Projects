const questions = [
    {
      question: "Which is the largest animal in the world?",
      options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
      answer: "Blue whale",
    },
    {
      question: "What is the capital of France?",
      options: ["Rome", "Madrid", "Paris", "Berlin"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
      answer: "William Shakespeare",
    },
    {
      question: "Which is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      answer: "2",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = selectOption;
      optionsEl.appendChild(button);
    });
  }
  
  function selectOption(event) {
    const selectedButton = event.target;
    const currentQuestion = questions[currentQuestionIndex];
  
    // Remove 'selected' class from other buttons
    Array.from(optionsEl.children).forEach((button) => {
      button.classList.remove("selected");
    });
  
    selectedButton.classList.add("selected");
    nextBtn.disabled = false;
  
    if (selectedButton.textContent === currentQuestion.answer) {
      score++;
    }
  }
  
  function showScore() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    scoreContainer.style.display = "block";
    scoreContainer.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextBtn.disabled = true;
    } else {
      showScore();
    }
  });
  
  // Initialize the quiz
  loadQuestion();
  
