// IEEE 754-2008
let numA = 0.7;
let numB = 0.1;

numA = ( (numA * 100) + (numB * 100) ) / 100;
numA = ( (numA * 100) + (numB * 100) ) / 100;
numA = ( (numA * 100) + (numB * 100) ) / 100;
numA = Number(numA);

console.log(numA);
console.log(Number.isInteger(numA));

/*
    numA += numB;
    numA += numB;
    numA += numB;
    numA = Number(numA.toFixed(2));

    console.log(numA);
    console.log(Number.isInteger(numA));
*/

const num1 = 1;
const num2 = 2.5;
const num3 = 45.7854565958;

// let temp = num2 * 'Ola';
// let temp = num2 * '5';
let temp = num2 + Number('5');

console.log(num1.toString() + num2.toString());

console.log(num1.toString(2));

console.log(num3.toFixed(2));

console.log(Number.isInteger(num1));

console.log(Number.isNaN(num3));

console.log(temp);

console.log(Number.isNaN(temp));

console.log(Math.sqrt(4));

console.log(Math.pow(4,3));