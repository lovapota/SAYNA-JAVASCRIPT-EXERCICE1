const parent = document.getElementById('unorderList');//Appeler l'element parent
//Creer les elements
const ul = document.createElement('ul');
const liFist = document.createElement('li');
const liSecond = document.createElement('li');
const liThird = document.createElement('li');
const texteFirst = document.createTextNode('noeud de texte one');
const texteSecond = document.createTextNode('noeud de texte two');
const texteThird = document.createTextNode('noeud de texte three');

//Ajouter l'element ul sur le parent id = unorderList
parent.appendChild(ul);

//Ajouter les elements de la liste sur ul
ul.appendChild(liFist);
ul.appendChild(liSecond);
ul.appendChild(liThird);

//Ajouter les elements texte sur les listes
liFist.appendChild(texteFirst);
liSecond.appendChild(texteSecond);
liThird.appendChild(texteThird);
