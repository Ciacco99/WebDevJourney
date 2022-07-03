console.log("Loops and more syntax");

var arr = [];

var j = 0;
while(j<5) {
  arr.push(j++);
}
console.log(arr);

for (var i = 5; i < 10; i++) {
  arr[i] = i;
}
console.log(arr);

/* usual do-while loop
do {

} while(i)
*/

// Math.random() -> between 0 (included) and 1 (excluded)
// we can use it with Math.floor and get integer in [i,j)
var rand0to9 = Math.floor(Math.random() * 10);
var rand10to50 = Math.floor(Math.random() * (50-10 + 1)) + 10;
console.log(rand0to9);
console.log(rand10to50);

// parse to int function
var str = "56";
var number = parseInt(str);
console.log(number);

// parse int in base 2
var bin = "111001101";
var decimal = parseInt(bin, 2);
console.log(decimal); // 461

// ternary operator: expression ? trueVal : falseVal;
// nesting operators ->
// return num > 0 ? "positive" : num < 0 ? "negative" : "zero";


// VAR vs LET -> let and const added with ES6, later
// let does NOT allow to declare the same variable twice.
// we can declare and assign it, then assign it again but not declare it again.

// strict mode. allows better debugging.
function functionName() {
  "use strict";
  //...
}

// difference in scope: let scope is limited to block scope.
// var is global or local if inside function.
// aka I should always use let so I keep the same mentality as java/c

const PI = 3.14; // it's a read-only let

// you can mutate a const array with bracket notation
// that is, I can't mutate the pointer but I can mutate the content
const array = [1,2,3];
//array = [3,2,1]; -> ERROR
console.log(array);
array[0] = 3;
array[1] = 2;
array[1] = 1;
console.log(array); // legal

// prevent object mutation (objects and arrays) with object.freeze
MATH_CONSTS = {
  PI: 3.14
}
Object.freeze(MATH_CONSTS);


// Anonimous functions
/*
var magic = function functionName() {
  return new Date();
}
*/
// equivalent to
const magic = () => new Date();

// anonimous/arrow function with params

const fun = (a,b) => a + b;
console.log(fun("con","cat"));


// higher order functions like map, filter, reduce.
// they take other functions as arguments!

const reals = [-1,2.7,4,-5,5.5,-5,3,23.3,2,-45.4,5];
const squared = (argArray) => {
  const squaredInts = argArray.filter(num => Number.isInteger(num) && num>0);
  return squaredInts;
}
console.log(squared(reals));

// little revision on higher order functions:
/****
HOF = function that takes another function as a parameter
OR (inclusive) returns another function as result

Examples:
... I'll do another folder to continue so it doesn't get messy
****/
