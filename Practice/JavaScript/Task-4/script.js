// Level 1

/*1. Write a function `sayHello()` that prints `"Hello
 JavaScript"`.*/

function sayHello() {
  console.log(`Hello JavaScript.`);
}

sayHello();

/*2. Create a function `add(a, b)` that returns their sum
 and log the result.*/

function add(a, b) {
  return a + b;
}
console.log(add(5, 6));

/*3. Write a function with a default parameter `name =
 "Guest"` that prints `"Hi <name>"`.*/
function greet(name = "Guest") {
  console.log(`Hi, ${name}`);
}
greet();

/* 4. Use rest parameters to make a function that adds
 unlimited numbers.*/

function addUnlimited(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

a = addUnlimited(1, 5, 6, 2, 5, 8, 100);
console.log(a);

/*5. Create an IIFE that prints `"I run instantly!"`.*/
(function () {
  console.log(`I run instantly!`);
})();

/* 6. Make a nested function where the inner one prints a
 variable from the outer one. */

function Outer() {
  let a = 5;
  function Inner() {
    console.log(a);
  }
  Inner();
}
Outer();

/*  7. Create an array of 5 fruits. Add one at the end and
 remove one from the beginning.*/
 let fruits = ["apple", "mango", "banana", "kiwi"];
    fruits.push("papaya");
    fruits.shift();
    console.log(fruits)

 /* 8. Use a `for` loop to print all elements of an array. */
 let arr1 = [1,2,3,4,5,6,7,8,9]
 for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
 }

 /* 9. Create an object `person` with keys `name`, `age`,
 and `city`, and print each key’s value.*/
 let person = {
    name : "Tejas",
    age : 21,
    city : "Mumbai"
 }

 for(let i in person) {
    console.log(person[i]);
 }

 /*
 10. Use `setTimeout()` to log `"Time’s up!"` after 2
 seconds.*/
setTimeout(function() {
    console.log(`Time's up`);
}, 2000)