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
    '1-Quelle science etudie les atomes et les molecules',
    '2-La force d attraction de la lune est responsable, sur Terre',
    '3-Quel est le point d ebullition de l eau',
    '4-Combien de fois par jour inspirons nous?',
    '5-Par quelle unite de mesure estime t on la valeur d un diamant',
]
let reponse = [
    {A : 'A.La chimie', B : 'B.La physique', C : 'C.La biologie'},
    {A : 'A.des 4 saisons', B : 'du flux et du reflux des marees', C : 'des variables de temperature'},
    {A : 'A.100 C', B : 'B.0 C', C : 'C.1 000 C'},
    {A : 'A.20 000 fois', B : 'B.200 000 fois', C : 'C.2 000 C'},
    {A : 'A.Le carat', B : 'B.Le varat', C : 'C.Le barat'},
]
let izy = ['La chimie', 'des 4 saisons', '100 C', '20 000 fois', 'Le carat'];

let quizz = document.createElement('form');
document.body.appendChild(quizz);
let envoyer = document.createElement('button');
envoyer.textContent = 'Resultat';
quizz.appendChild(envoyer);
let safidy1 = [];
let safidy2 = [];
let safidy3 = [];
for(let i = 0; i < question.length; i ++){
    let fanotaniana = document.createElement('p');
    let choix1 = document.createElement('input');
    let choix2 = document.createElement('input');
    let choix3 = document.createElement('input');
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    quizz.appendChild(fanotaniana);
    quizz.appendChild(choix1);
    quizz.appendChild(label1);
    quizz.appendChild(choix2);
    quizz.appendChild(label2);
    quizz.appendChild(choix3);
    quizz.appendChild(label3);
    choix1.setAttribute("type","radio");
    choix1.setAttribute("name", `question${i}`);
    choix2.setAttribute("type","radio");
    choix2.setAttribute("name", `question${i}`);
    choix3.setAttribute("type","radio");
    choix3.setAttribute("name", `question${i}`);
    fanotaniana.textContent = question[i];
    label1.textContent = `${reponse[i].A}`;
    label2.textContent = `${reponse[i].B}`;
    label3.textContent = `${reponse[i].C}`; 
    choix1.addEventListener('click', () => {
        safidy1.push(1);
        safidy2.push(0);
        safidy3.push(0);
    })
    choix2.addEventListener('click', () => {
        safidy1.push(0);
        safidy2.push(1);
        safidy3.push(0);
    })
    choix3.addEventListener('click', () => {
        safidy1.push(0);
        safidy2.push(0);
        safidy3.push(1);
    })
};
envoyer.addEventListener('click', (e) => {
    let valiny = document.createElement('h2');
    document.body.appendChild(valiny);
    let iza =[];
   
    for(let j = 1 ; j <= 5; j ++){
        let textV = document.createElement('h3');
        document.body.appendChild(textV);
        textV.textContent = `${j} - ${izy[j]}`;
        if(safidy1[j] === 1){
            iza.push(2);   
        }
    };
    console.log(iza);
    console.log(safidy1);
    valiny.textContent = `Le résultat est de ${iza.length} corrects / sur 5`;
    e.preventDefault();
})