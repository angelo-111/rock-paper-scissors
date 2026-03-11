/* Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly 
return one of the following string values: 
“rock”, “paper” or “scissors”. */

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'rock';
    if (choice === 1) return 'paper';
    else return 'scissors';
}

/* Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one 
of the valid choices depending on what the user inputs. */

function getHumanChoice() {
    const humanInput = prompt("Please enter: rock, paper or scissors");
    return humanInput;
}

//Create 2 variables to store the result

let humanScore = 0;
let computerScore = 0;

/* 
1.Create a new function named playRound.
2.Define two parameters for playRound: humanChoice and computerChoice. 
3.Use these two parameters to take the human and computer choices as arguments.
4.Make your function’s humanChoice parameter case-insensitive
 so that players can input “rock”, “ROCK”, “RocK”, or other variations.
5. Write the code for your playRound function to console.log a string value representing the round winner, 
such as: “You lose! Paper beats Rock”.
6.Increment the humanScore or computerScore variable based on the round winner.
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice); {
        console.log(`Tie! Both picked ${humanChoice}`);
        return;
    }

    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper'))
        {
            console.log(`You win! ${humanChoice} beat ${computerChoice}`);
            humanScore ++
        }
    else {
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
        computerScore ++
    }

/* Create a new function named playGame.
Move your playRound function and score variables so 
that they’re declared inside of the new playGame function.
Play 5 rounds of the game, keeping track of the score 
and declaring a winner at the end. */

    for (let round = 1; round <= 5; round ++); {
        console.log(`\nRound ${round} ---`)

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`You choose: ${humanSelection}`);
        console.log(`Computer choose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Your result ${humanScore} Computer result ${computerScore}`);
    }

//Print out the final result

    console.log('Game Over!')
        if (humanScore > computerScore)
            {
            console.log('You won!');
            }
        else if (computerScore > humanScore)
            {
            console.log('You lost!');
            }
        else
            { 
            console.log('No winner! - Tie');
            }
}

playRound();