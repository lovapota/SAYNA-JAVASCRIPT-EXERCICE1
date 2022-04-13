let isLong = function(str){
    if(str.length < 5){
        lova = false
    } else{
        lova = true
    }
    return(lova)
}

console.log(isLong("pie")) ; // false
console.log(isLong("kite")) ; // false
console.log(isLong("kitty")) ; // false
console.log(isLong("telescope")) ; // true
console.log(isLong("thermomètre")) ; // true
console.log(isLong("restaurant")) ; // true
