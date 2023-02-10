function sumAll (){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
result += arguments[i]; 
    }
}

sumAll(2, 5, 7, 9);