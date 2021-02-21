'use strict';
const min_number = 55;
const max_number = 99;
const number = prompt("Введіть число від 55 до 99");
if(number >= min_number && number <= max_number){
    console.log('Число знаходиться в діапазоні');
}
else{
    console.log('Число не знаходиться в діапазоні');
}