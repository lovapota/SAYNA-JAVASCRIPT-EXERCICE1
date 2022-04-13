//code-0-1
if(true){
    console.log("foo");
}
if(false){
    console.log("bar")
}
//code-0-2
if(false || false){
    console.log("boop")
}
if(true || false){
    console.log("beep")
}
//code-0-3
let num = 30;
if(num > 0){
    console.log("zip");
}
if(num % 2 === 0){
    console.log("zoop");
}
//code-0-4
let word = "jeep"
if (word[0] === "d"){
    console.log("content");
}
else{
    console.log("Pas correct");
}
//code-0-5
let sentence = "roger that"
if(sentence[sentence.length - 1] === "t"){
    console.log("se termine par t")
}
else{
    console.log("ne se termine pas par t");
}
if(sentence.length <= 4){
    console.log("court");
}
else{
    console.log("long")
}