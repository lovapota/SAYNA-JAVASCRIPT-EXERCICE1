//test personnelle
//Un seul variable
const lava = [3, 1, 6, 9, 11]
let impair = 0
for(let i = 0; i < lava.length; i ++){
    if(lava[i] % 2 !== 0){
        impair = impair + 1
    }
}
console.log(impair)    

//Exercice
function arrayOdds(table){
    let noPair = 0
    for(let i = 0; i < table.length; i ++){
        if(table[i] % 2 !== 0){
            noPair = noPair + 1
        }
    }
    return noPair
}

console.log(arrayOdds([4,7,2,5,9]));//3

console.log(arrayOdds([11,31,58,99,21,60])) ; // 4

console.log(arrayOdds([100, 40, 4])) ; // 0