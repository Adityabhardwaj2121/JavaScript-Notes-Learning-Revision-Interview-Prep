// Strings in JS can be denoted with both single (' ') and double (" ") quotation

const name = "AdiBro"
const repoCount = 15

// Old / Outdated syntax (string concatenation using +)
console.log(name + " " + repoCount + " value");

// Modern syntax using Template Literals (backticks ` `)
// Syntax: `text ${variable}`
console.log(`My name is ${name} and my repo count is ${repoCount}`);


// Creating String using constructor (object type)
const gameName = new String('Codepact');

console.log(gameName);        // Full String object
console.log(gameName[0]);     // Access character using index

// Accessing prototype (contains all string methods)
console.log(gameName.__proto__); // __proto__

// Basic String properties & methods
// Syntax: string.method()

console.log(gameName.length);        // Length of string
console.log(gameName.charAt(2));     // Character at index
console.log(gameName.toUpperCase()); // Convert to uppercase

// Finding index of character
console.log(gameName.indexOf('t'))   // Returns index
console.log(gameName.indexOf('z'))   // Returns -1 if not found


// Substring & Slice

const var1 = new String("Hello-World");

// substring(start, end)
// Syntax: string.substring(start, end)
// Note: cannot use negative values
const change = var1.substring(0, 4);
console.log(change);

// slice(start, end)
// Syntax: string.slice(start, end)
// Note: supports negative indexing

const change2 = var1.slice(0, 4);    // same as substring → takes index 0 to 3 → "Hell"

const change3 = var1.slice(-8, 4);   // negative start index
// -8 → 11 - 8 = 3 → slice(3, 4) → takes index 3 only → "l"

const change4 = var1.slice(-6, 4);   // negative start index
// -6 → 11 - 6 = 5 → slice(5, 4)
// start > end → returns "" (empty string)

console.log(change2); // "Hell"
console.log(change3); // "l"
console.log(change4); // ""


const var2 = "              Hello              "

console.log(var2);          // prints string with spaces
console.log(var2.trim());   // removes leading & trailing spaces → "Hello"


const url = "http://adibro.com/adi%bro"

console.log(url.replace('%20', '-')); 
// replaces '%20' with '-' → here no '%20' present, so string remains unchanged

console.log(url.includes('adi'));   
// checks if 'adi' is present → true

console.log(url.includes('Hello')); 
// checks if 'Hello' is present → false


console.log(var1.split("-")); 
// splits string at '-' → ["Hello", "World"]

console.log(var1.split("l")); 
// splits at every 'l' → ["He", "", "o-Wor", "d"]