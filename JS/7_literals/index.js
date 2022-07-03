console.log("Template Literals, Simple fields, classes, getter and setters");



// they make easier creating complex strings, created with backtick
// can insert variables + escape quotes


const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);



// another example to log html code while iterating on loop and array
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);






// object literals
/* Instead of this:
const createPerson = (name, age, gender) => {

  return {
    name: name,
    age: age,
    gender: gender
  };

};
*/
// we use this, better to read
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));




// object creating a function
/* long way
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
*/

// better way:
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};


bicycle.setGear(3);
console.log(bicycle.gear);





// Class syntax to define Constructor (ES6)
// lol this is java now... OOP in javascript, tadaa
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);



function makeVegClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeVegClass();
// why would we do this? but oke
// the tutorial adds a bit too many unnecessary functions maybe
const carrot = new Vegetable('carrot');
console.log(carrot.name);


// getters and setters... we going really in OOP !!!, nice
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}

// ok so in Java we are treating them just like functions
// // with specific names, while here we call them constructor, get, set.
// So we will access them without parentesis, treat them like attributes
// instead of functions. Makes notation nicer actually.
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
















//
