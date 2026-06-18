// 'this' Keyword in Objects

const user = {
    username: "Aditya",
    regPrice: 999,

    welcomeMessage: function () {

        // 'this' refers to the current object.

        console.log(`${this.username}, welcome to the website`);

        // Displays the current context.

        console.log(this);
    }
};

user.welcomeMessage();


// Changing Object Properties

user.username = "Sam";

user.welcomeMessage();

// Since the username changed,
// 'this.username' now refers to "Sam".


// Global Context

console.log(this);

// In Node.js:
// Output -> {}

// In the browser:
// Output -> Window object

// The global object differs depending
// on the JavaScript environment.


// 'this' Inside a Regular Function

function chai() {
    let username = "AdiBro";

    console.log(this.username);

    // undefined because 'this'
    // does not refer to local variables.

    console.log(this);
}

chai();


// Function Expression

const chai2 = function () {
    let username = "AdiBro";

    console.log(this.username);

    // undefined
};

chai2();


// Arrow Functions

const chai3 = () => {
    let username = "Aditya";

    console.log(this.username);

    // undefined

    console.log(this);

    // In Node.js:
    // {}

    // Arrow functions do not have
    // their own 'this'.
};

chai3();


// Arrow Function with Explicit Return

const addNumbers = (num1, num2) => {
    return num1 + num2;
};

console.log(addNumbers(3, 4));


// Arrow Function with Implicit Return

const addNumbers2 = (num1, num2) => num1 + num2;

console.log(addNumbers2(3, 4));


// Another Implicit Return Syntax

const addNumbers3 = (num1, num2) => (num1 + num2);

console.log(addNumbers3(3, 4));


// Returning an Object from an Arrow Function

const returnObj = () => ({
    username: "Aditya"
});

console.log(returnObj());


// Array for forEach Examples

const myArr = [2, 5, 3, 7, 8];


// forEach using a Regular Function

myArr.forEach(function (item) {
    console.log(item);
});


// forEach using an Arrow Function

myArr.forEach((item) => {
    console.log(item);
});


// forEach with Index

myArr.forEach((item, index) => {
    console.log(index, item);
});


// forEach with All Parameters

myArr.forEach((item, index, arr) => {
    console.log(item, index, arr);
});




// ==========================================
// LEXICAL SCOPE & LEXICAL THIS
// ==========================================
//
// Lexical Scope:
// JavaScript determines variable accessibility
// based on where functions and blocks are
// written in the source code.
//
// A function can access:
// 1. Its own variables
// 2. Variables from its parent scope
// 3. Global variables
//
// Lexical 'this':
// Arrow functions do not create their own 'this'.
// Instead, they inherit 'this' from the surrounding
// (lexical) scope where they are defined.
//
// Regular Function:
// - Has its own 'this'
// - 'this' depends on how the function is called
//
// Arrow Function:
// - Does not have its own 'this'
// - Uses 'this' from the enclosing scope
//
// Memory Trick:
// Lexical = Determined by where the code is written.
// ==========================================