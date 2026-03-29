// Datatypes: Two types → 1) Primitive  2) Non-Primitive


// 1) Primitive (value)


let name = "Aditya"    // string
let age = 19           // number => 2 to power 53
let isStudent = true   // boolean : true or false
let x                  // undefined
let y = null           // null => a type and also a standalone value
let id = Symbol("id")  // symbol (unique)
let big = 123456789n   // bigint (large number)


// copy example
let a = 10
let b = a
b = 20

console.log(a) // 10 (no change)
console.log(b) // 20

// To find the type of the variable etc. we use "typeof"
// To find the type of a variable we use "typeof"

console.log(typeof name) // string
console.log(typeof x)    // undefined (variable declared but no value)
console.log(typeof null) // object ❗ (this is a bug in JavaScript from early days, not fixed because it would break existing code / backward compatibility)
console.log(typeof(null)) // you can also write typeof as a function by having data in paranthesis.


// 2) Non-Primitive (reference)
//Basics

let user = {name: "Aditya", age: 19} // object
let arr = [1,2,3]                   // array

// copy example
let obj1 = {value: 10}
let obj2 = obj1
obj2.value = 20

console.log(obj1.value) // 20 (changed)
console.log(obj2.value) // 20