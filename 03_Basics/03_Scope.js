// Nested Scope

function one() {
    const username = "AdiBro";

    function two() {
        const website = "YouTube";

        // Inner functions can access
        // variables from their outer scope.

        console.log(username);
    }

    two();

    // Outer scope cannot access
    // variables declared inside inner functions.

    // console.log(website); // ReferenceError
}

one();


// Another Nested Scope Example

function A() {
    const a = 10;

    console.log("A is working");

    function B() {
        const b = 20;

        // Function B can access
        // variables from function A.

        console.log(a);
        console.log("B is working");

        c();
    }

    // Function declarations are hoisted,
    // so B can be called before its definition ends.

    B();

    function c() {

        // Function c is a sibling of B,
        // not a child of B.

        // Therefore, it cannot access
        // variables declared inside B.

        // console.log(b); // ReferenceError

        console.log("C is working");
        console.log(a);
    }
}

A();


// Function Hoisting

console.log(addOne(10));

function addOne(num) {

    // Function declarations are hoisted.

    return num + 1;
}

console.log(addOne(10));


// Function Expressions

// console.log(addTwo(10));

// This causes an error because
// addTwo is not initialized yet.

const addTwo = function (num) {

    // Function stored inside a variable.
    // This is called a Function Expression.

    return num + 2;
};

console.log(addTwo(10));


// Key Difference

// Function Declaration
function multiply(num) {
    return num * 2;
}

// Function Expression
const divide = function (num) {
    return num / 2;
};

// Function declarations are hoisted.
// Function expressions are not accessible
// before the variable is initialized.