// getComputerChoice() uses Math.random() and some simple arithmetic to
// generate a 1-in-3 chance of selecting either rock, paper, or scissors.
function getComputerChoice() {
    let random = Math.random();

    if (random < 1 / 3) {
        return "rock";
    }
    else if (random < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("What'll it be: rock, paper, or scissors?");
    return choice;
}

// playGame() performs five rounds of rock, paper, scissors in the console,
// pitting a user against the computer and announcing the winner at the end.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Tie! Try again.");
            playRound(getHumanChoice(), getComputerChoice());
        }
        else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Sorry, loser. Paper wraps rock.");
                computerScore++;
            }
            else {
                console.log("Yes! Your rock smashes scissors.");
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("Yumtastic! Paper noms rock.");
                humanScore++;
            }
            else {
                console.log("Wah, wah. Scissors cut paper.");
                computerScore++;
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("Sharp! Scissors cut paper.");
                humanScore++;
            }
            else {
                console.log("Ouch! This rock smashed your scissors.");
                computerScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (computerScore > humanScore) {
        console.log("Game over, puny human! I win! Mwah ha ha ha ha!");
    }
    else {
        console.log("Well, I guess you win. (This isn't over...)");
    }
}