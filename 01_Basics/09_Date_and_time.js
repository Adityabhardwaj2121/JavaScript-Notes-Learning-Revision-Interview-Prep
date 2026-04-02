// A JavaScript Date is stored as milliseconds since:
// 1 Jan 1970, 00:00:00 UTC (UNIX epoch)

// Note: Output varies based on system time and timezone

// -------------------- Dates --------------------

let myDate = new Date();

console.log(myDate); // example: 2026-04-03T18:45:30.123Z
console.log("");

console.log(myDate.toString()); // Fri Apr 03 2026 11:45:30 GMT+0530 (India Standard Time)
console.log("");

console.log(myDate.toDateString()); // Fri Apr 03 2026
console.log("");

console.log(myDate.toLocaleString()); // 03/04/2026, 11:45:30 pm
console.log("");

console.log(myDate.toLocaleDateString()); // 03/04/2026
console.log("");

console.log(myDate.toISOString()); // 2026-04-03T18:45:30.123Z
console.log("");

console.log(myDate.toJSON()); // 2026-04-03T18:45:30.123Z
console.log("");

console.log(typeof myDate); // object
console.log("");


// -------------------- Create Custom Date --------------------

// Month is 0-based (0 = Jan, 4 = May)
let myCreatedDate = new Date(2026, 4, 24);
console.log(myCreatedDate.toDateString()); // Sun May 24 2026
console.log("");


// ❌ Incorrect (JS does NOT support DD-MM-YYYY reliably)
let myCreatedDate2 = new Date("02-09-2026");

console.log(myCreatedDate2.toLocaleString()); // likely: 09/02/2026, ... (Feb 9, not 2 Sept)
console.log("");


// ✅ Correct way (manual parsing for Indian format DD-MM-YYYY)
let input = "02-09-2026";

let [day, month, year] = input.split("-");
let myCreatedDate3 = new Date(year, month - 1, day);

console.log(myCreatedDate3.toLocaleString()); // 02/09/2026, ...
console.log("");


// -------------------- Timestamps --------------------

let myTimeStamp = Date.now();

console.log(myTimeStamp); // example: 1775215530123 (milliseconds)
console.log("");

console.log(myCreatedDate.getTime()); // milliseconds for that date
console.log("");


// Convert milliseconds to seconds
console.log(Date.now() / 1000); // decimal seconds

// Remove decimals
console.log(Math.floor(Date.now() / 1000)); // integer seconds
console.log("");


// -------------------- Date Methods --------------------

let newDate = new Date();

console.log(newDate); // current date object
console.log(newDate.getDate());   // 1–31 (day of month)
console.log(newDate.getMonth());  // 0-based (0 = Jan)
console.log(newDate.getDay());    // 0 = Sunday
console.log("");


// ISO format (safe and recommended)
let testDate = new Date('2026-03-29'); // month is normal (03 = March)

console.log(testDate.toLocaleDateString()); // 29/03/2026
console.log(testDate.getDay()); // 0 (Sunday)
console.log("");


// String interpolation
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); // e.g. 5 and the time is 1775215530123
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
