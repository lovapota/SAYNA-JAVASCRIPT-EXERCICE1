const first = document.getElementsByClassName('first');
const last = document.getElementById('last');
const nextElement = first[0].nextElementSibling;//Pour voir le next element
const nextNode = first[0].nextSibling;//Pour avoir le next noeud
nextElement.style.color = 'red';
console.log(nextElement);
console.log(nextNode);
const third = last.previousElementSibling;
const troisième = last.previousSibling;
console.log(third);
console.log(troisième);
console.log(first[0].nextSibling.nextSibling);//OK




// previousSibling
// nextSibling
// retourner les espaces blancs
