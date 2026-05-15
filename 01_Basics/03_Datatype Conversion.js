let score = 33;

console.log("----- SCORE (NUMBER) -----");
console.log(typeof(score)); // number

score = "33";

console.log("\n----- SCORE (STRING) -----");
console.log(typeof(score)); // string

let valueInNumber = Number(score);

console.log("\n----- AFTER NUMBER CONVERSION -----");
console.log(typeof(valueInNumber)); // number


// What happens when an invalid number string is used

let a = "33abc"; // invalid numeric string

console.log("\n----- INVALID NUMBER STRING -----");
console.log(typeof(a)); // string

let b = Number(a);

console.log(typeof(b)); // type of NaN is "number"
console.log(b); // invalid numeric conversion returns NaN


// -------------------- NULL --------------------

let val = null;

console.log("\n----- NULL -----");
console.log(typeof(val)); // object
console.log(Number(val)); // 0


// -------------------- UNDEFINED --------------------

let val2 = undefined;

console.log("\n----- UNDEFINED -----");
console.log(typeof(val2)); // undefined
console.log(Number(val2)); // NaN


// -------------------- BOOLEAN TO NUMBER --------------------

let c = true;
let d = false;

console.log("\n----- BOOLEAN TO NUMBER -----");

console.log(Number(c)); // 1
console.log(Number(d)); // 0


// -------------------- NUMBER TO BOOLEAN --------------------

let isLoggedIn = 1;

// Convert number to boolean
let status = Boolean(isLoggedIn);

console.log("\n----- NUMBER TO BOOLEAN -----");

console.log(status); // true

// Shortcut boolean conversion
let status2 = !!isLoggedIn;

console.log(status2); // true


// -------------------- EMPTY STRING --------------------

let name1 = "";

console.log("\n----- EMPTY STRING -----");

console.log(Boolean(name1)); // false
console.log(!!name1); // false


// -------------------- NON-EMPTY STRING --------------------

let name2 = "Hello";

console.log("\n----- NON-EMPTY STRING -----");

console.log(Boolean(name2)); // true
console.log(!!name2); // true


// -------------------- NUMBER TO STRING --------------------

let num = 33;

let stringNumber = String(num);

console.log("\n----- NUMBER TO STRING -----");

console.log(stringNumber); // "33"
console.log(typeof(stringNumber)); // string


// -------------------- NOTES --------------------

console.log("\n===== NOTES =====");

console.log('"33" -> 33 (valid number conversion)');
console.log('"33abc" -> NaN (invalid number conversion)');
console.log('Type of NaN is "number"');

console.log("true -> 1");
console.log("false -> 0");

console.log('"" (empty string) -> false');
console.log('"text" (non-empty string) -> true');

console.log("1 -> true");
console.log("0 -> false");

console.log("null -> 0 (when converted to Number)");
console.log("undefined -> NaN");

console.log("============================\n");
