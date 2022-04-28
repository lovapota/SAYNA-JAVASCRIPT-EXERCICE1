const ul = document.getElementById('first');
console.log(ul.innerHTML);
const item = document.getElementsByClassName('item');
console.log(item[0].textContent);
const div = document.getElementById('second');
console.log(div.textContent);
ul.innerHTML = `<li>J'ai deja changer</li>
<li>Voici la nouvelle liste</li>`;
console.log(ul.textContent);
