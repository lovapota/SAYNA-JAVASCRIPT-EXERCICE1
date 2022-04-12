//Un seul variable
let arr1 = ["a", "c", "d", "b"] ;
let arr2 = ["b", "a", "y"] ;
for(let i = 0; i < arr1.length; i ++){
    if(arr1[i] === arr2[i])

}
let arr = arr1.concat(arr2)
console.log(arr)

//Fonction
let arr4 = arr1.concat(arr2)
function commonElements(arr1, arr2){
    if(arr1 !== "" && arr2 !== ""){
        let arr4 = arr1.concat(arr2)
    }
    return arr4
}
