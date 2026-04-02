// Arrays : The Array object allows storing multiple items under a single variable
// and provides methods for common operations.


// JavaScript arrays are resizable and can store different data types
// 0-based indexing

// Array copy operation creates a shallow copy
// A shallow copy means both arrays share the same references (same memory for objects)


// Example
const arr = [0,1,2,3,4,5];
console.log(arr[0]); // output: 0


// Another way to create array
const arr2 = new Array(1,2,3,4);
console.log(arr2.length); // output: 4
// length is a property, not a function → no ()



// -------------------- Array Methods --------------------

// push → adds value at end
arr.push(20);
console.log(arr);

// pop → removes last value
arr.pop();
console.log(arr);


// unshift → adds element at start (shifts all elements, not efficient)
arr.unshift(8);
console.log(arr);

// shift → removes first element (shifts all elements)
arr.shift();
console.log(arr);


// includes → checks if element exists (returns boolean)
console.log(arr.includes(5)); // true

// indexOf → gives index of element
console.log(arr.indexOf(4));  // 4
console.log(arr.indexOf(40)); // -1 (not found)


// join → converts array to string
const arr3 = arr.join();
console.log(arr);   // original array
console.log(arr3);  // string



// -------------------- Slice --------------------

const arr4 = [10,20,30,40,50];

console.log("Array before slice:", arr4);

// slice(start, end) → end is NOT included
const sliceArr = arr4.slice(1,3);

console.log("Sliced array:", sliceArr);
console.log("Array after slice:", arr4); // original array unchanged



// -------------------- Splice --------------------

const arr5 = [10,20,30,40,50];

console.log("Array before splice:", arr5);

// splice(start, count) → removes elements and modifies original array
const spliceArr = arr5.splice(1,3);

console.log("Spliced array:", spliceArr);
console.log("Array after splice:", arr5); // original array changed



// -------------------- Important Notes --------------------

/*
1. Arrays are 0-based indexed

2. Arrays are dynamic (can grow/shrink)

3. Can store mixed data types:
   [1, "hello", true]

4. push() / pop() → work at end (efficient)

5. shift() / unshift() → work at start (less efficient)

6. slice() → does NOT modify original array

7. splice() → modifies original array

8. includes() → returns true/false

9. indexOf() → returns index or -1 if not found

10. join() → converts array to string

11. Shallow copy:
    → Primitive values copied normally
    → Objects/arrays share same reference
*/