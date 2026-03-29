let score = 33;

console.log("----- SCORE (NUMBER) -----");
console.log(typeof(score));

score = "33";

console.log("\n----- SCORE (STRING) -----");
console.log(typeof(score));

let valueInNumber = Number(score);

console.log("\n----- AFTER NUMBER CONVERSION -----");
console.log(typeof(valueInNumber));


// what if on number is converted:

let a = "33abc"; // its a Nan
console.log("\n----- INVALID NUMBER STRING -----");
console.log(typeof(a));

let b = Number(a);
console.log(typeof(b)); // type of Nan is number
console.log(b); // after conversion it becomes Nan


// About NULL
let val = null;
console.log("\n----- NULL -----");
console.log(typeof(val));

let val2 = undefined;
console.log("\n----- UNDEFINED -----");
console.log(typeof(val2));

let c = true;
let d = false;

console.log("\n----- BOOLEAN TO NUMBER -----");
console.log(Number(c)); // 1
console.log(Number(d)); // 0

let isLoggedIn = 1;


// Convert to boolean
let status = Boolean(isLoggedIn);

console.log("\n----- NUMBER TO BOOLEAN -----");
console.log(status); // true

// Another way (shortcut)
let status2 = !!isLoggedIn;
console.log(status2); // true

// Empty string
let name1 = "";
console.log("\n----- EMPTY STRING -----");
console.log(Boolean(name1)); // false
console.log(!!name1);       // false

// Non-empty string (your name)
let name2 = "Hello";
console.log("\n----- NON-EMPTY STRING -----");
console.log(Boolean(name2)); // true
console.log(!!name2);        // true

let num = 33;
let stringNumber = String(num);

console.log("\n----- NUMBER TO STRING -----");
console.log(stringNumber);
console.log(typeof(stringNumber));


// -------------------- NOTES --------------------

console.log("\n===== NOTES =====");
console.log('"33" -> 33 (valid conversion)');
console.log('"33abc" -> NaN (Not a Number)');
console.log('Type of NaN is "number"');
console.log("true -> 1, false -> 0");
console.log('"" (empty string) -> false');
console.log('"text" (non-empty string) -> true');
console.log("1 -> true, 0 -> false");
console.log("null -> 0 (in Number conversion)");
console.log("undefined -> NaN");
console.log("============================\n");