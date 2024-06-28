function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            console.log('Computer Plays: rock');
            return 'Rock';
        case 2:
            console.log('Computer Plays: Paper');
            return 'Paper';
        case 3:
            console.log('Computer Plays: Scissors');
            return 'Scissors';
    }
}

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

const btn = document.querySelector('div');

btn.addEventListener('click', (e) => {
    let targ = e.target;

    switch (targ.id) {
        case 'rock-btn':
            playRound('rock', getComputerChoice());
            break;
        case 'paper-btn':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors-btn':
            playRound('scissors', getComputerChoice());
            break;
    }
});



let humanScore = 0;
let computerScore = 0;
