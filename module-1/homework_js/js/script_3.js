'use strict';
let message = prompt("Кто там?", '');
if (message === 'Admin') {
  const ADMIN_PASSWORD = prompt('Введіть ваш пароль', '');
  if (ADMIN_PASSWORD == 'jqueryismyjam') {
    alert('Ласкаво просимо!');
  } else if (ADMIN_PASSWORD === '' || ADMIN_PASSWORD === null) {
    alert('Скасовано користувачем!');
  } else {
    alert('Доступ заборонений, невірний пароль!');
  }
} else if (message === '' || message === null) {
  alert('Скасовано користувачем!');
} else {
  alert('Я вас не знаю');
}