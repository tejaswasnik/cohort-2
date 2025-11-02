// 1

// a
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// b
let x = 5;
x = x + 3;
x += 3;
x -= 3;
x *= 3;
x /= 3;
x %= 3;

// c
let count = 5;
console.log(count);
count++;
console.log(count);
count--;
console.log(count);

// d

console.log(5 == "5");
console.log(5 === "5");

// e

let num = 10;
if (num > 5 && num < 20 && num === 10) {
  console.log("Yes it is");
}

// f
console.log(true && false);
console.log(true || false);
console.log(!true);

// g
console.log(5 > 3 && 10 > 8); // true
console.log(5 > 3 || 10 < 8); // false

// h
console.log(5 & 1);
console.log(5 | 1);
// when & is used the lower value is printed and when | is used higher value is printed

// 2

// a
console.log(a);
var a = 10;
// undefined.

// b
console.log(b);
let b = 10;
// error
//Uncaught ReferenceError: Cannot access 'b' before initialization at script.js:63:13

// c
test();
function test() {
    console.log("Hello");
}
// Hello & undefined

// d
hello();
var hello = function() {
    console.log("Hi");
}
// undefined because hello variable vent up and the assigned value vent down.
// TypeError: hello is not a function

// e
// the variable get hoisted
// the declared value doesnt get hoisted

// 3
// a
let age = parseInt(prompt("What is your age?"));
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// b

let marks = parseInt(prompt("Enter your marks."));
if (marks >= 90) {
  console.log("A grade.");
} else if (marks >= 75) {
  console.log("B grade.");
} else if (marks >= 50) {
  console.log("C grade.");
} else {
  console.log("Fail.");
}

// c
let city = "Bhopal";
if (city === "Bhopal") {
  console.log("MP.");
} else if (city === "Delhi") {
  console.log("Capital.");
} else {
  console.log("Unknown City.");
}

// d
let score = 50;
score > 35 ? console.log("Pass"): console.log("Fail");

// e

let temperature = 42;
temperature > 30 ? console.log("Hot") : console.log("Pleasant");

// f
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// g
let age = 19;
let country = "India";
if (age > 18 && country === "India") {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible.")
}