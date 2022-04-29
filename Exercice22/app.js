const form = document.getElementById('form');
const button = document.createElement('button');
button.setAttribute("type", "submit");
button.textContent = 'Envoyer';
form.appendChild(button);
const nom = form.firstElementChild;
const password = nom.nextElementSibling;
let dataNom = [];
let dataPassword = []
button.addEventListener('click', (e) => {
    dataNom.push(nom.value);
    dataPassword.push(password.value);
    e.preventDefault();
    console.log('formulaire soumis');
    for(let i = 0; i <  dataNom.length; i ++){
        console.log(dataNom[i]);
        console.log(dataPassword[i]);
    }
})
