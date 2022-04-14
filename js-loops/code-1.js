console.log("hello Friends");
for(let i = 0; i < 5; i ++){
    console.log("code-1");
}
console.log("goodbye code-1");
//code-2
console.log("au revoir code-2");
for (let i = 3; i <= 7; i ++){
    console.log("programme forme France");
    console.log(i);
}
console.log("bye code-2");
//code-3
let foo = function(){
    for(let num = 10; num > 0; num -=2){
        console.log(num);
    }
};
console.log("debut");
foo();
console.log("end");
foo();
//code-4
let word = "langue";
for(let i = 0; i < word.length; i ++){
    console.log(word[i])
}
//code-5
let sum = 0;
for(let i = 0; i < 5; i ++){
    sum += i
    console.log(sum);
}
console.log("grand total : " + sum) ;