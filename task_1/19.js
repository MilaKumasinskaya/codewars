function stringy(size) {
    const arr = [];
    for(let i = 0; i<size; i++){
        arr.push(i % 2 === 0 ? 1 : 0);
    }
    return arr.join('')
}

console.log(stringy(9))