console.log("Higher Order Functions and other");

/***
HOF = function that takes another function as a parameter
OR returns another function as result.
***/



// also trying out atom-easy-jdoc extension,
// ALT + CONTROL + J with cursor on line above function
// Opens template for function JSDoc documentation
//
// I can also generate a JSDoc documentation (see package jsdoc-generator)
// It will add a folder /out/.... and create a html page with the docs.
// Interesting. Useless and just clutter for now but good to know.


// coming back to HOF...

const numbers = [1, 2, 3, 4, 5];

/**
 * addOneMore - Adds 1 to every element of array and outputs new array
 *
 * @param  {number[]} array       inputer array
 * @param  {number[]} newArr = [] output array, default empty
 * @return {number[]}             new array with every element increased by 1
 */
function addOneMore(array, newArr = []) {
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] + 1);
  }
  return newArr;
}

const newArray = addOneMore(numbers);
console.log(newArray);

// achieve same with HOF map() that creates new array in the process
// else we could use forEach() to process them in place
const newArr = numbers.map(nb => nb+1);
console.log(newArr);

// reduce
const tot = numbers.reduce((sum,nb) => sum + nb);
console.log(tot); // 15

// filter
const odds = numbers.filter(nb => nb%2 !== 0);
console.log(odds);
const evens = numbers.filter(nb => nb%2 === 0);
console.log(evens);

// foreach
numbers.forEach(nb => console.log(nb+1)); // prints each nb +1

// default parameters
const increment = (nb, val = 1) => nb + val;
console.log(increment(5));
console.log(increment(5,2));

// rest operator, allows optional or multiple args
const f = (...args) => args.reduce((a, b) => (a + b), 0);
console.log(f(1,2,3,4)); // 10
console.log(f(1,2)); // 3

// spread operator, similar to rest operator but expands the array
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june'];
let month2 = [...months];
months[0] = 'potato';

console.log(month2);
console.log(months);
