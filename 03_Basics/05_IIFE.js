// Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that is
// defined and executed immediately
// after its creation.

// Main Purpose:
// - Create a private scope
// - Avoid polluting the global scope
// - Execute setup/initialization code immediately


// Named IIFE

(function chai() {
    console.log("DB CONNECTED");
})();


// Important Note

let a = 20;

let b = 20;

// A semicolon is often required before an IIFE
// if the previous statement does not already end
// with one. This prevents parsing issues.


// Syntax Breakdown

(function chai() {

    // Function Definition

})();

// First ()  -> Function Definition
// Second () -> Immediate Execution


// Why Use an IIFE?

// Variables declared inside an IIFE
// are not accessible outside it.

(function () {
    let username = "Aditya";

    console.log(username);
})();

// console.log(username); // ReferenceError


// IIFE Using an Arrow Function

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("DB Products");


// Unnamed (Anonymous) IIFE

(function () {
    console.log("Anonymous IIFE");
})();


// IIFE with Multiple Parameters

((name, version) => {
    console.log(`${name} Version ${version}`);
})("JavaScript", "ES6");