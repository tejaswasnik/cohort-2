// Introduction to JavaScript
// 1.
document.title;
// '(4) Did Marvel Just Break Doom? New Plans for Secret Wars? - Roastverse 146 - YouTube'

// 2.
alert("Hello from Sheriyans!");

// 3.
//If HTML is skeleton, CSS is clothes — JS is Awesome

// 4.
// Animations and Popups.

console.log("Connected!");

// Running JS in browser console

// 1.
2 + 2;
4;

// 2.
alert("Hi");

// 3.
prompt("Your Name?");

// 4.
let city = "Bhopal";
console.log(city);

// Variables and Keywords (var, let, const)

// 1.
var a = "Tejas";
let b = "Sheriyans";
const c = "School";

// 2.
a = "Updated";
b = "Updated";
c = "Updated";

// 3.

{
  let test = "Test";
}

console.log(test);

// 4 eUncaught ReferenceError: test is not defined
// at <anonymous>:1:1

// 5.
const pi = 3.14;
const baseURL = "https://www.google.com";
const adhaarNo = "0000 0000 0000";

// Logging and Interaction (console, alert, prompt)

// 1.
console.log("Tejas Wasnik");
console.info(21);
console.warn("Nashik");
console.error("Maharashtra");

// 2.

let userName = prompt("Enter your name...");
console.log(`Hey, ${userName}`);

// 3.
console.log(typeof userName);

// 4.
let age = prompt("Enter age: ");
console.log(age + 5);
// output: 55

// Working with Strings
// 1.
let msg = "I love Sheriyans";

// 2.
msg.slice(2, 6);
// 'love'

// 3.
msg.split();
// ['I love Sheriyans']

// 4.
msg.replace("love", "study at");

// 5.
let name = "Tejas";
console.log(`Hey, ${name}, welcome to JS!`);

// 6.
msg.includes("love");

// Statements and Semicolons

// 2.
console.log("Hello");
console.log("Yes");
// VM459:1 Hello
// VM459:1 Yes

// console.log("Hidden");

// Expressions Vs Statements
// 1.
function expression1() {
  return 5 + 10;
}

// 2.
let x = 10;

// 3.
// expression gives a value immediately.

// 4.
let y = (5 + 10) * 2;
console.log(y);

// 5 --> expression returns a value and statement doesn't return a value.

// Data Types

// 1
let age = 21;
let name = "Tejas";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Bhopal" };
let x = null;
let y;
let z = Symbol("id");

// 2
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof skills);
console.log(typeof user);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
// number
// string
// boolean
// object
// object
// object
// undefined
// symbol
// undefined

// 3

x = undefined;
console.log(typeof x);

// 4
let sum = 5 + "6";
console.log(sum);

// Special Values

// 1
console.log(1 / 0);
console.log(Number("abc"));
console.log(undefined + 1);

// 2
console.log(NaN);
console.log(Infinity);

// 3
// null is an empty value given by user to a variable where as when a variable is declared but not assigned anything than its default value is undefined

// Primitive vs Reference
// 1
let x = 5;
let y = x;
y = 10;

console.log(x, y);

// 2
let obj1 = {
  name: "Tejas",
};

let obj2 = obj1;
obj2.name = "Sheriyans";
console.log(obj1.name);

// 3  Sheriyans
