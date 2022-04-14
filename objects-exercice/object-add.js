//Avec des variables
let obj1 = { x : 3, y : 10, k : 4} ;
let obj2 = { y : 2, x : 1, l : 5} ;
let result = {
    ...obj1,
    ...obj2
}
for(let n in obj1){
    for(let m in obj2){
        if(n === m){
            result[n] = obj1[n] + obj2[m];
        }
    }
}
console.log(result)

//Fonction
function objectAdd(Obj1, Obj2){
    let OBJ = {
        ...Obj1,
        ...Obj2
    }
    for(let i in Obj1){
        for(let j in Obj2){
            if(i === j){
                OBJ[i] = Obj1[i] + Obj2[j];
            }
        }
    }
    return OBJ
}
console.log(objectAdd({ x : 3, y : 10}, { y : 2, x : 1} )) ; // { x : 4, y : 12 }
console.log(objectAdd({ a : 3, b : 2, c : -1} , { b : 5, c : 1, e : 4} )) ; // { a : 3, b : 7, c : 0, e : 4