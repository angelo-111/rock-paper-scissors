/*BEGIN playGame
    SET humanScore = 0
    SET computerScore = 0

    FOR round = 1 to 5
        DISPLAY "Round " + round
        CALL getHumanChoice → store in humanChoice
        CALL getComputerChoice → store in computerChoice
        CALL playRound(humanChoice, computerChoice)
        SHOW current scores (optional but helpful)
    END FOR

    IF humanScore > computerScore
        DISPLAY "You win the game!"
    ELSE IF computerScore > humanScore
        DISPLAY "You lose the game!"
    ELSE
        DISPLAY "It's a tie!"
    END IF

END playGame */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // We define the helper functions inside playGame (as requested)
    function getComputerChoice() {
        const choice = Math.floor(Math.random() * 3);
        if (choice === 0) return "rock";
        if (choice === 1) return "paper";
        return "scissors";
    }

    function getHumanChoice() {
        const input = prompt("Enter your choice: rock, paper or scissors");
        return input.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both picked ${humanChoice}`);
            return;
        }

        if (
            (humanChoice === "rock"     && computerChoice === "scissors") ||
            (humanChoice === "paper"    && computerChoice === "rock")     ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round} -------------------`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Score → You: ${humanScore}  |  Computer: ${computerScore}`);
    }

    // Final result
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! 😔");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();