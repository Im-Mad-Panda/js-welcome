/*const number1 = +prompt("Первое число");
const number2 = +prompt("Второе число");
const operator = prompt("Выберети оператор: \n + \n - \n * \n /");

const res = calculate(number1, number2, operator);
console.log(res);

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

function calculate(num1, num2, userMode) {
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

  if (typeof f === "function") {
    const result = f(num1, num2);
    return result;
  } else {
    console.log("Oppps!");
    return null;
  }
}*/

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

/* Function Declaration:
function имя_функции(параметры_функции){
    тело_функции
}
Function Expression:
const имя_функции = function (параметры){
    тело функции
}
Arrow Function:
const имя_функции = (параметры) => {тело_функции}
*/

// function greeting(name)
/*const greeting = function(name){
const checkedName = name ? name : 'Аноним';
console.log('Привет, ' + checkedName);
}

const userName =prompt('Ведите ваше имя');

greeting(userName);*/

(function sayHi(name){
  console.log('Hi, ' + name);
})('Masha');