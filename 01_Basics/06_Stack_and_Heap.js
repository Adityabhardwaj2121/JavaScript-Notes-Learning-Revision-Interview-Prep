// “JavaScript manages memory automatically. Primitives are handled by value, and objects are handled by reference. Although we often explain this using stack and heap, it’s just a conceptual model—actual memory management depends on the engine.”


// STACK → primitive (copy)

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// HEAP → non-primitive (reference)

let obj1 = { name: "Aditya" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul


// NOTES:
// Stack → copy (no effect on original)
// Heap → reference (changes affect original)

