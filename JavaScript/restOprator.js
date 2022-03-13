// Rest and spread Operator
// Introduction in ES6


// Using rest operator
// used in collection to help with multiple values


// function sum(n1,n2){
//     console.log(n1+n2)
// }
// sum(2,3) // 5
// sum(2,3,4) //5
// sum(2,3,4,5) // 5

function sum(...numbers){
    let result=0;
    for(let i=0; i<numbers.length; i++){
        result=result + numbers[i];
    }
    console.log(result);
}

sum(2, 3); // 5
sum(2, 3, 4); // 9
sum(2, 3, 4, 5); // 14
