function playGame() {
    // Declare score variables inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's random choice
    function getComputerChoice() {
        const random = Math.random();
        if (random < 1 / 3) {
            return "rock";
        } else if (random < 2 / 3) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Function to get human's choice via prompt
    function getHumanChoice() {
        return prompt("Enter rock, paper, or scissors:");
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();

        // Check for tie
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }

        // Determine winner
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare overall winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Call playGame to start the game
playGame();


