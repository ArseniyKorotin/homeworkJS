'use strict';
let message = ['Welcome to Ukraine'];
[message] = 'Welcome to Ukraine'.split(',');
console.log(message.split(''));
console.log(message.indexOf('l'));
[message] = "Welcome to Ukraine".split('  ');
console.log(message);
// 'W', 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'U', 'k', 'r', 'a', 'i', 'n','e'