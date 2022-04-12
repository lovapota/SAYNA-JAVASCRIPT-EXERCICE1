
function arraySum(table){//avec plusieur variable
    let sum = 0;
    for (i = 0; i < table.length; i ++){
        sum = sum + table[i];
    }
    return sum; //obligatoire pour plusieurs variables
}
//Avec un seul variable

const array = [1, 7, 3, 4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
    console.log(sum)
}
console.log(sum)

//test personnelle
const arrays = [2 , 3 , 4, 9]
    let lova = 0
for (let i = 0; i < arrays.length ; i ++){ 
       lova = lova + arrays[i];
}
console.log(lova)

function somme(feno){
    let fitambary = 0
    for (let i = 0; i < feno.length; i ++){
        fitambary = fitambary + feno[i]
    }
    return fitambary
}
console.log(somme([4, 5]))
//Resultat
console.log(sum);

console.log(arraySum([6, 2, 3])) ; 

console.log(arraySum([7, 6, -5, 2])) ;

console.log(arraySum([8])) ;

console.log(arraySum([])) ;