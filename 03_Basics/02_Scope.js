// Variable Scope in JavaScript

let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);


// Block Scope

// Curly braces {} create a block scope.
// Examples:
// - if statements
// - loops
// - functions

if (true) {
    let x = 100;
    const y = 200;
    var z = 300;
}

// x and y are block-scoped,
// so they cannot be accessed outside the block.

// console.log(x); // ReferenceError
// console.log(y); // ReferenceError

// var ignores block scope.

console.log(z); // 300


// Why is var a Problem?

var num = 500;

if (true) {
    var num = 60;
}

console.log(num); // 60

// The variable declared with var
// is modified outside the block as well.
// This can lead to unexpected bugs.


// let and const Respect Block Scope

let num2 = 800;

if (true) {
    let num2 = 55;

    console.log("Inner:", num2);
}

console.log("Outer:", num2);

// Output:
// Inner: 55
// Outer: 800

// A new variable is created inside the block,
// leaving the outer variable unchanged.


// Function Scope Example

function one() {
    let username = "Aditya";

    function two() {
        let website = "GitHub";

        console.log(username);
    }

    two();

    // console.log(website); // ReferenceError
}

one();


// Scope in Browser vs Node.js

// The global scope behaves differently
// in browsers and Node.js environments.

// Example:
// - In browsers, global variables become
//   properties of the window object.
// - In Node.js, global variables are not
//   attached to window because window
//   does not exist.

// Therefore, the behavior of the global scope
// can differ depending on the environment.