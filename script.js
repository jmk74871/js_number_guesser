let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => Math.floor(Math.random() * 10);

getDelta = (val1, val2) =>  Math.abs(val1 - val2);

compareGuesses = function (humanGuess, compGuess, secretTarget) {
    if(humanGuess <= 0 || 10 <= humanGuess){
        alert('You lost bacause of a invalid guess... =( \n\nYour guess must be in range 0 to 9!');
        return false;
    }
    return getDelta(humanGuess, secretTarget) <= getDelta(compGuess, secretTarget);
};

updateScore = (winner) => winner === 'human' ? humanScore++ : computerScore++;

advanceRound = () => currentRoundNumber++;
