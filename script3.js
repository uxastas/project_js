// 11. Циклы
"use strict";

let num = 50;

//// вариант 1
// while (num < 55) {
//     console.log(num);
//     num++;
// }

//// вариант 2
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// вариант 3
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break; //остановиться на 6
        continue; // пропустить 6
    }
    console.log(i);
}