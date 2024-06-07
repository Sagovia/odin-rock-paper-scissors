function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    switch(randomNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Tie! Try again.")
        return;
    }
    let humanWon = false;

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "scissors":
                    humanWon = true;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    humanWon = true;
                    break;
            }
            break;
        case "scissors": 
            switch(computerChoice) {
                case "paper": 
                    humanWon = true;
                    break;
            break;
        }
    }

    if(humanWon) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
