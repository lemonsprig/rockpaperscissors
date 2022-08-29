
let computerChoice = ""
let playerChoice = ""
let playerRoundsWon = 0


function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    if (num === 1) {
        return "rock";
    }
    else if (num === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = ""
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice =  prompt("Please make your choice").toLowerCase();
    return choice;
    }
}

function playRound(computerChoice, playerChoice) {
    let outcome = ""
    if (computerChoice === playerChoice) {
        outcome = `${playerChoice} vs ${computerChoice} a Tie!`
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        outcome = `${playerChoice} beats ${computerChoice}, player wins!`
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        outcome = `${playerChoice} beats ${computerChoice}, player wins!`
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        outcome = `${playerChoice} beats ${computerChoice}, player wins!`
    }
    else {
        outcome = `${playerChoice} loses to ${computerChoice}, computer wins!`
    }
    return outcome;
}

computerChoice = getComputerChoice();
playerChoice = getPlayerChoice();
console.log(computerChoice);
console.log(playerChoice);
console.log(playRound(computerChoice, playerChoice));
