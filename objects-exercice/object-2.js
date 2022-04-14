let restaurant = {
    nom : "Bob's Burgers",
    location : "123 Ocean Avenue",
    proprietaires : ["Bob Belcher", "Linda Belcher"],
    creation : 2011,
    menu : ["burgers", "frites",],
};
console.log("Les proprietaires du restaurant sont : " + restaurant.proprietaires[0] + "et " + restaurant.proprietaires[0] + ".") ;
let someKey = restaurant["menu"] ;
console.log(someKey) ;
console.log(restaurant.menu) ;
console.log(restaurant["menu"]) ;
console.log(restaurant[someKey]) ;
console.log(restaurant.someKey) ;
console.log(restaurant.menu.includes("frites")) ;
console.log(restaurant.menu.push("soupes")) ;
console.log(restaurant.menu)