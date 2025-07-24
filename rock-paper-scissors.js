console.log("works");

// Create a function called getComputerChoice that
function getComputerChoice() {

    // randomly chooses a number value, and assigns it to a variable.
    let random = Math.random();

    // divides the possible values into three equal ranges and
    if (random <= 1 / 3) {
        return "rock";
    }

    else if (random <= 2 / 3) {
        return "paper";
    }

    else {
        return "scissors";
    }

    // returns a string value of "rock", "paper", or "scissors" depending on what
    // range the number falls in.
}

// Create a function called getHumanChoice that

    // prompts the user to input a string ("rock", "paper", or "scissors")

    // and returns the string input by the user.

// Create a function, playRound, with two parameters humanChoice and
// computerChoice. Must be called from within the function playGame in order to
// access the variables humanScore and computerScore.

    // To make humanChoice functionally case insensitive, convert it to lowercase,

    // then compare the two variables. If they are strictly equal,

        // log to console "Tie! Try again."

        // Call playRound.

    // Or else, if humanChoice is "rock",

        // then if computer choice is "paper",

            // log to console "Sorry, loser, paper wraps rock."

            // Increment computerScore.

        // Or else, 

            // log to console "Yes! Your rock smashes scissors."

            // Increment humanScore.

    // Or else, if humanChoice is "paper",

        // then if computer choice is "rock",

            // log to console "Yumtastic! Paper noms rock."

            // Increment humanScore.

        // Or else, 

            // log to console "Wah, wah. Scissors cut paper."

            // Increment computerScore.

    // Or else, if humanChoice is "scissors",

        // then if computer choice is "paper",

            // log to console "Sharp! Scissors cut paper."

            // Increment humanScore.

        // Or else, 

            // log to console "Ouch! This rock smashed your scissors."

            // Increment computerScore.

// Create a function, playGame, that plays five rounds, keeps score, and
// declares a winner.

    // Create a variable, humanScore, and initialize it to 0.

    // Create a variable, computerScore, and initialize it to 0.

    // Call playRound five times.

    // If computerScore is greater than humanScore,

        // log to console "Game over, puny human! I win! Mwah ha ha ha ha!"

    // or else,

        // log to console "Well, I guess you win. (This isn't over...)"

