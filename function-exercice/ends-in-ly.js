function endsInLy(str){
    result = str.endsWith("ly")
    return result
}

console.log(endsInLy("pretty")) ; // false
console.log(endsInLy("instant")) ; // false
console.log(endsInLy("analytic")) ; // false
console.log(endsInLy("timidement")) ; // true
console.log(endsInLy("fly")) ; // true
console.log(endsInLy("gallantly")) ; // true
