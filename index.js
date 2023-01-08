'use strict';

/* Function Declaration - видится с любой точки кода:

function имя_функции(параметры_функции){
    тело_функции
}
Function Expression - можно вызвать только после ее обьявления:

const имя_функции = function (параметры){
    тело функции
}
Arrow Function:

const имя_функции = (параметры) => {тело_функции}
*/

// const number1 = +prompt("Первое число");
// const number2 = +prompt("Второе число");
// const operator = prompt("Выберети оператор: \n + \n - \n * \n /");

// const res = calculate(number1, number2, operator);
// console.log(res);


function square(x){
  const result = mult(x, x);
  return result;
}


function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

// Callback - функцияб переданая как аргумент другой функции
// Функция высшего порядка - функция принимающая на вход другие функции или
// возвращающая функции в результате исполнения

function highOrderFunction(num1, num2, functionToPerform){
const result = functionToPerform(num1, num2);
return result;
}

const res =highOrderFunction(3, 4, sum);
console.log(res);

// function calculate(num1, num2, userMode) {
//   let f;

//   switch (userMode) {
//     case "+":
//       f = sum;
//       break;
//     case "-":
//       f = sub;
//       break;
//     case "*":
//       f = mult;
//       break;
//     case "/":
//       f = div;
//       break;
//   }

//   if (typeof f === "function") {
//     const result = f(num1, num2);
//     return result;
//   } else {
//     console.log("Oppps!");
//     return null;
//   }
}


