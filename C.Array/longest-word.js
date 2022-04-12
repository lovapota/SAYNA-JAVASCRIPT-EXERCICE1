//Un seul variable
const data = "lova am pretty hungry";
let dataArray = data.split(" ");
let longueurText = 0;
let wordSearch = null;
reverse = dataArray.reverse()
    for (let i = 0; i < dataArray.length ; i++) {
        if (longueurText < dataArray[i].length) {
            longueurText = dataArray[i].length;
            wordSearch = dataArray[i];
        }
    }
console.log(wordSearch);

//fonction
function longestWord(string) {
    var arrayData = string.split(" ");
    var numberLongest = 0;
    var searchWord = null;
    arraysReverse = arrayData.reverse();
    for (var i = 0; i < arrayData.length; i++) {
        if (numberLongest < arrayData[i].length) {
            numberLongest = arrayData[i].length;
            searchWord = arrayData[i];
        }
    }
    return searchWord;
}
console.log(longestWord("lva am pretty hungry"));
console.log(longestWord("nous devrions penser en dehors de la boîte")) ; // "à l'extérieur".
console.log(longestWord("down the rabbit hole")) ; // "rabbit" (lapin)
console.log(longestWord("elephant down")) ; // "elephant".
