//avec des variables
let countries1 = [
    { nom : "Cameroun", population : 27744989, PIB : 38.68 },
    { nom : "Belarus", population : 94918, PIB : 59.66 },
    {nom : "Indonésie", population : 2000026366, PIB : 1042 },
    {nom : "Guyane", population : 750204, PIB : 3.88 },
    ] ;

let country = null;
let max = 0;
for(let n = 0; n < countries1.length; n ++){
    for(let m in countries1[n]){
        if(countries1[n]["population"] > max){
            max = countries1[n]["population"];
            country = countries1[n]["nom"]
        }
    }
}
console.log(country)

//Fonction
function greatestPopulation(table){
    let greatCountry = null;
    let maxPopulation = 0;
    for(let i = 0; i < table.length; i ++){
        for(let j in table[i]){
            if(table[i]["population"] > maxPopulation){
                maxPopulation = table[i]["population"];
                greatCountry = table[i]["nom"]
            }
        }
    }
    return greatCountry
}

console.log(greatestPopulation([
    { nom : "Cameroun", population : 27744989, PIB : 38.68 },
    { nom : "Belarus", population : 9477918, pib : 59.66 },
    {nom : "Indonésie", population : 267026366, PIB : 1042 },
    {nom : "Guyane", population :  750204, PIB : 3.88 },
])) ; // 'Indonesia' 
console.log(greatestPopulation([
    { nom : "Nouvelle-Zélande", population : 4925477, pib : 204.9},
    { nom : "Mozambique", population : 30098197, pib : 14.72 },
    {nom : "Groenland", population : 57616, PIB : 2.71 },
    {nom : "Kazakhstan", population : 19091949, PIB : 179.3 },
    {nom : "Birmanie", population : 56590071, PIB : 71.21 },
])) ; // 'Birmanie' 


    