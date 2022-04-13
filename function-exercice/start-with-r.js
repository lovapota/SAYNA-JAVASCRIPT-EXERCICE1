let startsWithR = function(str){
    if(str[0] === "r" || str[0] === "R"){
        lova = true
    }
    else{
        lova = false
    }
    return lova
}
console.log(startsWithR("roger that")) ; // true
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false
