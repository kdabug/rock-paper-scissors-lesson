const readlineSync = require("readline-sync");

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

function getWinningScore() {
  let name = getInput(
    "Hello! Welcome to Rock-Paper-Scissors. What is the winning score for your game?"
  );
  return name;
}

function greet(player) {
  let name = getInput(`Hello ${player}! What is your name?`);
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

function playRockPaperScissors() {
  let winningScore = getWinningScore();
  let playerOneName = greet("player one");
  let playerTwoName = greet("player two");
  let playerOneScore = 0;
  let playerTwoScore = 0;
  while (playerOneScore < winningScore || playerTwoScore < winningScore) {
    if (play(playerOneName, playerTwoName) === true) {
      playerOneScore++;
      console.log(`${playerOneName} wins`);
    } else {
      playerTwoScore++;
      console.log(`${playerTwoName} wins.`);
    }
    `The score is now ${playerOneName}-${playerOneScore} and ${playerTwoName}-${playerTwoScore}`;
  }
}
playRockPaperScissors();
