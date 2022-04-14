function fizzBuzz(max){
    for(let i = 3; i <= max; i ++){
        if(i % 3 === 0 || i % 5 === 0){
            if(i % 3 === 0 && i % 5 === 0){
                continue
            }
            console.log(i)
        }
    }
}
fizzBuzz(18);
fizzBuzz(33);