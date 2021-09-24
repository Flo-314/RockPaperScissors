//const's vars of the document
const rockBtn = document.querySelector("#rockbutton");
const paperBtn = document.querySelector("#paperbutton");
const scissorBtn = document.querySelector("#scissorsbutton");
const playerS = document.querySelector(".playerS");
const machineS = document.querySelector(".machineS");
const body = document.querySelector("body");
// div for the stattus every "hand" (wiin/loose status)
const divStatus = document.createElement("div");
divStatus.classList.add("Status");
body.appendChild(divStatus);

// Execute the game(relative parameter for each id ) when click happen
rockBtn.addEventListener("click", () => {
  game("rock");
});
paperBtn.addEventListener("click", () => {
  game("paper");
});
scissorBtn.addEventListener("click", () => {
  game("scissors");
});
// animation when mouse is over
rockBtn.addEventListener("mouseover", putBorders);
rockBtn.addEventListener("mouseleave", leaveBorders);
scissorBtn.addEventListener("mouseover", putBorders);
scissorBtn.addEventListener("mouseleave", leaveBorders);
paperBtn.addEventListener("mouseover", putBorders);
paperBtn.addEventListener("mouseleave", leaveBorders);
//function that put "yellowborder" class when mouse is over
function putBorders() {
  this.classList.add("yellowborders");
}

function leaveBorders() {
  this.classList.remove("yellowborders");
}

// Randomly picking  rock paper or scissors for IA.
function computerPlay() {
  // random picker
  let computerDecision;
  let getRandom = Math.floor(Math.random() * 3) + 1;
  // converting the number into string
  if (getRandom == 1) {
    computerDecision = "rock";
  } else if (getRandom == 2) {
    computerDecision = "paper";
  } else {
    computerDecision = "scissors";
  }
  // returning the string
  return computerDecision;
}
//primary function
var computerScore = 0;
var playerScore = 0;
var resultCheck = "Result of the round ";
function game(playerSelection) {
  let computerSelection = computerPlay();
  // function that evaluates who wins
  function playRound(playerSelection, computerDecision) {
    //checks if the player win
    if (
      (playerSelection == "scissors" && computerDecision == "paper") ||
      (playerSelection == "rock" && computerDecision == "scissors") ||
      (playerSelection == "paper" && computerDecision == "rock")
    ) {
      resultCheck = "Result of the round:¡YOU WIN THIS ROUND!";
      playerScore++;
    }
    //checks if the player looses
    else if (
      (playerSelection == "paper" && computerDecision == "scissors") ||
      (playerSelection == "scissors" && computerDecision == "rock") ||
      (playerSelection == "rock" && computerDecision == "paper")
    ) {
      resultCheck = "Result of the round: U loose this round";
      computerScore++;
    }
    //checks if is a tie
    else if (playerSelection == computerDecision) {
      resultCheck = "Result of the round: Just a tie";
    }
  }
  //  while (computerScore < 5 || playerScore < 5 ) {
  //  let computerSelection = computerPlay();
  //let playerSelection = prompt()
  //playerSelection = playerSelection.toLowerCase()
  playRound(playerSelection, computerSelection);
  machineS.textContent = "Computer score:" + " " + +computerScore;
  playerS.textContent = "Player score:" + " " + +playerScore;
  divStatus.textContent = resultCheck;

  //}
}
