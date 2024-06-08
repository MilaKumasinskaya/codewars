const array = []

    function invert(array) {
    for (let i = 0; i < array.length; i++){
        if (i == i){
            array [i] *= -1;
        }
    }
    return array;
}

console.log(invert(array));