// // Level 1 – Pure Beginner Practice

// // 7. Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

// let input = prompt("Enter your age.");

// if (input === null) {
//   console.error("Input cancelled. Please try again.");
// } else {
//   let age = parseInt(input);

//   if (age === NaN) {
//     console.error("Please enter a valid number.");
//   } else if (age >= 18) {
//     console.log("Eligible");
//   } else {
//     console.log("Not eligible");
//   }
// }

// // 8. Print multiplication table of 5
// // Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ` + 5 * i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`38 x ${i} = ` + 38 * i);
// }

// // 9. Count how many numbers between 1 and 15 are greater than 8
// // Loop and count conditionally.
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//   } else {
//   }
// }
// console.log(count);

// // 10. Ask user for password and print access status
// // Hardcoded correct password. Compare with user input.

// let password = "Password@123";
// let userInput = prompt("Enter Password.");
// if (password === userInput) {
//   alert("Access Granted.");
// }
// if (userInput === null) {
//   alert("Please try again.");
// }
// if (userInput.trim() === "") {
//   alert("Please enter a password.");
// }

// // Level 2 – Slightly Tougher but Logical
// // 11. Allow only 3 attempts to enter correct password
// // If user gets it right early, stop. If not → “Account locked”

// let password = "Password@123";
// let access = false;
// let attempt = 0;
// let userInput = prompt("Enter the password.");
// attempt++;
// while (password !== userInput) {
//   if (attempt === 3) {
//     console.log("Account Locked");
//     break;
//   }
//   if (userInput === null) {
//     userInput = prompt("Please enter a password.");
//     attempt++;
//   }
//   if (userInput.trim() === "") {
//     userInput = prompt("Please enter a password.");
//     attempt++;
//   }
//   if (password === userInput) {
//     userInput = prompt("Access Granted.");
//     access = true;
//     break;
//   }

//   userInput = prompt("Incorrect Password,try again.");
//   attempt++;
// }

// // 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// // Loop until "stop" is typed. Count "yes".

// let termination = "stop";
// let count = 0;

// for (let word = ""; word !== termination; ) {
//   word = prompt("Please Enter your word.");

//   if (word === "yes") {
//     count++;
//   }
// }

// console.log(`You said "yes" ${count} times.`);

// // 13. Print numbers divisible by 7 from 1 to 50
// // Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }
// // 14. Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.

// let sum = 0;
// for(let i = 1; i <= 30; i++) {
//     if(i % 2 !== 0) {
//         sum = sum + i;
//         console.log(sum);
//     }
// }
// console.log(`the sum of first 30 odd numbers is ${sum}`)

// // 15. Keep asking number until user enters an even number
// // Use while loop. Stop only if input is even.
// // let num = parseInt(prompt("Enter a number:"));

// while (num % 2 !== 0) {
//     num = parseInt(prompt("Number is odd. Enter an even number:"));
// }

// alert("You entered an even number: " + num);

// // 16. Print numbers between two user inputs
// // Input start and end using prompt() → print all between.

// let start = prompt("Enter the start number.")
// let end = prompt("Enter the end number.")

// for(let i = start; i <= end; i++){
//     console.log(i);
// };

// // 17. Print only first 3 odd numbers from 1 to 20
// // Use loop. Stop with break after 3 odd prints.
// let count = 0;
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//         count++;
//     }
//     if(count === 3) {
//         break;
//     }
// }

// // 18. Ask user 5 numbers. Count how many are positive
// // Use loop + condition + counter.

// let num;
// let count = 0;
// for (let i = 1; i <= 5; i++) {
//     num = +prompt("Enter a number.")
//     if (i > 0){
//         count++;
//     }
// }

// alert(count)

// // 19. ATM Simulator – Allow 3 withdrawals
// // Start with ₹1000 balance. Ask withdrawal amount 3 times.
// // If enough balance → deduct
// // Else → print “Insufficient balance”

// let balance = 10000;
// let noOfWithdrawal = 0;
// let withdrawlAmount;

// for(let i = 1; i <= 100; i++){
//     withdrawlAmount = +prompt("Enter the number of rupees you want to withdraw.")
//     if(withdrawlAmount <= balance) {
//         balance = balance - withdrawlAmount;
//         alert(`Transaction Successfull, Current Balance: ${balance}.`);
//         noOfWithdrawal++;
//     } else {
//         alert("Insufficient balance.")
//         noOfWithdrawal++;
//     }

//     if (noOfWithdrawal === 3) {
//         break;
//     }
// }