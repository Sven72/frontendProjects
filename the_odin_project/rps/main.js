let playerSelection = prompt("Enter you choice").toLocaleLowerCase();

let items = ["rock", "paper", "scissors"];

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  console.log(items[choice]);
}

function playRound(playerSelection, computerSelection) {}

const comupterSelection = computerPlay();

comupterSelection;
