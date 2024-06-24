let ages = [57, 99, 14, 32]

function differenceInAges(ages){
    const minAge = ages.reduce((acc, el)=> {
        return el < acc ? el : acc
    })
    const maxAge = ages.reduce((acc, el)=> {
        return el < acc ? acc : el
    })
const diffAge = maxAge - minAge;
    return [minAge, maxAge, diffAge]
}

console.log(differenceInAges(ages))