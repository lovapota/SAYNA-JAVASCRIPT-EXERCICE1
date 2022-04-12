//Un seul variable
const text = "lova fenosoa";

let valiny = text[0]

for(let i = 0; i < text.length; i ++){
    if(text[i] === " "){
        valiny = valiny + text[i + 1]
    }
}
valiny = valiny.toUpperCase()
console.log(valiny)

//fonction
function makeAcronym(table){
    let acronym = table[0]
    for(let i = 0; i < table.length; i ++){
        if(table[i] === " "){
            acronym = acronym + table[i + 1]
        }
    }
    acronym = acronym.toUpperCase()
    return acronym
}
console.log(makeAcronym("los Angeles")) ; // LA
console.log(makeAcronym("same stuff different day")) ; // SSDD
console.log(makeAcronym("Laugh out loud")) ; // LOL
console.log(makeAcronym("don't over think stuff")) ; // DOTS













