let roundCounter = document.getElementById("round-counter");
let human = document.getElementById("human");
let computer = document.getElementById("computer");

let items = ["rock", "paper", "scissors"];
let roundsPlayed = 0;
let humScore = 0;
let computerScore = 0;

let allScore = document.createElement("h1");
document.body.appendChild(allScore);
allScore.innerText = "Human wins";

// debugger;
function computerPlay() {
  let playerSelection = prompt("Enter you choice").toLocaleLowerCase();
  let choice = Math.floor(Math.random() * 3);
  playRound(playerSelection, items[choice]);
}

function playRound(playerSelection, computerSelection) {
  if (roundsPlayed <= 5) {
    roundsPlayed++;
    roundCounter.innerText = roundsPlayed;
    console.log(playerSelection, computerSelection);
    if (playerSelection == computerSelection) {
      console.log("Tie");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      humScore++;
      human.innerText = humScore;
      console.log("Player wins");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      humScore++;
      human.innerText = humScore;
      console.log("Player wins");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      humScore++;
      human.innerText = humScore;
      console.log("Player wins");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      computer.innerText = computerScore;
      console.log("Computer wins");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      computer.innerText = computerScore;
      console.log("Computer wins");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      computer.innerText = computerScore;
      console.log("Computer wins");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      computerScore++;
      computer.innerText = computerScore;
      console.log("Computer wins");
    }
    computerPlay();
  } else {
    console.log("Game over");
  }
}
computerPlay();
