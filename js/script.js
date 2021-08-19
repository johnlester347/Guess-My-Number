'use strict';

const btn = document.querySelector('.check');

let secret = Math.trunc(Math.random() * 20)+1;
const secretNumber = document.querySelector('.number').textContent = secret;
let score = 20;

btn.addEventListener('click', function(e) {

    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if(guess === secret) {
        document.querySelector('.message').textContent = 'Correct Number!!!';
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
