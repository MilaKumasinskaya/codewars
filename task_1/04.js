const uniqArray = (arr) => {
    return arr.filter((el, id) => arr.indexOf(el) === id);
}

function mergeArrays(arr1, arr2) {
const mergedArr = arr1.concat(arr2).sort((a, b) => a-b)
    const pureArray = uniqArray(mergedArr)
    return pureArray
}


console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))