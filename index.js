"use strict";

const GOOD_PASSWORD = 'qwerty123';

let MAX_TRY = 0;

do {
    const userInput = prompt('Введите свой пароль');
    if(userInput === GOOD_PASSWORD)
     break;
} while(MAX_TRY++ > 5){

}


/*while(MAX_TRY++ > 5){
   const userInput = prompt('Введите свой пароль');
   if(userInput === GOOD_PASSWORD){
    break;
   }

}*/

console.log("ok");


// let count = 0;

// while (count < 10) {
//   if (++count % 2 === 1) {
//     continue;
//   }
//   console.log(count);
// }
// console.log("!!!");
