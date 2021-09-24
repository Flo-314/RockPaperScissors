// comptuer score
//var player score

//const's vars of the document
const rockBtn = document.querySelector("#rockbutton");
const paperBtn = document.querySelector("#paperbutton");
const scissorBtn = document.querySelector("#scissorsbutton");
const playerS = document.querySelector(".playerS");
const machineS = document.querySelector(".machineS");
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
// TESTEEEEEEEO

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
function game(playerSelection) {
  let computerSelection = computerPlay();
  // function that evaluates who wins
  function playRound(playerSelection, computerDecision) {
    let resultCheck;
    //checks if the player win
    if (
      (playerSelection == "scissors" && computerDecision == "paper") ||
      (playerSelection == "rock" && computerDecision == "scissors") ||
      (playerSelection == "paper" && computerDecision == "rock")
    ) {
      resultCheck = "win";
      playerScore++;
    }
    //checks if the player looses
    else if (
      (playerSelection == "paper" && computerDecision == "scissors") ||
      (playerSelection == "scissors" && computerDecision == "rock") ||
      (playerSelection == "rock" && computerDecision == "paper")
    ) {
      resultCheck = "loose";
      computerScore++;
    }
    //checks if is a tie
    else if (playerSelection == computerDecision) {
      resultCheck = "its tie";
    }

    return resultCheck;
  }
  //  while (computerScore < 5 || playerScore < 5 ) {
  //  let computerSelection = computerPlay();
  //let playerSelection = prompt()
  //playerSelection = playerSelection.toLowerCase()
  playRound(playerSelection, computerSelection);
  machineS.textContent = "Computer score:" + " " + +computerScore;
  playerS.textContent = "Player score:" + " " + +playerScore;
  //}
}
