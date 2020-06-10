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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function (e) {
                this.style.animation = '';
            })
        })

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function (e) {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];

                compareHands(this.className, computerChoise);

                playerHand.src = `./assets/${this.className}.png`;
                computerHand.src = `./assets/${computerChoise}.png`;

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';

            })
        })

    }

    const updateScore = () => {
        const pScore = document.querySelector('.player-score p');
        const cScore = document.querySelector('.computer-score p');
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;

    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Пользователь выиграл!'
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Компьютер выиграл!'
            } else if (computerChoice === 'rock') {
                winner.textContent = 'Ничья :('
            }
        }

        if (playerChoice === 'scissors') {
             if (computerChoice === 'rock') {
                 winner.textContent = 'Компьютер выиграл!';
             } else if (computerChoice === 'paper') {
                 winner.textContent = 'Пользователь выиграл!';
             } else if (computerChoice === 'scissors') {
                 winner.textContent = 'Ничья :('
             }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Пользователь выиграл!';
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Ничья :('
            } else if (computerChoice === 'scissors') {
                winner.textContent = 'Компьютер выиграл!';
            }
        }

        if (winner.textContent === 'Пользователь выиграл!') {
            playerScore++;
        } else if (winner.textContent === 'Компьютер выиграл!') {
            computerScore++;
        }

        updateScore();
    }

    startGame();
    playMatch();
}

game();