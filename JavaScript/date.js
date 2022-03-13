//Date Type in javascript.

//1. How to get current date and time?

const currentDate = new Date()

console.log(currentDate)

// 2. Date formats jn JavaScript.
console.log(currentDate.toDateString()) //date

console.log(currentDate.toTimeString()) //time

//3. how to get year from date
console.log(currentDate.getFullYear())

// 4. How to get month from date
console.log(currentDate.getMonth())

// 5. How to get hour from date
console.log(currentDate.getHours())


// 6. How to get day from date
console.log(currentDate.getDay())

// Which is the most useful library to work with dates
// moment js