// -------------------- Merging Arrays --------------------

const heros1 = ["Captain", "Thor", "Ironman"];
const heros2 = ["Superman", "Flash", "Batman"];


// push → adds entire array as a single element
heros1.push(heros2); // modifies original array

console.log(heros1);
// output: [ 'Captain', 'Thor', 'Ironman', [ 'Superman', 'Flash', 'Batman' ] ]


// Accessing nested array
console.log(heros1[3]);     // [ 'Superman', 'Flash', 'Batman' ]
console.log(heros1[3][1]);  // Flash

// Nested arrays like this are usually not preferred



// -------------------- concat --------------------

const heros3 = ["Captain", "Thor", "Ironman"];

// concat → merges arrays and returns a new array (does NOT modify original)
let heros4 = heros3.concat(heros2);

console.log(heros4);
console.log(heros3); // original remains unchanged



// -------------------- Spread Operator --------------------

// Most commonly used way to merge arrays
// Does NOT modify original arrays

console.log([...heros3, ...heros2]);



console.log(" ");
console.log(" ");


// -------------------- flat --------------------

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// flat(depth) → removes nested arrays up to given depth
// Infinity → completely flattens array

const usable_arr = arr.flat(Infinity);
console.log(usable_arr);

console.log(" ");

const usable_arr2 = arr.flat(1); // removes only 1 level of nesting
console.log(usable_arr2);



console.log(" ");
console.log(" ");


// -------------------- Array Utility Methods --------------------

// Check if value is array
console.log(Array.isArray("Coding")); // false


// Convert string to array
console.log(Array.from("Coding")); // ['C','o','d','i','n','g']


// Convert object to array
console.log(Array.from({name: "coding"})); 
// returns [] → need to specify keys or values


// Example:
let obj = {name: "coding", age: 20};

console.log(Object.keys(obj));   // ['name', 'age']
console.log(Object.values(obj)); // ['coding', 20]



console.log(" ");


// -------------------- Array.of --------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creates array from given elements
console.log(Array.of(score1, score2, score3));

// duplicates are allowed
console.log(Array.of(score1, score2, score2, score2, score3));



// -------------------- Important Notes --------------------

/*
1. push(array) → adds array as single element (creates nested array)

2. concat() → merges arrays and returns new array

3. Spread operator (...) → best and most used way to merge arrays

4. flat(depth) → removes nested arrays
   - flat(1) → removes one level
   - flat(Infinity) → completely flattens

5. Array.isArray() → checks if value is array

6. Array.from() → converts iterable (like string) into array

7. Array.from(object) → returns empty array unless handled with keys/values

8. Object.keys() / Object.values() → useful for object to array conversion

9. Array.of() → creates array from values

10. concat() and spread → do NOT modify original arrays
*/