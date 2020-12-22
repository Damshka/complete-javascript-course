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

// let player1TotalScore = 0;
// let player2TotalScore = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// let player2CurrentScore = 0;

// Starting conditions
player1Score.textContent = 0;
player2Score.textContent = 0;
dice.classList.add('hidden');

// Rolling dice 
btnRoll.addEventListener('click', function() {
    console.log('click');
    // 1. Geterating a random dice
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber)
    // 2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    // 3. Check if 1 ? new player : add to score 
    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
});