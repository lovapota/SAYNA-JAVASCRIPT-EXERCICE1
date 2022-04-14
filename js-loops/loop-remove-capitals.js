function removeCapitals(str){
   return(str.replace(/[A-Z]/g,""))
}


console.log(removeCapitals("fOrEver")) ; // 'frver'.
console.log(removeCapitals("raiNCoat")) ; // "raioat".
console.log(removeCapitals("clr Door")) ; // "clr oor


