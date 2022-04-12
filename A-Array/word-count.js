//Un seul variable
const donne = ["ouvrez la fenêtre s'il vous plaît", ["s'il vous plaît", "ouvrez", "la"]];
let phrase = donne[0]
let misyazy = donne[1]
let count = 0
for(let i = 0; i < misyazy.length; i ++){
    if(phrase.includes(misyazy[i])){
        count = count + 1
    }
}
console.log(count)

//fonction
function wordCount(table){
    let sentence = table[0]
    let targetWords = table[1]
    let count = 0
    for(let i = 0; i < targetWords.length; i ++){
        if(sentence.includes(targetWords[i])){
            count = count + 1
        }
    }
    return count
}

console.log(wordCount(["ouvrez la fenêtre s'il vous plaît", ["s'il vous plaît", "ouvrez", "désolé"]])) ; // 2
console.log(wordCount(["conduire au cinéma", ["le", "conduire"]])) ; // 1
console.log(wordCount(["puis-je avoir cette canette", ["can", "je", "avoir"]])) ; // 3

