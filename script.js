document.addEventListener("DOMContentLoaded", function () {
  let displayedPlayerScore = document.getElementById("playerscore");
  let playerscore = parseInt(displayedPlayerScore.textContent);
  let displayedComputerScore = document.getElementById("computerscore");
  let computerscore = parseInt(displayedComputerScore.textContent);
  let showResult;
  let continueGame = true;
  function getComputerSelection() {
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
        a = "Invalid number generated";
    }
    return a;
  }
  function showScore(result, showResult) {
    console.log("Result:", result);
    console.log("Player Score:", playerscore);
    console.log("Computer Score:", computerscore);

    if (result === "player wins") {
      playerscore++;
      displayedPlayerScore.textContent = playerscore.toString();
    } else if (result === "computer wins") {
      computerscore++;
      displayedComputerScore.textContent = computerscore.toString();
    }

    console.log("Player Score After Update:", playerscore);
    console.log("Computer Score After Update:", computerscore);

    setTimeout(() => {
      if (playerscore === 5) {
        continueGame = false;
        showResult.textContent = "CONGRATULATIONS ! You Won !";
        if (confirm("Congratulations! You Won! Do you want to play again?")) {
          location.reload();
        }
      } else if (computerscore === 5) {
        continueGame = false;
        showResult.textContent = "Game Over ! You lose !";
        if (confirm("Game Over ! You lose ! Do you want to play again?")) {
          location.reload();
        }
      }
    }, 100);
  }

  function playRound(playerChoice, computerSelection) {
    if (!continueGame) return;
    let result;
    if (playerChoice === computerSelection) {
      result = "draw";
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "paper" && computerSelection === "rock") ||
      (playerChoice === "scissors" && computerSelection === "paper")
    ) {
      result = "player wins";
    } else {
      result = "computer wins";
    }
    const existingResult = document.getElementById("result");
    if (existingResult) {
      existingResult.remove();
    }
    showResult = document.createElement("div");

    showResult.id = "result";
    showResult.textContent = result;
    showResult.style.justifyContent = "center";
    showResult.style.alignContent = "center";
    showResult.style.background = "brown";
    showResult.style.height = "100%";
    showResult.style.display = "flex";
    showResult.style.flex = " 1";
    showResult.style.fontSize = "100px";
    showResult.style.padding = "100px";
    playAndResult.appendChild(showResult);
    showScore(result, showResult);

    return result;
  }

  const imgrock = document.getElementById("rock");
  const imgpaper = document.getElementById("paper");
  const imgscissors = document.getElementById("scissors");
  const playimg = document.getElementById("playround");
  const playAndResult = document.querySelector(".playandresult");

  imgrock.addEventListener("click", () => {
    if (continueGame) {
      playerChoice = "rock";
      const existingResult = document.getElementById("result");
      if (existingResult) {
        existingResult.remove();
      }
    }
  });
  imgpaper.addEventListener("click", () => {
    if (continueGame) {
      playerChoice = "paper";
      const existingResult = document.getElementById("result");
      if (existingResult) {
        existingResult.remove();
      }
    }
  });
  imgscissors.addEventListener("click", () => {
    if (continueGame) {
      playerChoice = "scissors";
      const existingResult = document.getElementById("result");
      if (existingResult) {
        existingResult.remove();
      }
    }
  });

  playimg.addEventListener("click", () => {
    const computerSelection = getComputerSelection();
    playRound(playerChoice, computerSelection);
  });
});
