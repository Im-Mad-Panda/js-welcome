// alert - модалка с сообщением;
// prompt - модалка с импутом, куда можно ввести сообщение;
// confirm - модалка с подтверждением или отменойж

/*const inputValue1 = Number(prompt('Type first number'));
const inputValue2 = Number(prompt('Type second number'));

// let result = inputValue1 + inputValue2;

// if(isNaN(result)){
//     alert('not a number');
// }else {
//     alert(Number(result));
// }

let result;

if(isNaN(inputValue1 + inputValue2)){
    result = 'not a number';
}else {
    result = inputValue1 + inputValue2;
}

alert(result);
*/


/*function имя_функции(параметры_функции){
    тело функции
}
*/


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

/* const userName = prompt('Your name, please?');

const sayHelloTo = function(name){
const alertText = 'Hello, ' + name;
alert(alertText);
}

sayHelloTo(userName);
*/


// Task 1

const inputValue1 = Number(prompt('Type first number'));
const inputValue2 = Number(prompt('Type second number'));

const maxValue = function(value1, value2){
  if(value1 > value2){
return value1;
  } else{
return value2;
  }
}

const result = maxValue(inputValue1, inputValue2);
alert(result);

// Task 2

const minValue = function(value1, value2){
  if(value1 < value2){
return
  } else{
return value2;
  } 
}

const smaller = minValue(5, 3);
alert(smaller);

// Task 3

function isEven (value1){
    return value1 % 2 === 0
}

console.log(isEven(4));
