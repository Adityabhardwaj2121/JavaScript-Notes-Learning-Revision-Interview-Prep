// if

if(true){
    // will execute
}

if(false){
    // will not execute
}


const isUserloggedIn = true
const temperature = 41

// <, >, <=, >=, ==, !=, ===, !==

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // give error since let is inside if condition


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); // Dot use comma like this, its not a good practice

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // && checks all condition to be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestuser) {  // || checks for only one to be true
    console.log("User logged in");
}