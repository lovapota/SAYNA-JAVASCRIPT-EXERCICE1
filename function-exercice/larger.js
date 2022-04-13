let larger = function(num1, num2){
    if(num1 < num2){
        result = num2
    }
    else{
        result = num1
    }
    return result
}
console.log(larger(256, 400)) ; // 400
console.log(larger(31, 4)) ; // 31
console.log(larger(-6, 7)) ; // 7
console.log(larger(11.3, 11.2)) ; // 11.3
console.log(larger(-10, -3)) ; // -3
