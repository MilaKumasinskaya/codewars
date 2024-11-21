function getDrinkByProfession(param){
const professions = ['Jabroni', 'School Counselor', 'Programmer', 'Bike Gang Member', 'Politician', 'Rapper'];
const drinks = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal', 'Beer'];
const mappedProf = professions.map((p)=> p.toLowerCase())
for(let i = 0; i<mappedProf.length; i++ ){
    if(!mappedProf.includes(param.toLowerCase())){
        return drinks[6]
    }
    if(param.toLowerCase() === mappedProf[i]){
        return drinks[i]
    }
}
 }

console.log(getDrinkByProfession('PrograMmeR'))