'use strict'

const driver1 = {
    name: 'Миша',
}

const driver2 ={
    name: 'Саша',
}

const car ={
    go: function(){
        return`${this.name} в этой машине`;
    }
}

driver1.__proto__ = car;
driver2.__proto__ = car;


    

