let contains = function(str1, str2){
    result = (str1.includes(str2))
    return result
}
console.log(contains("caterpillar", "pill")) ; // true
console.log(contains("lion's share", "on")) ; // true
console.log(contains("SORRY", "or")) ; // true
console.log(contains("tangent", "gem")) ; // false
console.log(contains("clock", "ok")) ; // false

