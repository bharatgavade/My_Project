// Loops
    //1. Do something in loop
    //2. Repeat similar operations.


//1. While loop
// Print numbers from 1 to 10

let i=1;
while(i<=10){
    console.log(i)
    i =i+1
}

// reverse  astring
// my name is Bharat

const str = " my name is Bharat" 
console.log(str.length)
const index = str.length -1
let reverseString = ""
for(let i=index; i>=0;i--){
    reverseString = reverseString.concat(str[i])

}
console.log(reverseString)