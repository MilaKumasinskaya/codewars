var countSheep = function (num){

    if(num >= 1){
        let sheep = ''
        for(let i = 1; i<=num; i++){
           sheep = sheep + `${i} sheep...`
        } return sheep

    }
    else return ''
}
console.log(countSheep(5))