// Randomly picking  rock paper or scissors for IA.
function computerPlay() {
  let computerDecision;
  let getRandom = Math.floor(Math.random() * 3) + 1;
  if (getRandom == 1) {
    computerDecision = "rock";
  } else if (getRandom == 2) {
    computerDecision = "paper";
  } else {
    computerDecision = "scissors";
  }

  return computerDecision;
}

//Primary function.
function Game() {
  // a SUB-function that plays a single round of Rock Paper Scissors.
  // The function should take two parameters - the playerSelection and computerSelection
  // and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  computerPlay()
  function playRound() {
  }
}

