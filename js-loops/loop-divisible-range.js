function reverseIterate(str){
    let sliptWord = str.split("");
    sliptWord.reverse();
    let result = sliptWord.join("");
    for(let i = 0; i < result.length; i ++){
        let valiny = result[i];
        console.log(valiny);
    }
}
reverseIterate("carrot");
reverseIterate("box");