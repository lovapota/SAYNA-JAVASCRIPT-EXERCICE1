const lists = [
    {nom : "Ordinateur", prix : 200},
    {nom : "TV", prix : 300},
    {nom : "Livre", prix : 100},
    {nom : "Téléphone", prix : 600},
    {nom : "Souris", prix : 50},
    {nom : "Clavier", prix : 75},
    {nom : "Voiture", prix : 2000},
]

//filtre tout les elements qui accepte le codition
const filterItems = lists.filter((lova) => {
    return lova.prix > 100 ;
    }) ;
    console.log(lists) ;
    console.log(filterItems) ;
    