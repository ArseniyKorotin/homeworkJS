'use strict';
const formatString = function (string) {
    if(formatString.length > 40) {
        let shortstring = string.slice(0, 40);
        shortstring += '...'
        return shortstring;
    }
    return string
};
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

  console.log(formatString('Curabitur ligula sapien.'));

  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );