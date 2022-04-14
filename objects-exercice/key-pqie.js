//Avec des vaaribales donnees
let cat1 = {
    name : "jinkee",
    breed : "calico" 
};
let cat2 = {
    name : "garfield",
    breed : "red tabby",
};
let valiny = []
valiny.push(cat1["breed"])
valiny.push(cat2["breed"])

console.log(valiny)

//fonction
function keyPair(Obj1, Obj2, key){
    let result = [];
    result.push(Obj1[key]);
    result.push(Obj2[key])
    return result
}

console.log(keyPair({name : "linkee", breed : "callico"}, {name : "garfield", breed : "red tabby"}, "breed")); ; // [ 'calico', 'redtabby' ]
console.log(keyPair({ name : "volleyball", team : true }, { name : "golf", team : false }, "team")) ; // [ true, false ]