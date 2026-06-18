// Functions

// Function Declaration

function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("B");
    console.log("R");
    console.log("O");
}

// Function Call / Invocation
sayMyName();


// Function Parameters and Arguments

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, 4);      // 7
addTwoNumbers(3, "a");    // 3a (number + string => string concatenation)
addTwoNumbers(3, null);   // 3 (null is converted to 0)


// Return vs Console.log

const result = addTwoNumbers(3, 5);

// 8 is printed inside the function,
// but nothing is returned.

console.log("Result:", result); // undefined


// Returning a Value from a Function

function addTwoNumbers2(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result2 = addTwoNumbers2(3, 5);

console.log("Result:", result2); // 8


// Returning Directly

function addTwoNumbers3(number1, number2) {
    return number1 + number2;
}

console.log(addTwoNumbers3(10, 20)); // 30


// Function with Template Literals

function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

// Output:
// Aditya just logged in
//  just logged in
// undefined just logged in


// Handling Undefined Values

function loginUserMessage2(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage2());

// Output:
// Please enter a username
// undefined


// Common Shortcut

function loginUserMessage3(username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage3());

// !username becomes true for:
// undefined, null, "", 0, false, NaN


// Default Function Parameters

function loginUserMessage4(username = "Sam") {

    // This condition will never execute
    // if no argument is passed because
    // username will be "Sam" by default.

    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage4());

// Output:
// Sam just logged in


// Passing a Custom Value Overrides Default

console.log(loginUserMessage4("Aditya"));

// Output:
// Aditya just logged in