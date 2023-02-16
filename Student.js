'use strict'

function toString(){
    return `${this.firstName} ${this.lastName}`;
}

function StudentPrototype(){
    this.toString = toString;
    this.sayHello = function(){
        return `${this.firstName} say 'Hello!`
    }
    this.wordSay = function(say){
        return `'Студент ${this.firstName} говорит: ${say}'`;
    }
    
}

Student.prototype = new StudentPrototype();

function Student(firstName, lastName, age, isMale){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.isMale = isMale;
}

const student2 = new Student('Test2', 'TestName2' ,20, false,);

const student3 = new Student('Test3', 'TestName3' ,30, true,);

const student = {
    id: 1,
    firstName: 'Test',
    lastName: 'TestName',
    age: 18,
    isMale: true,
    toString,
};