"use strict";

/*function getSumOdd(from, to) {
  let sum = 0;

  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
const result = getSumOdd(3, 7);
console.log(result);*/


/*function factorial(number) {

const MAX_TRY_FACTORIAL = 250;

if (isNaN(number)) {
  return false;
}
if (number === 1 || number === 0) {
  return 1;
}
if (number > MAX_TRY_FACTORIAL){
  return false;
}

let result = 1n;

  for (let i = 1; i <= number; i++) {
    result *= BigInt(i);
  }
  return result;
}
const res = factorial(4);
console.log(res);*/


function getPower(base, power){

  if (power === 0) {
    return 1;
  }
  if (number === 1) {
    return base;
  }

let result = 1;

for(let i = 1; i <= power; i++){
  result = result * base;
}
return result;
}