
let computerChoice = ""
let playerChoice = ""
let playerRoundsWon = 0
let computerRoundsWon = 0
const message = document.querySelector("#message");
const options = document.querySelectorAll("img");
const contentContainer = document.querySelector(".content-container");
const playAgain = document.createElement("button");

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

function updateScore() {
    const computer = document.querySelector("#computerScore");
    const player = document.querySelector("#playerScore");

    computer.textContent = computerRoundsWon;
    player.textContent = playerRoundsWon;

    if (computerRoundsWon == 5 || playerRoundsWon ==5) {
        if (computerRoundsWon == 5) {
            message.textContent = `Computer wins ${computerRoundsWon} rounds to ${playerRoundsWon}`;
        } else {
            message.textContent = `Player wins ${playerRoundsWon} rounds to ${computerRoundsWon}`;
        }
        gameOver();
    }
}

function gameOver() {
    console.log(options)
    options.forEach(option => {option.removeEventListener("click", playRound)});
    options.forEach(option => {option.removeEventListener("mouseenter", optionHover)});
    options.forEach(option => {option.classList.remove("optionHover")});
    options.forEach(option => {option.removeEventListener("mouseleave", removeOptionHover)});
    playAgain.textContent = "Play again";
    contentContainer.appendChild(playAgain);
    playAgain.addEventListener("click", resetGame);
}

function playRound() {
    let outcome = ""
    computerChoice = getComputerChoice()
    playerChoice = this.id
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
    console.log(outcome);
    message.textContent = outcome
    updateScore();
}

function optionHover() {
    this.classList.add("optionHover");
}

function removeOptionHover() {
    this.classList.remove("optionHover");
}

function resetGame() {
    console.log("Reset");
    playerRoundsWon = 0;
    computerRoundsWon = 0;
    message.textContent = "";
    contentContainer.removeChild(contentContainer.lastChild);

    updateScore();
    
    options.forEach(option => {option.addEventListener("click", playRound)
    });
    options.forEach(option => {option.addEventListener("mouseenter", optionHover)
    });
    options.forEach(option => {option.addEventListener("mouseleave", removeOptionHover)
    });
}

resetGame()

