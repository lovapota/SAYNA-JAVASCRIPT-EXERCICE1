// 1.	Écrire un programme pour changer l'arrière-plan d'un document en cliquant sur le bouton. Utilisez le code couleur hexadécimal.
const bouton = document.createElement('button');
bouton.textContent = 'Change-bg';
document.body.appendChild(bouton);
bouton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#0b5345'
});
let compte = 0;
// 2.	Écrire un programme de compteur avec 3 boutons (augmentation, diminution et remise à zéro).
const p = document.createElement('p');
const co = document.createElement('p');
const aug = document.createElement('button');
const dim = document.createElement('button');
const reset = document.createElement('button');
aug.textContent = 'Augmente';
p.textContent = 'Manisa :';
co.textContent = `${compte}`
dim.textContent = 'Diminue';
reset.textContent = 'Reset';
document.body.appendChild(p);
document.body.appendChild(co);
document.body.appendChild(aug);
document.body.appendChild(dim);
document.body.appendChild(reset);
aug.addEventListener('click',() => {
    compte = compte + 1;
    co.textContent = `${compte}`; 
})
dim.addEventListener('click',() => {
    compte = compte - 1;
    co.textContent = `${compte}`;
})
reset.addEventListener('click',() => {
    compte = 0;
    co.textContent = `${compte}`;
});
// 3.	Construire un jeu de devinettes sur les nombres.
const numberSearch = Math.floor(Math.random() * 100);
let form = document.createElement('form');
let input = document.createElement('input');
let button = document.createElement('button');
form.appendChild(input);
form.appendChild(button);
let text = document.createElement('p');
let valiny = document.createElement('h1');
form.appendChild(text);
button.textContent = 'Submit';
input.setAttribute("type", "text");
button.setAttribute("type","onsubmit");
document.body.appendChild(form);
document.body.append(valiny);
valiny.style.display = 'none'
let lova = 0
button.addEventListener('click', (e) => {
    lova = lova + 1;
    console.log(numberSearch);
    if(input.value < numberSearch){
        text.textContent = 'Estimation est trop basse.'
    }
    else if(input.value > numberSearch){
        text.textContent = 'Estimation est trop haut.'
    }
    else{
        text.textContent = 'Vous avez gagner'
    }
    e.preventDefault();
    if(lova === 3){
        valiny.style.display = 'block';
        valiny.textContent = `Ny valiny dia : ${numberSearch}`;
        if(input.value == numberSearch){
            text.textContent = 'Vous avez devine!'
        }
    }
})
// 4.	Construisez un quiz de cinq questions.
let question = [
    'Quelle science etudie les atomes et les molecules',
    'La force d attraction de la lune est responsable, sur Terre',
    'Quel est le point d ebullition de l eau',
    'Combien de fois par jour inspirons nous?',
    'Par quelle unite de mesure estime t on la valeur d un diamant',
]
let reponse = [
    {A : 'A.La chimie', B : 'B.La physique', C : 'C.La biologie'},
    {A : 'A.des 4 saisons', B : 'du flux et du reflux des marees', C : 'des variables de temperature'},
    {A : 'A.100 C', B : 'B.0 C', C : 'C.1 000 C'},
    {A : 'A.20 000 fois', B : 'B.200 000 fois', C : 'C.2 000 C'},
    {A : 'A.Le carat', B : 'B.Le varat', C : 'C.Le barat'},
]

let quizz = document.createElement('form');
document.body.appendChild(quizz);
for(let i = 0; i < question.length; i ++){
    
    let fanotaniana = document.createElement('p');
    let choix1 = document.createElement('input');
    let choix2 = document.createElement('input');
    let choix3 = document.createElement('input');
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    quizz.appendChild(choix1);
    quizz.appendChild(label1);
    quizz.appendChild(choix2);
    quizz.appendChild(label2);
    quizz.appendChild(choix3);
    quizz.appendChild(label3);
    choix1.setAttribute("type","checkbox");
    choix2.setAttribute("type","checkbox");
    choix3.setAttribute("type","checkbox");
    quizz.appendChild(fanotaniana);
    fanotaniana.textContent = question[i];
    label1.textContent = `${reponse[i].A}`;
    label2.textContent = `${reponse[i].B}`;
    label3.textContent = `${reponse[i].C}`;
    
}





// Exigences :
// ●	Créez un formulaire HTML avec un quiz de cinq questions.
// ●	Chaque question doit comporter quatre réponses à choix multiple.
// ●	Lorsque l'utilisateur soumet le quiz, ajoutez un message sous chaque question pour lui faire savoir s'il a bien ou mal répondu (donnez-lui la bonne réponse).
// ●	À la fin du quiz, affichez le résultat eb. 2 correct / sur 5