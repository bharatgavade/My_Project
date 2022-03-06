// Array => Collection of multiple values.
// Array stores data based on indexes.

//1 . Creating the array 
const arrayOfNumners =[10,20,30,40,50]


// 2. How to access one vale from array
console.log(arrayOfNumners[1])

// 3. how to add a value  to array
arrayOfNumners.push(60)
console.log(arrayOfNumners)

// 4. how to remove a value from array 
arrayOfNumners.pop();
console.log(arrayOfNumners)


// 5. how to insert an element using index.

arrayOfNumners.splice(2,0, 41)
console.log(arrayOfNumners)


// 6. how to delete value from array using index.
arrayOfNumners.splice(2,1)
console.log(arrayOfNumners)

//7. length or size

console.log(arrayOfNumners.length)

