//Un selu variable
let quantities1 = { cat : 3, oiseau : 1, chien : 2 } ;
let result = []
for(let n in quantities1){
    for(let m = 0; m < quantities1[n]; m ++){
        result.push(n);
        console.log(result)
    }
}
console.log(result)

//Fonction
function elementQuatites(obj){
    let list = []
    for(let i in obj){
        for(let j = 0; j < obj[i]; j ++){
            list.push(i)
        }
    }
    return list
}

console.log(elementQuatites({ cat : 3, oiseau : 1, chien : 2 })) ; // ['cat', 'cat', 'chat', 'oiseau', 'chien', 'chien']
console.log(elementQuatites({ blue : 3, marron : 1 } )) ; // ['blue', 'blue', 'blue', 'brown']