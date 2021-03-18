'use strict';
// let key;
// let Case;
// const total = prompt("Enter two numbers");
// const getCalculator = function() {

// }

const calculator = {
	read: function (){
		this.f = +prompt('Enter first'); 
		this.s = +prompt('Enter second');},
	sum: function (){
		return	(this.f + this.s)},
	mul: function (){
		return (this.f * this.s)} 
}

calculator.read();
alert( calculator.sum());
alert( calculator.mul());