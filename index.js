"use strict";

// const MAX_TRY = 5;

// do {
//     const userInput = prompt('Введите свой пароль');
//     if(userInput === GOOD_PASSWORD)
//      break;
// } while(MAX_TRY++ > 5){

// }

// while(MAX_TRY++ > 5){
//    const userInput = prompt('Введите свой пароль');
//    if(userInput === GOOD_PASSWORD){
//     break;
//    }
// }

// for (Инициализация, условия, изменения на каждом шаге итерации){

// }


function factorial(a){

let result = 1;

    for (let i = 1; i <= a; i++) {
    result *= i;
    
  }
  return result;
}

const res = factorial(4);
console.log(res);





console.log("end of script");

// let count = 0;

// while (count < 10) {
//   if (++count % 2 === 1) {
//     continue;
//   }
//   console.log(count);
// }
// console.log("!!!");
