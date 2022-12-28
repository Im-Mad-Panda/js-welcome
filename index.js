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


/*if (условие) {
  блок кода
} else {
  клок кода, который выполниться в противном случае
}
*/


/*Тернарный оператор
условие ? если да : если нет
*/

// const number;
// let result;
// if (number > 5) {
//     result = 'yes';
// } else {
//     result = 'no'
// }


// let result = (number > 5) ? 'yes' : 'no';

const hour = 12;

const theme = (hour >= 7 && hour <= 17) ? 'light' : 'dark';

console.log(theme);