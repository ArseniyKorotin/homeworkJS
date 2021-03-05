'use strict';
const country = prompt('Введите вашу страну');
let credits;
const names = country.toLowerCase();
switch (names) {
    case 'китай':
    credits = 100;
    break;

    case 'чили':
    credits = 250;
    break;

    case 'австралия':
    credits = 170;
    break;

    case 'индия':
    credits = 80;
    break;

    case 'ямайка':
    credits = 120;
    break;

    default: 
    alert('У вашій країні доставка недоступна');
}
console.log(`Доставка в ${names} буде коштувати ${credits} кредитів`);