// spread Operator
// Introduction in ES6


// Using spread operator
// used in collection to help with multiple values

// Converts array into individual values

const indianCars = ["Tata", "Mahindra", "Maruti"];
const usCrs = ["Tesla", "Ferrari", "Ford"];

// create another array with values from both these array.
console.log(indianCars);
console.log(usCrs);
// indianCars.concat(usCrs);
// const result = [indianCars+usCrs]; // ['Tata,Mahindra,MarutiTesla,Ferrari,Ford']
const result = [...indianCars, ...usCrs]; // [ 'Tata', 'Mahindra', 'Maruti', 'Tesla', 'Ferrari', 'Ford' ]
const result2 = [...result,"KIA"]
console.log(result2);