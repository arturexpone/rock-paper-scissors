const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', (e) => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function (e) {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                console.log(computerChoise)
            })
        })

    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if (playerChoice === computerChoice) {
            winner.textContent = 'Ничья! :)';
            return;
        }

        if (playerChoice === 'rock') {
            computerChoice === 'scissors' ? winner.textContent = 'Пользователь выиграл!' : null;
            return;
        } else {
            winner.textContent = 'Компьютер выиграл!'
            return;
        }
    }

    startGame();
    playMatch();
}

game();