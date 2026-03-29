const score = 400;
console.log(score); // simple number (primitive)

const balance = new Number(100); // way to create number using objects
console.log(balance);

console.log(balance.toString()); // converts number to string
console.log(typeof balance.toString()); // output is "string"

console.log(balance.toFixed(2)); // fixes digits value after decimal places

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); 
// rounds off to precision value → "23.9"

const otherNumber2 = 1123.8966;
console.log(otherNumber2.toPrecision(3)); 
// rounds off to precision value → "1.12e+3"

const hundreds = 100000000;

console.log(hundreds.toLocaleString()); 
// International number system generally, but in my case system location is India,
// so it is using the Indian number system by default

console.log(hundreds.toLocaleString('en-IN')); // Indian number system

// Since by default my system is using the Indian system according to my location,
// to keep good practice and be precise with what type of system is to be implemented,
// enforce the number system type in the JS code

// To enforce international system:
console.log(hundreds.toLocaleString('en-US'));


//++++++++++++++++++++++++++++++++++++++++++++++++
                    //Math//
//++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math) // It is an object that contains Math methods and constants.

console.log(Math.abs(-4)) // converts negative to positive → 4
console.log(Math.round(4.3)); // rounds to nearest integer → 4

// To control rounding up or down:

console.log(Math.ceil(4.2)) // always rounds up → 5
console.log(Math.floor(4.9)) // always rounds down → 4

console.log(Math.min(4, 3, 6, 8)); // → 3
console.log(Math.max(4, 3, 6, 8)); // → 8


console.log(Math.random()); 
// gives a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random()*10);
// gives value between 0 and 10 (not including 10)

// to get random value between 1 to 10
console.log(Math.random() * 10 + 1); 
// shifts range to 1–11 (not including 11), includes decimals
// +1 is added so minimum value becomes 1 instead of 0

console.log(Math.floor(Math.random() * 10 + 1)); 
// removes decimals → gives integer from 1 to 10 (both included)


// to make value between 10 and 20 (including them)

const min = 10;
const max = 20;

console.log((Math.random() * (max - min + 1)) + min); 
// gives value between 10 and 21 (not including 21), with decimals

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
// gives integer values from 10 to 20 (both included)


//++++++++++++++++++++++++++++++++++++++++++++++++
            //Random Reminder//
//++++++++++++++++++++++++++++++++++++++++++++++++

// Math.random() → [0, 1)

// General formula:
// Math.floor(Math.random() * (max - min + 1)) + min
// multiply by total values → (max - min + 1)
// +min shifts the range

// Example:
// 0 to 10 → Math.floor(Math.random() * 11) → 0 to 10
// 0 to 16 → Math.floor(Math.random() * 17) → 0 to 16

// If max is NOT included:
// use (max - min) instead of + 1