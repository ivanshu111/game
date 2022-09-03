'use strict';
let secretnumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  console.log(input);

  // when no input
  if (!input) {
    document.querySelector('.message').textContent = 'No number';

    // when user wins
  } else if (input === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.message').textContent = 'wohoo! correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.borderRadius = '100%';
    score += 2;
    document.querySelector('.score').textContent = score;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    //when input is higher
  } else if (input > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = score;
    }
    // when input is smaller
  } else if (input < secretnumber) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
