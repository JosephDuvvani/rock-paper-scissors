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

function getHumanChoice() {
    const humanChoice = prompt('Pick \'Rock\', \'Paper\', or \'Scissors\'');
    const choiceCase = humanChoice.toLowerCase();

    if (choiceCase === 'rock' ||
        choiceCase === 'paper' ||
        choiceCase === 'Scissors'
    ) {
        return choiceCase;
    } else {
        getHumanChoice();
    }
}