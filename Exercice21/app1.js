const bouton = document.getElementsByTagName('button');
const h1 = document.getElementsByTagName('h1');
const a = document.getElementsByTagName('a');

bouton[0].addEventListener('click', (e) => {
    console.log(e.type);
    console.log(e.currentTarget);
});
h1[0].addEventListener('click', (e) => {
    console.log(e.type);
    console.log(e.currentTarget);
});
a[0].addEventListener('click', (e) => {
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.preventDefault())
});
