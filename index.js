/*Else - if

if (услорвие){
    else if (новое условие)
}

*/

/*const option = +prompt(
  "Выборите позицию меню \n 1 - Чай \n 2 - Кофе \n 3 - Сок \n 4 - Лимонад \n 5 - Вода"
);

if (option === 1) {
  console.log("Вот ваш Чай");
} else if (option === 2) {
  console.log("Вот ваш Кофе");
} else if (option === 3) {
  console.log("Вот ваш Сок");
} else if (option === 4) {
  console.log("Вот ваш Лимонад");
} else if (option === 5) {
  console.log("Вот ваш Вода");
} else{
    console.log('Такого нет в меню! Сорян)')
}*/

/*switch (значение){
  case вариант:
      что делать, если вариант подходит;
      break
  case вариант2:
      что делать, если вариант подходит;
      break
  ...
  default:
    конец
}*/

/*const userInput = prompt(
  "Выборите позицию меню \n 1 - Чай \n 2 - Кофе \n 3 - Сок \n 4 - Лимонад \n 5 - Вода"
);

switch (userInput) {
  case "1":
    console.log("Вот ваш Чай");
    break
  case "2":
    console.log("Вот ваш Кофе");
    break
  case "3":
    console.log("Вот ваш Сок");
    break
  case "4":
    console.log("Вот ваш Лимонад");
    break
  case "5":
    console.log("Вот ваш Вода");
    break
  default:
    console.log("Такого нет в меню! Сорян)");
}*/

const number1 = +prompt("Первое число");
const number2 = +prompt("Второе число");
const operator = prompt("Выберети оператор: \n + \n - \n * \n /");


const res = calculate(number1, number2, operator);
console.log(res);


function sum (a,b){
  return a + b;
}
function sub (a,b){
  return a - b;
}
function mult (a,b){
  return a * b;
}
function div (a,b){
  return a / b;
}


function calculate(num1, num2, userMode){
let f;

switch (userMode) {
  case "+":
    f = sum;
    break;
  case "-":
    f = sub;
    break;
  case "*":
    f = mult;
    break;
  case "/":
    f = div;
    break;
}

if(typeof f === 'function'){
  const result = f(num1, num2)
  return result;
} else {
  console.log('Oppps!');
  return null;
}
}



/*const getDecade = function (day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return 1;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      return 2;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
      return 3;
    default:
      return null;
  }
};*/
