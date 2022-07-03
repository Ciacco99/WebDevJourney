console.log("Hello World on console");

var nb = 5; // comment

/*
Comments
*/

nb = 9;

/*
Data types: undefined, null, boolean, string,
symbol, number, object.
*/

var myname = "Jacopo"
myName = 8

let ourName = "noi"

const pi = 3.14
// var and let have a difference in scope

var a; // declare
var b = 2; // assign and declare
a = 7; // assign
b = a;
console.log(a);

// Basic syntax and operations
var sum = 10 + 10;
console.log(sum);
var diff = sum - 5;
var prod = 8*10;
console.log(prod);
var div = 66/5; // note this is float division. different from java and others.
console.log(div);
prod++;
++prod;
prod = prod +1;
console.log(prod);
--prod;
prod--;
prod = prod-1;
console.log(prod);

var decimal = 10.7;

div = 4.4/3.3;
console.log(div);
var remainder = 10 % 3;
console.log(remainder);

//shorthands
sum+=9;
sum-=9;
sum = sum +9;
sum = sum -9;
sum*=2;
sum/=2;
console.log(sum);

var fname = "Ciacco";
var lname = "surname";
// Escape character is \ backslash:
// put it before the quote char: \"
var str = "string with \"double quotes\"in it "
console.log(str);

// Trick: make the string start with single quotes instead

str = '"string with "double quotes"in it"';

// or backtick so you can use both single and double inside
// OPTION + 9 is how to do this: ``
str = `string with "double" and 'single' quotes in it`;
console.log(str);
// it's just a hassle honestly


/***
OTHER ESCAPE SEQUENCES (look them up):

CODE  OUTPUT
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
***/

var concat = fname + lname;
console.log(concat);

// String length
var length = concat.length;

// Getting String chars
var firstLetter = concat[0];

// String are immutable
// concat[0] = "k" ----->> ERROR
// concat = "kciacco" ---> ok
// Basically we need to reassign the variable,
// can't change the string itself

// last char in String
var lastletter = concat[concat.length - 1];
var nthlast = concat[concat.length - 3]
