const readlineSync = require("readline-sync");

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

function greet() {
  let name = getInput("Hello! What is your name?");
  console.log(`Welcome to HIGH-LOW, ${name}!`);
  return name;
}

function compare(playerOneInput, playerTwoInput) {
  if (playerOneInput === playerTwoInput) {
    console.log("You tied, play again");
    play(name1, name2);
  }
  if (playerOneInput === "r" && playerTwoInput === "s") {
    return true;
  } else if (playerOneInput === "p" && playerTwoInput === "r") {
    return true;
  } else if (playerOneInput === "s" && playerTwoInput === "p") {
    return true;
  } else return false;
}

function play(name1, name2) {
  let playerOneInput = getInput(
    `${name1} chose rock, paper, or scissors? (r/p/s)`
  );
  let playerTwoInput = getInput(
    `${name2} chose rock, paper, or scissors? (r/p/s)`
  );
  return compare(playerOneInput, playerTwoInput);
}

function playRockPaperScissors(winningScore) {
  let playerOneName = greet();
  let playerTwoName = greet();
  let playerOneScore = 0;
  let playerTwoScore = 0;

  while (playerOneScore < 5 || playerTwoScore < 5) {
    if (play() === true) {
      playerOneScore++;
      console.log(`${playerOneName} wins`);
    } else {
      playerTwoScore++;
      console.log(`${playerTwoName} wins.`);
    }
    `The score is now ${playerOneName}-${playerOneScore} and ${playerTwoName}-${playerTwoScore}`;
  }
}
playGame();
