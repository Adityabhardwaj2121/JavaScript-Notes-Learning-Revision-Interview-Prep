// Creating Objects

const olaUser = new Object(); // Singleton object
const olaUser2 = {}; // Object literal

olaUser.id = "1234acbd";
olaUser.name = "Samay";
olaUser.isLoggedIn = true;


// Nested Objects

const regularUser = {
    email: "someone@example.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Bhardwaj"
        }
    }
};

console.log(regularUser);

// Property does not exist directly inside regularUser
console.log(regularUser.firstname); // undefined

// Accessing nested objects
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

// Correct way to access nested properties
console.log(regularUser.fullname.userfullname.firstname);

// Optional Chaining (?)
// Access property only if the previous object exists
console.log(regularUser.fullname?.userfullname.firstname);


// Combining Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Creates a nested object
const obj3 = { obj1, obj2 };

console.log(obj3);

// Object.assign(target, source)

// Merges obj2 into obj1
// Modifies the original obj1
const obj4 = Object.assign(obj1, obj2);

console.log(obj4);

// Preferred way
// Creates a new object without modifying obj1
const obj5 = Object.assign({}, obj1, obj2);

console.log(obj5);

// Modern way using spread operator
const obj6 = { ...obj1, ...obj2 };

console.log(obj6);


// Array of Objects

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
];

// Accessing objects inside an array
console.log(users[1]);

// Accessing a specific property
console.log(users[1].email);


// Object Utility Methods

console.log(olaUser);

// Returns all keys as an array
console.log(Object.keys(olaUser));

// Returns all values as an array
console.log(Object.values(olaUser));

// Returns key-value pairs as nested arrays
console.log(Object.entries(olaUser));


// Checking if a property exists

console.log(olaUser.hasOwnProperty("isLoggedIn")); // true

console.log(olaUser.hasOwnProperty("isLogged")); // false