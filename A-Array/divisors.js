//Un seul variable
const isaZaraina = 15
let valiny = []
for(let i = 1; i <= isaZaraina; i ++){
    if(isaZaraina % i === 0){
        alefa = valiny.push(i)
    }
}
console.log(valiny)
console.log(Math.max(valiny))

//fonction
function divisors (number){
    let result = []
    for(let i = 1; i <= number; i ++){
        if(number % i === 0){
            addResult = result.push(i)
        }
    }
    return result
}
console.log(divisors(15)) ; // [1, 3, 5, 15].
console.log(divisors(7)) ; // [1, 7] 
console.log(divisors(24)) ; // [1, 2, 3, 4, 6, 8, 12, 24]
