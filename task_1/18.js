let numbers = [-1,10]

function pipeFix(numbers){
    let newNumbers = []
    for(let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
newNumbers.push(i)
    }
    return newNumbers
}

console.log(pipeFix(numbers))
