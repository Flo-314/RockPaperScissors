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

function game() {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  let computerScore = 0;
  let playerScore = 0;

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
  while (computerScore < 5 || playerScore < 5) {
    computerScore = 5;
    console.log(playRound(playerSelection, computerSelection));
  }
}
