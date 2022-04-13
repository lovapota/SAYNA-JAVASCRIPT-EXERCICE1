//Un seul variable
let arr1 = ["a", "c", "d", "b"] ;
let arr2 = ["b", "a", "y"] ;
let arr = []
for(let i = 0; i < arr1.length; i ++){
    for(let j = 0; j < arr2.length; j ++){
        if(arr1[i] === arr2[j])[
            lova = arr.push(arr2[j])
        ]
    }
}
console.log(arr)

//Fonction
function commonElements(data1, data2){
    let result = []
    for(let i = 0; i < data1.length; i ++){
        for(let j = 0; j < data2.length; j ++){
            if(data1[i] === data2[j]){
                addResult = result.push(data1[i])
            }
        }
    }
    return result
}

console.log(commonElements(["a", "c", "d", "b"], ["b", "a", "y"] )) ; // ['a', 'b']
console.log(commonElements([4, 7] , [32, 7, 1, 4])) ; // [4, 7] ;