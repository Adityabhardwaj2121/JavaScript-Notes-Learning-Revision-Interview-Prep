// A JavaScript Date is stored as milliseconds since:
// 1 Jan 1970, 00:00:00 UTC (UNIX epoch)

// -------------------- Dates --------------------

let myDate = new Date();

console.log(myDate);
console.log("");

console.log(myDate.toString());
console.log("");

console.log(myDate.toDateString());
console.log("");

console.log(myDate.toLocaleString());
console.log("");

console.log(myDate.toLocaleDateString());
console.log("");

console.log(myDate.toISOString());
console.log("");

console.log(myDate.toJSON());
console.log("");

console.log(typeof myDate); // object
console.log("");


// -------------------- Create Custom Date --------------------

// Month is 0-based (0 = Jan, 4 = May)
let myCreatedDate = new Date(2026, 4, 24);
console.log(myCreatedDate.toDateString());
console.log("");


// ❌ Incorrect (JS does NOT support DD-MM-YYYY reliably)
let myCreatedDate2 = new Date("02-09-2026");

// Likely interpreted as Feb 9, 2026 (NOT 2 Sept)
console.log(myCreatedDate2.toLocaleString());
console.log("");


// ✅ Correct way (manual parsing for Indian format DD-MM-YYYY)
let input = "02-09-2026";

let [day, month, year] = input.split("-");
let myCreatedDate3 = new Date(year, month - 1, day);

console.log(myCreatedDate3.toLocaleString());
console.log("");


// -------------------- Timestamps --------------------

let myTimeStamp = Date.now();

console.log(myTimeStamp); // current time in milliseconds
console.log("");

console.log(myCreatedDate.getTime()); // milliseconds for given date
console.log("");


// Convert milliseconds to seconds
console.log(Date.now() / 1000); // decimal value

// Remove decimals
console.log(Math.floor(Date.now() / 1000));
console.log("");


// -------------------- Date Methods --------------------

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());   // day of month (1–31)
console.log(newDate.getMonth());  // 0-based (0 = Jan)
console.log(newDate.getDay());    // 0 = Sunday
console.log("");


// ISO format (safe and recommended)
let testDate = new Date('2026-03-29');   // ISO format → month is normal (03 = March)

console.log(testDate.toLocaleDateString());// prints date in local format (e.g., 29/3/2026)
console.log(testDate.getDay()); // 0 = Sunday
console.log("");


// String interpolation
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);
console.log("");


// -------------------- Formatting --------------------

newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
});


// -------------------- Important Notes --------------------

/*
1. JavaScript Date stores time in milliseconds since 1 Jan 1970 (UTC)

2. Month is 0-based:
   Jan = 0, Feb = 1, ..., Dec = 11

3. getDay() returns weekday:
   0 = Sunday, 1 = Monday, ..., 6 = Saturday

4. getDate() returns day of month (1–31)

5. Avoid using "DD-MM-YYYY" format directly
   → Not reliable, may be interpreted incorrectly

6. Always use:
   → ISO format: "YYYY-MM-DD"
   → OR manual parsing for custom formats

7. Date.now() gives current time in milliseconds

8. To convert milliseconds to seconds:
   → divide by 1000
   → use Math.floor() to remove decimals

9. Store dates in ISO format (best practice for DB)

10. Use toLocaleString() / toLocaleDateString() for display
    → supports locale and timezone formatting
*/