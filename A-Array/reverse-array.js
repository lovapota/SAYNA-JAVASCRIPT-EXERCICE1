//Un  seul variable
const lova = ["Four", "Five", "Six"];
let reverse = lova.reverse();
console.log(reverse);

//Fonction
function reverseArray(table){
    let reverseAr = table.reverse()
    return reverseAr
}

console.log(reverseArray(["Four", "Five", "Six", "Seven"])) ; // ['Seven', 'Six', 'Five', 'Four']
console.log(reverseArray([6, 1, 7])) ; // [7, 1, 6]
