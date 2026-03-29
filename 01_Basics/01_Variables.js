const acc_id = 12;

let acc_email = "email@example.com"

var acc_password = "12345678"

acc_city = "Delhi"

let acc_state

console.log(acc_id)
console.log(acc_email)
console.log(acc_password)
console.log(acc_city)
console.log(acc_state)

// acc_id = 20  // cannot change a constant value.

acc_email = "example2@example2.com"

acc_password = "987654321"

acc_city = "Bengluru"


console.log(acc_id)
console.log(acc_email)
console.log(acc_password)
console.log(acc_city)


function change1(){
    acc_password = 20;
    acc_email = "thirdchange@example.com";
}

change1(); // both will change

console.log(acc_email)
console.log(acc_password)


console.log("----------------------------------------------------")


{
    var a = 10;
    let b = 20;
}

console.log(a); 
// console.log(b); ReferenceError: b is not defined

// 👉 var:

// Ignores { }
// So a is still available outside

// 👉 let:

// Respects { }
// So b exists only inside block