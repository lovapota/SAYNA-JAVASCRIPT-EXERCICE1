//code-2-1
let blogging = "Quand la vie vous donne des citrons, faites de la limonade";
let hasOK = blogging.indexOf("ok");
if(hasOK > -1){
    console.log("yeet");
}
else if(blogging.length > 10){
    console.log("yes")
}
else{
    console.log("no")
}
let hasYou = blogging.indexOf("you");
let hasFun = blogging.indexOf("fun");
if(hasYou > -1 && hasFun > -1){
    console.log("cool");
}
else if(hasYou > -1){
    console.log("rad");
}
else if(hasFun > -1){
    console.log("dope");
}
else{
    console.log("nope");
}
//code-2-2
let q = 25;
if(q % 3 === 0 && q % 5 ===0){
    console.log("both");
}
else if(q % 3 === 0 || q % 5 === 0){
    console.log("either");
}
else{
    console.log("neither");
}
let r = 9;
if(r % 3 === 0 && r % 5 === 0){
    console.log("both");
}
else if(r % 3 === 0 || r % 5 === 0){
    console.log("either");
}
else{
    console.log("neither");
}
let s = 15;
if(s % 3 === 0 && s % 5 === 0){
    console.log("both");
}
else if(s % 3 === 0 || s % 5 === 0){
    console.log("either");
}
else{
    console.log("neither")
}