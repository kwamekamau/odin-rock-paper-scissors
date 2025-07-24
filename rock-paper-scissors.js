// Create a function called getComputerChoice that
// randomly chooses a number value, and assigns it to a variable.
// divides the possible values into three equal ranges and
// returns a string value of "rock", "paper", or "scissors" depending on what
// range the number falls in.
function getComputerChoice() {
    let random = Math.random();

    if (random <= 1 / 3) {
        return "rock";
    }
    else if (random <= 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Create a function called getHumanChoice that
// prompts the user to input a string ("rock", "paper", or "scissors")
// and returns the string input by the user.
function getHumanChoice() {
    choice = prompt("What'll it be: rock, paper, or scissors?");
    return choice;
}

// Create a function, playRound, with two parameters humanChoice and
// computerChoice. Must be called from within the function playGame in order to
// access the variables humanScore and computerScore.
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {

    // To make humanChoice functionally case insensitive, convert to lowercase,
    humanChoice = humanChoice.toLowerCase();

    // then compare the two variables. If they are strictly equal,
        // log to console "Tie! Try again."
        // Call playRound.
    if (humanChoice === computerChoice) {
        console.log("Tie! Try again.");
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Or else, if humanChoice is "rock",
        // then if computer choice is "paper",
            // log to console "Sorry, loser. Paper wraps rock."
            // Increment computerScore.
        // Or else, 
            // log to console "Yes! Your rock smashes scissors."
            // Increment humanScore.
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

    // Or else, if humanChoice is "paper",
        // then if computer choice is "rock",
            // log to console "Yumtastic! Paper noms rock."
            // Increment humanScore.
        // Or else, 
            // log to console "Wah, wah. Scissors cut paper."
            // Increment computerScore.
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

    // Or else, if humanChoice is "scissors",
        // then if computer choice is "paper",
            // log to console "Sharp! Scissors cut paper."
            // Increment humanScore.
        // Or else, 
            // log to console "Ouch! This rock smashed your scissors."
            // Increment computerScore.
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

// Create a function, playGame, that plays five rounds, keeps score, and
// declares a winner.

    // Create a variable, humanScore, and initialize it to 0.

    // Create a variable, computerScore, and initialize it to 0.

    // Call playRound five times.

    // If computerScore is greater than humanScore,

        // log to console "Game over, puny human! I win! Mwah ha ha ha ha!"

    // or else,

        // log to console "Well, I guess you win. (This isn't over...)"

