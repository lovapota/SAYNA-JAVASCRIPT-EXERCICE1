let result = [];
let valiny = []
for(let i = 1; i <= 100; i ++){
    let lova = result.push(i);
    if(i % 3 === 0 && i % 5 === 0){
         lova = "FizzBuzz";
    }
    else if(i % 5 === 0){
        lova = "Buzz"
    }
    else if(i % 3 === 0){
        lova = "Fizz"
    }
    valiny.push(lova) 
}
console.log(valiny)