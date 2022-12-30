/*Else - if

if (услорвие){
    else if (новое условие)
}

*/


const number = +prompt('Type your number');

if (isNaN(number)){
    console.log('Некоректное число');
} else if(number % 5 === 0){
    console.log('Делится на 5')
}else if(number % 3 === 0){
    console.log('Делится на 3')
}else if(number % 2 === 0){
    console.log('Делится на 2')
} else{
    console.log('Не делиться не на 5 не на 3 не на 2')
}

console.log('Конец скрипта')