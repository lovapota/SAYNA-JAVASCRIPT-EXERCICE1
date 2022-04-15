function forEachSum(tables){
    let result = tables.reduce((a, b) => a + b, 0);
    return result
}
console.log(forEachSum([10, 3, 5])) ; // 18
console.log(forEachSum([-6, 7, 9, 4])) ; // 14
console.log(forEachSum([1, 2]))