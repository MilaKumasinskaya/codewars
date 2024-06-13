let array = []

function findAverage(array) {
    let el = array.length
    if (!el) {
        return 0
    }
    let numsValue = array.reduce(function (acc, num) {
        return acc += num
    })

    return numsValue / el
}

console.log(findAverage(array))