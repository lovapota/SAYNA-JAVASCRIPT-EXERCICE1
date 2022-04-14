//Un seul object
let number = {
    a : 5,
    b : 15,
    c : 6,
    d : 9,
    e : 4,
};
let max = -9999999
let str = null
let element = []
for (const i in number) {
    if (max < number[i]) {
        max = number[i];
        str = i     
    }
}
element.push(str);
element.push(max); 
console.log(element)

//Fonction
function maxObjectValue(obj){
    let max = -9999999
    let str = null
    let element = []
    for (const i in number) {
        if (max < number[i]) {
            max = number[i];
            str = i     
        }
    }
    element.push(str);
    element.push(max);
     return element;
}
   
console.log(maxObjectValue({ a : 5, b : 2, c : 6, d : 7, e : 4 })) ; // ['d', 7]
console.log(maxObjectValue({ litchi : 11, ramboutan : 13, papaye : 9 })) ; // ['ramboutan', 13]
