const str = 'world'

function solution(str){
    const res = str.split('').reverse().join('')
    return res
}


console.log(solution(str))