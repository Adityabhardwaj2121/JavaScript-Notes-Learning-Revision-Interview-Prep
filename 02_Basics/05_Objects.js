// Object Destructuring

const course = {
    courseName: "JS in Hindi",
    price: "99",
    courseInstructor: "AdiBro",
    courseInstructor2: "Aditya"
};


// Accessing Object Properties

console.log(course.courseInstructor);

// If a property is used frequently,
// object destructuring makes the code cleaner.


// Basic Destructuring

const { courseInstructor } = course;

console.log(courseInstructor);


// Destructuring with Alias

// courseInstructor2 is extracted
// and stored in a new variable named 'inst'

const { courseInstructor2: inst } = course;

console.log(inst);


// Why Use Destructuring?

// Instead of:

console.log(course.courseInstructor);

// We can write:

console.log(courseInstructor);

// This improves readability and reduces repetition.


// JSON (JavaScript Object Notation)

// JSON looks similar to a JavaScript object,
// but keys and string values are enclosed in double quotes.

// Example JSON:

// {
//     "name": "Hitesh",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }


// JSON Array Example

// [
//     {
//         "name": "Hitesh",
//         "courseName": "JS in Hindi"
//     },
//     {
//         "name": "Aditya",
//         "courseName": "JavaScript"
//     }
// ]