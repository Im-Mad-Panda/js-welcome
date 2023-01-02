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

const userInput = prompt(
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
}
