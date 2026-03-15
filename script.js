let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

/* Generate Computer Choice */
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

/* Draw Game */
const drawGame = () => {
  msg.innerText = "🤝 Game was Draw. Play again!";
  msg.style.backgroundColor = "#34495e";
};

/* Show Winner */
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `🎉 You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#27ae60";

  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `😢 You lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#e74c3c";
  }
};

/* Main Game Logic */
const playGame = (userChoice) => {

  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {

    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } 
    else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

/* Click Event */
choices.forEach((choice) => {

  choice.addEventListener("click", () => {

    /* small animation */
    choice.style.transform = "scale(1.2)";
    setTimeout(() => {
      choice.style.transform = "scale(1)";
    }, 200);

    const userChoice = choice.getAttribute("id");

    playGame(userChoice);

  });

});