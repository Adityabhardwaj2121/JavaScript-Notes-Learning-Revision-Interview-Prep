// Primitive → call by value (changes happen in copy)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // by default it is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false ❗
// Symbol always creates a UNIQUE value
// even if description is same ('123')
// Symbol → used for unique identifiers
// No two Symbols are equal

// const bigNumber = 3456543576654356754n  // BigInt



// Reference (Non-primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // typeof shows "function" (special type of object)
    console.log("Hello world");
}

console.log(typeof anotherId); // "symbol"

// to study more, read:
// https://262.ecma-international.org/5.1/#sec-11.4.3



// STATIC TYPING:
// Type is fixed
// Example: C++
// int a = 10;
// a = "hi"; ❌ not allowed


// DYNAMIC TYPING:
// Type can change
// Example: JavaScript

let x = 10;     // number
x = "hello";    // string ✅ allowed


// JS TYPE:
console.log("JavaScript is dynamically typed");