//Un seul variable
const tab1 = ["a", "d", "c"];
const tab2 = ["c", "a", "b", "d"];
let result = [];
for(let i = 0; i < tab1.length || i < tab2.length; i ++){
       if(tab1.includes(tab2[i])){
           result.push(tab2[i])
       }
}
console.log(result)

//Fonction
function commonElements(table1, table2){
    let resultComEle = [];
    for(let j = 0; j < table1.length || j < table2.length; j ++){
        if(table1.includes(table2[j])){
            resultComEle.push(table2[j])
        }
    }
    return resultComEle
}
console.log(commonElements(['a', 'b', 'c'], ['c', 'a'])) ; // ['a', 'c']
console.log(commonElements(['chat', 'chien', 'souris', 'poisson'], ['chien', 'rat'])) ; // ['chien'].
console.log(commonElements(['skip', 'jump'], ['swim', 'hop'])) ; // []
