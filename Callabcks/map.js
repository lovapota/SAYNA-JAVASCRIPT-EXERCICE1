const lists = [
    {nom : "Ordinateur", prix : 200},
    {nom : "TV", prix : 300},
    {nom : "Livre", prix : 100},
    {nom : "Téléphone", prix : 600},
    {nom : "Souris", prix : 50},
    {nom : "Clavier", prix : 75},
    {nom : "Voiture", prix : 2000},
]

//La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
const filterItems = lists.map((lova) => {
    return lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;
   