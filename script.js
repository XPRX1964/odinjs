function getcomputerSelection() {
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  let a = "";
  switch (randomnumber) {
    case 1:
      a = "rock";
      break;
    case 2:
      a = "paper";
      break;
    case 3:
      a = "scissors";
      break;
    default:
      result = "Invalid number generated";
  }
  return a;
}
function getplayerSelection() {
  test = true;
  while (test) {
    b = prompt("input your move");
    c = b.toLowerCase();
    if (c === "rock" || c === "paper" || c === "scissors") {
      break;
    }
  }
  return c;
}

function playRound(playerSelection, computerSelection) {
  console.log("Computer chose: " + computerSelection);
  console.log("Player chose: " + playerSelection);

  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player wins";
  } else {
    return "computer wins";
  }
}
for (i = 0; i < 5; i++) {
  const playerSelection = getplayerSelection();
  const computerSelection = getcomputerSelection();
  console.log(playRound(playerSelection, computerSelection));
}
