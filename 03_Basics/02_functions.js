// Function Parameters and Rest Operator

function calculateCartPrice(num1) {

    // Only the first argument is assigned to num1.
    // Extra arguments are ignored.

    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

// Output:
// 200


// Rest Operator (...)

function calculateCartPrice2(...num1) {

    // Rest operator collects all arguments
    // into a single array.

    return num1;
}

console.log(calculateCartPrice2(200, 400, 500));

// Output:
// [200, 400, 500]


// Mixing Normal Parameters and Rest Operator

function calculateCartPrice3(val1, val2, ...num1) {

    // First argument -> val1
    // Second argument -> val2
    // Remaining arguments -> num1 array

    return num1;
}

console.log(calculateCartPrice3(200, 400, 500, 2000, 5000));

// Output:
// [500, 2000, 5000]


// Passing Objects to Functions

const user = {
    username: "Aditya",
    age: 21
};

function handleObject(anyObject) {

    // If a property does not exist,
    // JavaScript returns undefined.

    console.log(
        `Username is ${anyObject.username} and age is ${anyObject.age}`
    );
}

handleObject(user);

// Output:
// Username is Aditya and age is 21


// Passing Object Directly

handleObject({
    username: "Sam",
    age: 25
});

// Output:
// Username is Sam and age is 25


// Passing Arrays to Functions

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

// Output:
// 400


// Passing Array Directly

console.log(returnSecondValue([200, 400, 500, 1000]));

// Output:
// 400