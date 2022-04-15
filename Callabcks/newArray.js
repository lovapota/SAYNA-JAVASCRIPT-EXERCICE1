function newArray(arr,callback) {
    let resultTable = [];
    for(let i = 0; i < arr.length; i ++){
        resultTable.push(callback(arr[i]))
    }
    return resultTable
};
    console.log(newArray([5, 6, 7, 4, 5, 6, 7, 1, 2], (x) => x + 1)) ; //incrémente l'élément du tableau par 1.
    console.log(newArray([5, 6, 7, 4, 5, 6, 7, 1, 2], (x) => x * 2)) ; //double chaque élément du tableau.
    console.log(newArray([5, 6, 7, 4, 5, 6, 7, 1, 2], (x) => x * x)) ; //équerre chaque élément du tableau.