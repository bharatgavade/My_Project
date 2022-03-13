//Ternary Operator. ? ,:
// <conditionalExpression> ? <doifmatch> : <doifmatched>

// function IsEven(val){
//     if(val%2==0){
//         console.log("")
//         return true

//     }else{
//         return false
//     }
// }

function isEven(val){
    const result = val%2==0 ? true :false
    return result
}


console.log(isEven(100))
console.log(isEven(101))