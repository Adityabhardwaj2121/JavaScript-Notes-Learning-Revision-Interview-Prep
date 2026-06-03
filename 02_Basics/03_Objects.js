// JavaScript Objects

// Objects can be created in two ways:
// 1. Object Literals
// 2. Object Constructor (Object.create)


// Object Literals

const JsUser = {
    name: "Aditya",
    0: "hello",
    anime: "One Piece",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// Accessing Object Properties

console.log(JsUser.anime);      // Dot notation
console.log(JsUser["anime"]);   // Bracket notation

// Numeric keys must be accessed using brackets
console.log(JsUser[0]);


// Symbols in Objects

const mySym = Symbol("key1");

// Incorrect way (treated as a normal string key)

const JsUser2 = {
    name: "AdiBro",
    anime: "Bleach",
    mySym: "mykey1",
    isLoggedIn: true
};

console.log(JsUser2.mySym);          // mykey1
console.log(typeof JsUser2.mySym);   // string

// Here "mySym" is just a string key,
// NOT the Symbol stored in mySym.


// Correct way to use Symbol as a key

const JsUser3 = {
    name: "AdiBro2",
    anime: "Bleach",
    [mySym]: "mykeyhello",
    isLoggedIn: true
};

// Access Symbol property

console.log(JsUser3[mySym]);

// NOT:
console.log(JsUser3["mySym"]); // undefined

console.log(JsUser2); // Symbol not used
console.log(JsUser3); // Contains Symbol key


// Modifying Object Values

JsUser.email = "aditya@example.com";
JsUser.isLoggedIn = true;

console.log(JsUser);


// Object.freeze()

// Prevents further modifications

Object.freeze(JsUser);

JsUser.email = "adibro@example.com";

console.log(JsUser);

// Email remains unchanged because
// the object is frozen.


// Adding Functions to Objects

JsUser2.greeting = function () {
    console.log("Hello User");
};

console.log(JsUser2.greeting);
// Output: [Function (anonymous)]

JsUser2.greeting();
// Output: Hello User

// If wrapped inside console.log()

console.log(JsUser2.greeting());

// Output:
// Hello User
// undefined

// Reason:
// greeting() itself returns nothing,
// so JavaScript prints undefined.


// Using 'this' Keyword

JsUser2.greeting2 = function () {
    console.log(`Hello User ${this.name}`);
};

JsUser2.greeting2();

// Output:
// Hello User AdiBro

// 'this' refers to the current object
// from which the method is called.