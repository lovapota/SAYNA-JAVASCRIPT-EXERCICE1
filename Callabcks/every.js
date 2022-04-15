const lists = [
    {nom : "Ordinateur", prix : 200},
    {nom : "TV", prix : 300},
    {nom : "Livre", prix : 1000},
    {nom : "Téléphone", prix : 600},
    {nom : "Souris", prix : 500},
    {nom : "Clavier", prix : 750},
    {nom : "Voiture", prix : 1000},
]
//La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
const filterItems = lists.every((lova) => {
    lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;