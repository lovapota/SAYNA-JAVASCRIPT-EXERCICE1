const h2 = document.getElementsByTagName('h2');
const button = document.getElementsByClassName('btn');
const blue = document.getElementsByClassName('blue');

function changeColors(){
    
    if(h2[0].style.backgroundColor === ''){
        h2[0].setAttribute("class","blue");
        h2[0].style.backgroundColor = 'blue';
    }
    else if(h2[0].style.backgroundColor === 'blue'){
        h2[0].removeAttribute("class","blue");
        h2[0].style.backgroundColor = 'transparent'; 
    }
    
}
button[0].addEventListener('click',changeColors);
button[0].addEventListener('click', () => {
    console.log('you clicked me')
})









// select element
// addEventListener()
// what event, what to do



// 1.	Changez l'arrière-plan de la balise h2 lors du clic sur le bouton.
// Note : vous pouvez utiliser classList pour ajouter et enlever la classe de h2 de sorte que chaque fois qu'il y a un événement de clic, la couleur de fond est ajoutée ou enlevée.
// 2.	Écrivez une fonction changeColors(), ainsi au clic du bouton la fonction changeColors est appelée, si la couleur est bleue alors supprimez la classe blue, sinon ajoutez la classe blue.
// 3.	Événements de la souris
// a.	Au clic du bouton console.log('you clicked me');
// b.	Lorsque la souris descend, console.log('down') ;
// c.	Lorsque la souris monte, console.log('up') ;
// d.	À l'entrée de la souris, écrivez une fonction pour ajouter une classe blue à la balise h2.
// e.	En quittant la souris, écrivez une fonction pour supprimer la classe blue de la balise h2.
// f.	Notez la création de la classe dans le fichier css pour que vous puissiez voir le résultat.
