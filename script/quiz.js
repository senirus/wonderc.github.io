// Watched a tutorial on creating Quiz App using html css an js to get a broad idea https://youtu.be/PBcqGxrr9g8, https://youtu.be/f4fB9Xg2JEY
// Read and referred codes related to this on https://medium.com/

// Start Section
let proceedBtn = document.querySelector("#proceed_btn");

// Guide Container
let guide = document.querySelector("#guide_container");
let exit = document.querySelector("#exit_btn");
let continueBtn = document.querySelector("#continue_btn");

// Quiz Section
let quizContainer = document.querySelector("#quiz_container");
let timeLeft = document.querySelector("#time_left");

// Questions
let questionNo = document.querySelector("#question_no");
let questionContent = document.querySelector("#question_content");

// Choice Options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

// Correct answer count and Next Button
let exitSkipBtn = document.querySelector("#exit_skip_btn");
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

// Results Container
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quitBtn = document.querySelector("#quitBtn");
let restart = document.querySelector("#restart");

// Answer choices
let choice = document.querySelectorAll(".choice");

let index = 0;
let interval;

//marks
let correct = 0;

//Answer Index
let answerIdx = undefined;

// Countdown
let timer = 60;
let countDown = () => {
  if (timer === 0) {
    clearInterval(interval); // clear the interval
    quizContainer.style.display = "none"; // hide the quiz section
    correctly_answered.innerHTML = `You got ${correct} out of ${questionsSet.length} questions correct`;
    wrongly_answered.innerHTML = ` and ${
      questionsSet.length - correct
    } questions incorrect.`;
    time_spent.innerHTML = `You completed the quiz within ${
      60 - timer
    } seconds.`;
    result.style.display = "block";
  } else {
    timer--;
    timeLeft.innerText =
      Math.floor(timer / 60) + ":" + ("0" + (timer % 60)).slice(-2);
  }
};

// Action when Proceed Button is clicked
proceedBtn.addEventListener("click", () => {
  proceedBtn.style.display = "none";
  guide.style.display = "block";
});

// Action when Exit button is clicked
exit.addEventListener("click", () => {
  proceedBtn.style.display = "block";
  guide.style.display = "none";
});

// Action when Exit button (button through the quiz) is clicked
exitSkipBtn.addEventListener("click", () => {
  location.reload();
});

let loadData = () => {
  questionNo.innerText = index + 1 + ". ";
  questionContent.innerText = questionsSet[index].question;
  option1.innerText = questionsSet[index].option1;
  option2.innerText = questionsSet[index].option2;
  option3.innerText = questionsSet[index].option3;
  option4.innerText = questionsSet[index].option4;
};

// Action when Continue button is clicked
continueBtn.addEventListener("click", () => {
  quizContainer.style.display = "block";
  guide.style.display = "none";

  // load questions
  loadData();

  timer = 60;
  interval = setInterval(countDown, 1000);

  total_correct.innerHTML = `${(correct = 0)} Out Of ${
    questionsSet.length
  } Questions`;
});

let correctChoice;
choice.forEach((choices, choiceNo) => {
  if (choiceNo === questionsSet[index].rightAnswerIndex) {
    correctChoice = choices;
  }

  choices.addEventListener("click", () => {
    choices.classList.add("active");
    if (choiceNo === questionsSet[index].rightAnswerIndex) {
      correct++;
      choices.classList.add("correct");
    } else {
      correctChoice.classList.add("correct");
      choices.classList.add("incorrect");
    }

    // Disabling rest of the answer options when an answer is already selected
    for (i = 0; i <= 3; i++) {
      choice[i].classList.add("disabled");
    }
  });
});

// Action when Next button (through the quiz) is clicked
next_question.addEventListener("click", () => {
  if (index !== questionsSet.length - 1) {
    index++;
    choice.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    // load questions
    loadData();

    // results
    total_correct.style.display = "block";
    total_correct.innerHTML = `${correct} Out Of ${questionsSet.length} Questions`;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  } else {
    index = 0;

    clearInterval(interval);
    quizContainer.style.display = "none";

    correctly_answered.innerHTML = `You got ${correct} out of ${questionsSet.length} questions correct`;
    wrongly_answered.innerHTML = ` and ${
      questionsSet.length - correct
    } questions incorrect.`;
    time_spent.innerHTML = `You completed the quiz within ${
      60 - timer
    } seconds.`;
    result.style.display = "block";
  }
  for (i = 0; i <= 3; i++) {
    choice[i].classList.remove("disabled");
  }
});

// Action when Quit button is clicked
quitBtn.addEventListener("click", () => {
  proceedBtn.style.display = "block";
  result.style.display = "none";
});

// Action when Restart button is clicked
restart.addEventListener("click", () => {
  guide.style.display = "block";
  result.style.display = "none";

  timer = 60;
  interval = setInterval(countDown, 1000);
  loadData();
});
