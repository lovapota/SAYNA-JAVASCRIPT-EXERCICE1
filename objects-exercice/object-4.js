let recette = {
    nom : "Crêpes à l'ancienne",
    difficulte : "facile",
    savoureux : true,
    ingrédients : ["oeufs", "lait", "beurre", "farine", "sucre"],
};
console.log(recette.nom) ;
console.log(recette["nom"]) ;
console.log(recette["ingrédients"].length) ;
console.log(recette.savoureux) ;
let someVariable = recette["difficulty"] ;
console.log(recette[someVariable]) ;
console.log(recette.quelqueVariable) ;
for (let i = 0 ; i < recette["ingrédients"].length ; i++) {
    console.log(recette.ingrédients[i]) ;
}
