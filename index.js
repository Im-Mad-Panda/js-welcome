"use strict";

/*const cat = {}; 

const cat2 = Object();

const cat3 = new Object();
*/

// const cat = {
//   name: 'Barsik',
//   age: 4,
//   color: 'ginger',
//   weigh:  5,
//   breed: 'Cheshirskiy',
//   isMale: true,
//   run: function(){
//   return 'I am running!'
// },
//   sleep: function(){
//   return 'Zzzz...'
// },
//   meow: function(){
//   return 'Meowww!'
// }
// };

// function Cat(name, age, color, weight, breed, isMale){
//    this.name = name;
//    this.age = age;
//    this.color = color;
//    this.weigh = weight;
//    this.breed = breed;
//    this.isMale = isMale;
//    this.run = function(){
//     return 'I am running!'
//   };
//   this.meow = function(){
//     return 'Meowww!'
//   }
// }

// const newCat = new Cat('Murzik', 4, 'white', 3, 'Persian', true);

// const secondCat = new Cat('Busia', 7, 'black', 4, 'Siam', false);

// alert(cat.name);

// cat.age++; 
// cat.age = cat.age + 1;

/*

C - create
R - read
E - update
D - delete 

*/

// delete cat.isSleeping;

// cat.girlfriend = "Murka";

// const res = cat.run();

// function User(name, surname, fullname, age){
//   this.name = name;
//   this.surname = surname;
//   this.fullname = fullname;
//   this.age = age;
// }

// const newUser = new User('Daniil', 'Obdum', 'Daniil Obdum', 29);

function Auto(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.accelerate = function (value) {
    if (value < 0) {
      return false;
    }
    this.speed = this.speed + value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
      return this.speed;
    }
    return this.speed;
  };
  this.deaccelerate = function (value) {
    if (value < 0) {
      return false;
    }
    this.speed = this.speed - value;
    if (this.speed < 0) {
      return (this.speed = 0);
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

const WV2023 = new Auto("WV", 280);
const Audi2023 = new Auto("Audi", 300);
