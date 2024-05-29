function abbrevName(name){
const arrName = name.split(' ')
    const abbrStr = `${arrName[0][0]}.${arrName[1][0]}`
    return abbrStr.toUpperCase()
    // code away

}

console.log(abbrevName("Sam Harris"))
