// Basic Comparision 

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//output space
// console.log(" ")
// console.log(" ")
// console.log(" ")

// Important comparision

console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null>=0);  // true


// ----- WHY THIS HAPPENS -----

// Comparison → null becomes 0
console.log(Number(null)); // 0

// null > 0  → 0 > 0  → false
// null >= 0 → 0 >= 0 → true


// ----- BUT == IS DIFFERENT -----

// null only equals undefined
console.log(null == undefined); // true

// not equal to 0
console.log(null == 0); // false


// ----- UNDEFINED COMPARISON -----

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false


// ----- WHY -----

// undefined → becomes NaN in comparisons
console.log(Number(undefined)); // NaN

// Any comparison with NaN → always false


// ----- SPECIAL RULE -----

console.log(undefined == null); // true


//strict check

console.log("2" === 2) // false , because === also checks the datatypes

// Note: Avoid null and undefined comparisons