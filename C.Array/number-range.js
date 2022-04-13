//Un seul variable
const data = [14, 24, 3]
let result = [data[0]]
for(let i = 0; i !== 1000; i ++){
    if(result[i] < data[1]){
        lova = result.push(result[i] + data[2])
    }
    if(result[i] > data[1]){
        adala = result.pop()
    }
}
console.log(result)

//Fonction
function numberRange(table){
    let rangeNumber = [table[0]]
    for(let i = 0; i !== 1000; i ++){
        if(rangeNumber[i] < table[1]){
            addValue = rangeNumber.push(rangeNumber[i] + table[2])
        }
        if(rangeNumber[i] > table[1]){
            removeValue = rangeNumber.pop()
        }
    }
    return rangeNumber
}

console.log(numberRange([10, 40, 5])) ; // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange([14, 24, 3])) ; // [14, 17, 20, 23].
console.log(numberRange([8, 35, 6])) ; // [8, 14, 20, 26, 32]
