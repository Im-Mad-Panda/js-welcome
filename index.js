'use strict'

// function getAverage(){

// let sum = 0;

// for (let i = 0; i < arguments.length; i++) {
// sum += arguments[i];    
// }
// return (sum / arguments.length);
// }

// const array = [2, 3, 4, 5, 6, 7];

// console.log(getAverage(2, 3, 4, 5, 6, 7));


function getMinAndMax() {
    return[getMin(arguments), getMax(arguments)];
}

  function getMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }    
      }
        return min;
    }

    function getMax(arr){
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
            return max;
        }

  
  const testArray = [2, 4, -1, 5, 7, -130, 0, 10];
  const result = getMinAndMax(2, 4, -1, 5, 7, -130, 0, 10);
  console.log(result);
