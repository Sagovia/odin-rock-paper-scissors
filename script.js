/*
    IDEA:
    Add event handler to each button
    Then make it so that, whenever any of them are clicked, it will record the one clicked as the selection (use event delegation), and also play the round
    Then update the scoreboard within the playGame function (already done)
    Finally, check to see if anyone's won yet. If so, remove the event listeners


*/


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
/*
function getHumanChoice() {
    let choice = prompt("What is your choice?");
    return choice.toLowerCase();
}
*/


const optionsDiv = document.querySelector('.optionsDiv');
const messageDiv = document.querySelector(".messageDiv");
const playerScorePara = document.querySelector(".playerScorePara");
const computerScorePara = document.querySelector(".computerScorePara");

let humanScore = 0;
let computerScore = 0;


const clickEventHandler = (e) => {
    let target = e.target;

    let computerSelection = getComputerChoice();
    let humanSelection;

    switch(target.className) {
        case 'rockDiv':
            humanSelection = "rock";
            break;
        case 'paperDiv':
            humanSelection = "paper";
            break;
        case 'scissorsDiv':
            humanSelection = 'scissors';
            break;
    }

    playRound(humanSelection, computerSelection);


    // End the game if a player reaches 5
    if((humanScore >= 5) || (computerScore >= 5)) {
        if(humanScore > computerScore) {
            messageDiv.textContent = "Congrats, you won the game!";
        }
        else if(humanScore < computerScore) {
            messageDiv.textContent = "Sorry, you lost the game.";
        }
        else {
            // I don't think this outcome is possible with the current modified version
            messageDiv.textContent = "The game was a tie overall!";
        }

        optionsDiv.removeEventListener("click", clickEventHandler);
    }
}

optionsDiv.addEventListener("click", clickEventHandler)




function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        messageDiv.textContent = `Tie! Try again.`;
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
        humanScore++;
        messageDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        playerScorePara.textContent = `You: ${humanScore} pts`;
    }
    else {
        computerScore++;
        messageDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScorePara.textContent = `Computer: ${computerScore} pts`;
    }
}



 



