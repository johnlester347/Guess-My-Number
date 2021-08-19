'use strict';

/*
--------------- OLD CODE --------------------------

// const check = document.querySelector('.check');
// const again = document.querySelector('.again');

// let secret = Math.trunc(Math.random() * 20)+1;
// let score = 20;
// let highScore = 0;

// check.addEventListener('click', function(e) {

//     const guess = Number(document.querySelector('.guess').value);

//     if(!guess) {
//         document.querySelector('.message').textContent = 'No number';
//     } else if(guess === secret) {
//         document.querySelector('.message').textContent = 'Correct Number!!!';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         const secretNumber = document.querySelector('.number').textContent = secret;
//         document.querySelector('.number').style.width = '30rem';

//         if(score > highScore) {
//             highScore = score;
//             document.querySelector('.highscore').textContent = highScore;
//         }
//     } else if(guess > secret) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = 'To high!!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost :(';
//             document.querySelector('.score').textContent = 0;
//         }
//     } else if(guess < secret) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = 'To low!!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost :(';
//             document.querySelector('.score').textContent = 0;
//         }
//     }

// });

// again.addEventListener('click', function(e) {

//     score = 20;
//     document.querySelector('.score').textContent = score;
//     secret = Math.trunc(Math.random() * 20)+1;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.guess').value = '';
//     // document.querySelector('.highscore').textContent = 0;
// });

--------------- OLD CODE --------------------------
*/

const check = document.querySelector('.check');
const again = document.querySelector('.again');

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let message = document.querySelector('.message');
let oldscore = document.querySelector('.score');
let number = document.querySelector('.number');
let oldHighScore = document.querySelector('.highscore');
let secretNumber;

const displayMessage = function (m) {
  message.textContent = m;
};

check.addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!!');
  } else if (guess === secret) {
    displayMessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    secretNumber = number.textContent = secret;
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      oldHighScore.textContent = highScore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      //   message.textContent = guess > secret ? 'To high!!' : 'To low!!';
      displayMessage(guess > secret ? 'To high!!' : 'To low!!');

      score--;
      oldscore.textContent = score;
    } else {
      displayMessage('You lost :(');
      oldscore.textContent = 0;
    }
  }

  /*
  -------------------- REFACTORING -----------------------
  //   else if (guess > secret) {
  //     if (score > 1) {
  //       message.textContent = 'To high!!';
  //       score--;
  //       oldscore.textContent = score;
  //     } else {
  //       message.textContent = 'You lost :(';
  //       oldscore.textContent = 0;
  //     }
  //   } else if (guess < secret) {
  //     if (score > 1) {
  //       message.textContent = 'To low!!';
  //       score--;
  //       oldscore.textContent = score;
  //     } else {
  //       message.textContent = 'You lost :(';
  //       oldscore.textContent = 0;
  //     }
  //   }
  -------------------- REFACTORING -----------------------
  */
});

again.addEventListener('click', function (e) {
  score = 20;
  oldscore.textContent = score;
  secret = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  // document.querySelector('.highscore').textContent = 0;
});
