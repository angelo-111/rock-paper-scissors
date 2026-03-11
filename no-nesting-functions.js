/*  Create a new function named getComputerChoice.
    Write the code so that getComputerChoice will 
    randomly return one of the following string values: 
    “rock”, “paper” or “scissors”.
*/

function getComputerChoice() {
    const cChoice = Math.random();

    if (cChoice < 0.33) {
        return 'rock';
    } else if (cChoice < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }   
        
}   

/* Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return 
one of the valid choices depending on what the user inputs. 
Make your function’s humanChoice parameter case-insensitive */

function getHumanChoice() {
    const hChoice = prompt('Please enter your choice: rock, paper, or scissors');
    return hChoice.toLowerCase();
}

// Create two new variables named humanScore and computerScore 
// in the global scope. Initialize those variables with the value of 0.

let humanScore = 0
let computerScore = 0

/* 
1.Create a new function named playRound.
2.Define two parameters for playRound: humanChoice and computerChoice. 
Use these two parameters to take the human and computer choices as arguments.
so that players can input “rock”, “ROCK”, “RocK”, or other variations.
3.Write the code for your playRound function to console.log a string value 
representing the round winner, such as: “You lose! Paper beats Rock”.
4.Increment the humanScore or computerScore variable based on the round winner.
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both picked ${humanChoice}`);
        return;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    )   {
        humanScore ++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore ++
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
    }
}

/* Create a new function named playGame.
Move your playRound function and score variables 
so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times. */

function playGame() {
    for (let round = 1; round <= 3; round ++) {
        console.log(`\nRound ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`You choose: ${humanSelection}`); 
        console.log(`Computer choose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`You: ${humanScore} Computer: ${computerScore}`); 
    }

    //Present the final results after 3 rounds and declare the winner
    console.log('\nGame Over!');
    if(humanScore > computerScore) {
        console.log('You win the game!');
    }
    else if(computerScore > humanScore) {
        console.log('You loose the game!');
    } 
    else {
        console.log('No winner!');
    }
}

playGame();