
function arrayOdds(table){
    let lova = 0;
    if(table % 2 !== 0){
        let table = table[i]
    }
    return lova
}


console.log(arrayOdds([4, 7, 2, 5, 9])) ; // 3

console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; // 4

console.log(arrayOdds([100, 40, 4])) ; // 0

//Devoir Sahaza
function arrayOdds(myArray){
    let nombreImpair = 0
    console.log(myArray.length);

    for (let i = 0; i < myArray.length; i++) {
            if(myArray[i] % 2 !== 0){
                    nombreImpair = nombreImpair + 1
            }
    }
    console.log(nombreImpair);
    return nombreImpair
}

console.log(arrayOdds([4,7,2,5,9]));

console.log(arrayOdds([11,31,58,99,21,60])) ; // 4

console.log(arrayOdds([100, 40, 4])) ; // 0