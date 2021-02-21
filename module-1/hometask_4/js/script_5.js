'use strict';
let lang;
const subscription = 'fr';
switch (subscription) {
    case 'ua':
        lang = 'apple';
        break;

    case 'en':
        lang = 'car';
        break;

    case 'ru':
        lang = 'random';
        break;

    case 'fr':
        lang = 'janvier';
        break;

    default:
        console.log('Invalid subscription type');
}
console.log(lang);