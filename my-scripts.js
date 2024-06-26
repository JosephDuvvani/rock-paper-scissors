function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            /*console.log('Computer Plays: rock');*/
            return 'Rock';
        case 2:
            /*console.log('Computer Plays: Paper');*/
            return 'Paper';
        case 3:
            /*console.log('Computer Plays: Scissors');*/
            return 'Scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Pick \'Rock\', \'Paper\', or \'Scissors\'');
    const choiceCase = humanChoice.toLowerCase();

    if (choiceCase === 'rock' ||
        choiceCase === 'paper' ||
        choiceCase === 'Scissors'
    ) {
        /*console.log(`Human Plays: ${choiceCase}`);*/
        return choiceCase;
    } else {
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        console.log('You lose! Paper beats Rock');
    } else if (humanChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper');
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'Rock') {
        humanScore++;
        console.log('You Win! Paper beats Rock');
    } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        humanScore++;
        console.log('You Win! Rock beats Scissors');
    } else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
        humanScore++;
        console.log('You Win! Scissors beats Paper');
    } else {
        console.log('It\'s A Tie!')
    }

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);