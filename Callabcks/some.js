const lists = [
    {nom : "Ordinateur", prix : 20},
    {nom : "TV", prix : 30},
    {nom : "Livre", prix : 100},
    {nom : "Téléphone", prix : 60},
    {nom : "Souris", prix : 50},
    {nom : "Clavier", prix : 75},
    {nom : "Voiture", prix : 200},
]
//La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
const filterItems = lists.some((lova) => {
    return lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;