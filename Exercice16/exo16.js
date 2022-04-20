const first = document.getElementsByClassName('first');
first[0].style.color = 'red';
const test = first[0].nextElementSibling;
console.log(test)
test[0].style.backgroundColor = 'red';

