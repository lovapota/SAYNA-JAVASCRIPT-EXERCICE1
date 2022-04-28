const special = document.getElementById('special');
const a = document.getElementsByTagName('a');
console.log(special);
console.log(a[0].getAttribute("href"));
const last = a[0].nextElementSibling;
last.setAttribute("class", "first");
last.textContent = 'i also have a class of first';
console.log(last);
const first = document.querySelectorAll('.first');
console.log(first);

