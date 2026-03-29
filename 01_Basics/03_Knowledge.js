let value = 3;
let negvalue = value


//Basics Arithmatic Operators 

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%2)

let str1 = "hello"
let str2 = "World"

let str3 = str1 + str2;

console.log(str3);

// Problem arrises in:

console.log("1" + 2);// output: 12
console.log(1 + "3");// output: 13
console.log("1" + 2 + 2); // value is 122 not "1" + 4 (since 2+2 = 4).
// But all are converted into string for additon

console.log(1 + 2 + "2"); // value is 32 here addition is done  since its at start with arithmatic first.
// to not create confusion use parenthesis. It gives much more clarity.

console.log(true) //simple
console.log(+true) // gives 1 output // this type of code creates confusion
// console.log(true+) error\

console.log(+"") // Outputs 0 , not good practice.

let num1,num2,num3;

num1 = num2 = num3 = 2 + 2// not a good practice for readiblity

// Increment:

let gamecounter = 100;
gamecounter++; //postfix
console.log(gamecounter);
++gamecounter; //prefix
console.log(gamecounter);

// continue to study both prefix and postfix on mdn and ecmascript official site
