
// const num1 = +prompt('Первое число');
// const num2 = +prompt('Второе число');



//  alert (num1 + ' + ' + num2 + ' = ' + (num1 + num2));

//  'dfvsdfsdcv'
//  "fgfgdf  "

//  console.log(`Sum is ${2 + 2}`);

// number1 = 4;
// number2 = 5;


// function getDecription(){
//     return 'of these numders';
// }


// alert(`Sum ${getDecription()}
// ${number1} + ${number2} = ${number1 + number2}`);
// alert(`Sub ${getDecription()}
// ${number1} - ${number2} = ${number1 - number2}`);
// alert(`Multiplication ${getDecription()}
// ${number1} * ${number2} = ${number1 * number2}`);
// alert(`Division ${getDecription()}
// ${number1} / ${number2} = ${number1 / number2}`);

// const user = {
//     name: 'Test',
//     lastName: 'Testorovich',
//     age: 18,
//     isMale: true,
// }

// function sayHello(userObject){
// console.log(`Hello, ${userObject.name} ${userObject.lastName}`)
// }

// sayHello(user);

// https://github.com/Im-Mad-Panda


// const PROTOCOL = 'http://';
// const SERVER_IP = 'github.com';
// // const PORT = '3000';

// function createQuery(absPath){
//     const url =`${PROTOCOL}${SERVER_IP}${absPath}`
//     return url;
// }

// console.log(createQuery('/Im-Mad-Panda'));

// const user = {
//     'favorite color': 'green',
//     0: 'test',
// }

// // user.favoriteColor;

// user['Num'];

// user[Num];

// user['favorite color'];

// const test = 'favorite color';

// user[test]

const weekPlan = {
Пн: 'Визит к стоматологу',
Вт: 'Свидание',
Ср: 'Время провождение с друзьями',
Чт: 'Трудный день на работе',
Пт: 'Выходной',
Сб: 'Поход в горы',
}

function getPlanning(){
    const dayWeek = prompt('Какой день недели: \nПн - Понедельник\nВт - Втортик\nСр - Среда\nЧт - Четверг\nПт - Пятница\nСб - Суббота');

    // alert(weekPlan[dayWeek] ? weekPlan[dayWeek] : 'Ничего не запланировано на этот день');

    console.log('Привет' in weekPlan);
}

getPlanning();
