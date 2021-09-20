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

//Primary function.
function game() {

  // function that evaluates who wins
  function playRound(playerSelection, computerDecision) {
    let resultCheck
    //function that checks if the player win
    function isWin() {
      if (
        (playerSelection == "scissors" && computerDecision == "paper") ||
        (playerSelection == "rock" && computerDecision == "scissors") ||
        (playerSelection == "paper" && computerDecision == "rock")
      ) {
        resultCheck = "win";
      }
    }
    //function that checks if the player looses
    function isLoose() {
      if (
        (playerSelection == "paper" && computerDecision == "scissors") ||
        (playerSelection == "scissors" && computerDecision == "rock") ||
        (playerSelection == "rock" && computerDecision == "paper")
      ) {
        resultCheck = "loose";
      }
    }
    // function that checks if is a tie
    function isTie() {
      if (playerSelection == computerDecision) {
        resultCheck = "its tie";
      }
    }
  isWin()
  isLoose()
  isTie()
  return resultCheck
  }
  //function loops while the number N is higher than rounds
  function gameRound(n) {
    let rounds = 0;
    while (n > rounds) {
      // call computerPlay and playerPlay to give an input for playRound, and next return an string (tie, loose or win) for n times
      computerDecision = computerPlay();
      let result = playRound("rock", computerDecision);
      rounds++
      return result;
    }
  }
  return gameRound(3);
}
