
let computerChoice = ""
let playerChoice = ""
let playerRoundsWon = 0
let computerRoundsWon = 0


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

function playRound(computerChoice, playerChoice) {
    let outcome = ""
    if (computerChoice === playerChoice) {
        outcome = `${playerChoice} vs ${computerChoice} a Tie!`
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || 
            (playerChoice === "paper" && computerChoice === "rock") || 
            (playerChoice === "scissors" && computerChoice === "paper")) {
        outcome = `${playerChoice} beats ${computerChoice}, player wins!`
        playerRoundsWon ++
    }
    else {
        outcome = `${playerChoice} loses to ${computerChoice}, computer wins!`
        computerRoundsWon ++
    }
    return outcome;
}

function game() {
    computerChoice = getComputerChoice();
    playerChoice = this.id //getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
    
    if (playerRoundsWon > computerRoundsWon) {
        return "Player Wins"
    }
    else {
        return "Computer Wins"
    }
}

const options = document.querySelectorAll("img");

options.forEach(option => {option.addEventListener("click", game)
    console.log("box clicked", option.id);
    option.setAttribute("style", "border: 1px solid red");

});


console.log(options);
