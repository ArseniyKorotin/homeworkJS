'use strict';
let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введіть число');
    numbers.push(Number(input));
} while (input !== input);

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
}
console.log(`Загальна сума чисел дорівнює ${total}`);