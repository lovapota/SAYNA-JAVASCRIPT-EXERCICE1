let dog = {
    nom : "Mamy",
    âge : 5,
    breed : "carlin",
    couleur : "fawn",
    favoriteFoods : ["bacon"],
};
console.log(dog.âge) ;
console.log(dog.breed) ;
console.log(dog.favoriteFoods) ;
dog.âge ++ ;
dog.breed = dog.breed.toUpperCase() ;
dog.favoriteFoods.push("saucisse") ;
console.log(dog.âge) ;
console.log(dog.breed) ;
console.log(dog.favoriteFoods) ;
for (let property in dog) {
    console.log(property + " est " + dog[property]) ;
}