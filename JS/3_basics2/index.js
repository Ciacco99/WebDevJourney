function wordBlanks(noun, adj, verb, adverb) {

  var res = "";

  res += "The " + adj + " " + noun + " " + verb + " to the store " + adverb;

  return res;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));


// arrays can contan multiple data types!
var arr = ["John", 23];

// nested arrays ( multi dimensional):
var arr2 = [["John", 23], arr, ["me", 3]]
console.log(arr); // nice, this works
console.log(arr2); // this works too

// index in arrays
console.log(arr[0]); // john
console.log(arr[0,0]); // john too...
console.log(arr[0][0]); // j
console.log(arr2[0]); // ["John", 23]
console.log(arr2[0,0]); // ["John", 23]
console.log(arr2[0][0]); // john
// looks like this is reading just the last index
console.log(arr2[0,2]); //["me", 3]

// changing values:
arr2[1] = ["john2", 55];
console.log(arr2); // eeeeeeeeeeasy

// adding values --> 3 didn't exist as an index!
arr2[3] = ["me2", 6];
console.log(arr2); // eeeeeeeeeeasy

// what if i put a later index?
arr2[6] = ["meme", 9];
console.log(arr2); // eeeeeeeeeeasy
console.log(arr2[4]); // fills the gaps with undefined

// pop and push (last elements, LIFO)
arr2.push("element");
console.log(arr2);
arr2.pop();
console.log(arr2);

// shift and unshift (pops the first element FIFO)
arr2.unshift("element");
console.log(arr2);
arr2.shift();
console.log(arr2);

// JS is disgustingly simple in what errors you can do
// args inside functions without args, types, dynamic arrays by default, allowance of different types...

// functions without even defining the types of params
function fname(a, b) {
  console.log(a+b);
}
fname(5,3);
fname("ridiculous function", "o"); // at least with - it gives NaN as - is not defined for strings.

// checking types with typeof and global vs local scope
// var -> local
// nothing (maybe inside a function) -> GLOBAL

var myGlobal = 10;
function f1() {
  oopsGlobal = 5; //assigns also if we NEVER call f1
}

function f2() {
  if(typeof myGlobal != undefined){
    console.log("ok global");
  }
  if(typeof oopsGlobal != undefined){
    console.log("not OK global..");
  }
}
f2(); // works also if we never call f1 !!!!!!!


// JSON.stringify to print arrays as strings
console.log(JSON.stringify(arr2));
// So you can use concats:
console.log("Array: " + JSON.stringify(arr2));

/*
Equality vs strict equality:
 3 == '3' -> true, we convert to common types
 3 === '3' -> false, we don't, type must be same

 Same for inequality: != and !==
*/
/*
Usual other operators
<, <=, >, >=

and logic operators: &&, ||,
*/

/*
Switch statement:

switch (expression) {
  case expression:
    //do something
    break;
  default:

}

*/

// OBJECTS

var dog = {
  "name" : "doggy",
  "legs" : 4,
  "tails": 1,
  "friends": ["bob"],
  "spaced property": "nice"
};

// Accessing properties:
// dot notation
console.log(dog.name);

// bracket notation, required if name
// of property as space in it
console.log(dog["spaced property"]);

var mydog = {
  "name" : "doggy",
  "legs" : 4,
  "tails": 1,
  "friends": ["bob"],
  "spaced property": "nice"
};
// changing properties:
mydog.name = "dogname";

// adding properties:
mydog.bark = true;
console.log(mydog);

// delete properties:
delete mydog.tails;
console.log(mydog);

// use objects as dictionaries,
// key/value pairs

var lookup = {
  1: "val1",
  2: "val2",
  3: "val3",
  4: "val4"
}
// and we can use this instead of if/else or switch.
// ... return lookup[key] --> right val

// testing objects for properties:
// obj.hasOwnProperty(property);
console.log(lookup.hasOwnProperty(2)); //true
console.log(lookup.hasOwnProperty(5)); //false


// nesting objects, chain dot notation: obj.obj2.property

var collection = {
  "1": {
    "artist": "me",
    "tracks": []
  },
  "45": {
    "album": "nice",
    "other": []
  }
};

// way of copying an object!
var collectionCopy = JSON.parse(JSON.stringify(collection));

// then modify object etc

// we not checking if id doesn't exist tho.
function updateRecords(id, prop, value) {
  if(value==""){
    delete collection[id][prop];
  } else if(prop === "tracks"){
    // if it exists it stays itself else we create it
    // by casting it to empty array
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(collectionCopy);
console.log(updateRecords("1", "artist", "Not Me"));
console.log(updateRecords("45", "artist", "me again"));
console.log(updateRecords("1", "tracks", "this track"));
