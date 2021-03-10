'use strict';
const myAverageScore = function (array) {
    let total = 0;
    for (const number of array) {
        // console.log(number);
        total += number
    }
    // console.log(total);
    const score = total / array.length;
    console.log(score);
    if (score >= 91 && score <= 100) {
        return 'Myaveragescore: A'
    }
    if (score >= 81 && score <= 90) {
        return 'Myaveragescore: B'
    }
    if (score >= 71 && score <= 80) {
        return 'Myaveragescore: C'
    }
    if (score <= 70) {
        return 'Myaveragescore: D'
    }
}
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));