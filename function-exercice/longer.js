let longer = function(str1, str2){
    if (str1.length >= str2.length){
        longerStr = str1
    }
    else{
        longerStr = str2
    }
    return longerStr
}
console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket'
console.log(longer("flanelle", "durable")) ; // "flanelle".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' 
