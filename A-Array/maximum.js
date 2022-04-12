//Un seul variable
const arrays = [4, 6, 3, 9]
let max = Math.max(... arrays)
console.log(max)

//fonction
function maximum(table){
    let max = Math.max( null, ... table);
    return max
}

console.log(maximum([4, 6, 3, 9])) ; // 7
console.log(maximum([13, 15, 21, 11, 2])) ; // 19
console.log(maximum([])) ; // null
