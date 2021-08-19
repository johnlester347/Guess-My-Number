'use strict';

const check = document.querySelector('.check');
const again = document.querySelector('.again');

let secret = Math.trunc(Math.random() * 20)+1;
let score = 20;


check.addEventListener('click', function(e) {

    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if(guess === secret) {
        document.querySelector('.message').textContent = 'Correct Number!!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        const secretNumber = document.querySelector('.number').textContent = secret;
        document.querySelector('.number').style.width = '30rem';
    } else if(guess > secret) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'To high!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost :(';
            document.querySelector('.score').textContent = 0;
        }
    } else if(guess < secret) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'To low!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost :(';
            document.querySelector('.score').textContent = 0;
        }
    }

});

again.addEventListener('click', function(e) {

    score = 20;
    document.querySelector('.score').textContent = score;
    secret = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
});
