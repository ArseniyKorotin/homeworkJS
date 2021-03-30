'use strict';
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('число непарне: ', i); // 1, 3, 5, 7, 9
}

for (let i = 2; i < number; i++) {
    if (i % 2 == 0) {
      console.log('Число парне: ', i);
    }
  }