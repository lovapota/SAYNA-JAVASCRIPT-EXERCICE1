const lists = [
    {nom : "Ordinateur", prix : 200},
    {nom : "TV", prix : 300},
    {nom : "Livre", prix : 100},
    {nom : "Téléphone", prix : 600},
    {nom : "Souris", prix : 50},
    {nom : "Clavier", prix : 75},
    {nom : "Voiture", prix : 2000},
]
//La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument.
const filterItems = lists.find((lova) => {
    return lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;
  