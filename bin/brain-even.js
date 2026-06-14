#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 100);

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;
let gameOver = false;

while (count < 3 && !gameOver) {
    const randomNum = getRandomNumber();
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        gameOver = true;
    } else {
        console.log('Correct!');
        count += 1;
    }
}
if (count === 3) {
    console.log(`Congratulations, ${name}!`);
}
