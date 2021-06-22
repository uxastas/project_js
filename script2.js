// 10. Условия
"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error'); // компактаня запись условия (при помощи тернарного оператора)

const num = 50;
switch (num) {
    case 49:
        console.log('Неверно');
        break; // обязательно
    case 100:
        console.log('Неверно');
        break; // обязательно
    case 50:
        console.log('В точку!');
        break; // обязательно
    default: 
        console.log('Не в этот раз');
        break; // обязательно
}