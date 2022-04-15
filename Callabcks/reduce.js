const lists = [
    {nom : "Ordinateur", prix : 200},
    {nom : "TV", prix : 300},
    {nom : "Livre", prix : 100},
    {nom : "Téléphone", prix : 600},
    {nom : "Souris", prix : 50},
    {nom : "Clavier", prix : 75},
    {nom : "Voiture", prix : 2000},
]
//La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
const filterItems = lists.reduce((lova) => {
    return lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;