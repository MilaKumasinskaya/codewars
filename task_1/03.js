const mixedElements = ['7', 5, 7, 2, '7', '5', -1]

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + Number(x[i])
    }
    return sum
}

console.log(sumMix(mixedElements))
