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

console.log(getHumanChoice());
