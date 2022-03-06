// Data Types in JS
// 1. Number
// 2. string
// 3.object
// 4. function
// 5. undefined

let x; //undefined
console.log(typeof x)


x =220; //number
console.log(typeof x)

x= 'bharat' //string
console.log(typeof x)

x= {id:1,name:"bharat",lastname:"gavade"}
console.log(typeof x) //object

x= function print(){
    console.log("This is a function")
}
console.log(typeof x)

x = new Date();
console.log(x);
console.log(typeof x);

// operator to fins out instance of object.
console.log(x instanceof Date);

x = null; // defined with no data.
console.log(typeof x); // object
