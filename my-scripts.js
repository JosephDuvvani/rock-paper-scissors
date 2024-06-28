function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You lose! Paper beats Rock';
    } else if (humanChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You lose! Scissors beats Paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You lose! Rock beats Scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'Rock') {
        humanScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You Win! Paper beats Rock';
    } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        humanScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You Win! Rock beats Scissors';
    } else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
        humanScore++;
        scoreUpdate();
        if (gameOver()) state.textContent = `GAME OVER,  ${winner()}`;
        results.textContent = 'You Win! Scissors beats Paper';
    } else {
        scoreUpdate();
        results.textContent = 'It\'s A Tie!';
    }

}

const btn = document.querySelector('div');
const results = document.querySelector('.result');
const state = document.querySelector('.game-state');

btn.addEventListener('click', (e) => {
    let targ = e.target;

    if (gameOver() !== true) {
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
    }
});

let humanScore = 0;
let computerScore = 0;

function gameOver() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    } else return false;

}

const humanScoreBoard = document.querySelector('#human-score');
const compScoreBoard = document.querySelector('#comp-score');

function scoreUpdate() {
    humanScoreBoard.textContent = `Human: ${humanScore}`;
    compScoreBoard.textContent = `Computer: ${computerScore}`;
}

function winner() {
    if (humanScore > computerScore) {
        return 'WINNER: Human!!!';
    } else if (computerScore > humanScore) {
        return 'WINNER: Computer!!!'
    }
}

const startOver = document.querySelector('#restart-game');

startOver.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    scoreUpdate();
    results.textContent = '';
    state.textContent = '';
});

