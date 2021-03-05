'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = prompt('Скільки дроїдів бажаєте купити?');
if(Number(totalPrice) * pricePerDroid >= credits) {
    alert('Недостатньо коштів на рахунку!');
} else if(totalPrice === null){
    alert('Скасовано користувачем!');
}  else if(Number(totalPrice) * pricePerDroid <= credits) {
    alert(`Ви купили ${totalPrice} дроїдів, на рахунку залишилося ${credits - Number(totalPrice) * pricePerDroid} кредитів.`);
}