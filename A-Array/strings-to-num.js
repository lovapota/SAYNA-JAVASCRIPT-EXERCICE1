//Un seul variable
const Isa = ["akondro", "paoma", "zavoka", "voasary"]

textNumber = [];
for(let i = 0; i < Isa.length; i ++){
    beloha = textNumber.push(Isa[i].length)    
}

console.log(textNumber)

//fonction
function stringsToNum(table){
    isaCaractere = [];
    for(let i = 0; i < table.length; i ++){
        addNumber = isaCaractere.push(table[i].length)
    }
    return isaCaractere
}

console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 4]
console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
