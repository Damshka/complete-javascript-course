'use strict';

// Selecting elements
const player1Score = document.querySelector('#score--0');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');
const player2Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // Starting conditions
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    dice.classList.add('hidden');

    player1CurrentScore.textContent = 0;
    player2CurrentScore.textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
};

init();

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

// Rolling dice 
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Geterating a random dice
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNumber}.png`;
        // 3. Check if 1 ? new player : add to score 
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
    
});

btnHold.addEventListener('click', function(){
    if (playing) {
        // 1. add current score to active players score
        scores[activePlayer] +=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. check if score >= 100
        if(scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');
        }
        // Finish the game
        else {
            switchPlayer();
        }
    // Switch to the next player
    }
});

btnNew.addEventListener('click', function(){
    if (!playing) {
        init();
    }
});