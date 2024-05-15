let goal = 15;
let Students = ['Aedan', 'Martin','Jarrod','Nicolas','Scott','Saki']

for (let i = 0; i < Students.length; i++) {

    //console.log(`${Students[i]} is from IOD`)
}


let Person = {
    firstName : 'Mirza',
    lastName : 'Arshad',
    instituteName: 'IOD',
    CountryName: 'New Zealand'

}

for(let i in Person)
{
    console.log(`Name of key ${i}`)
    console.log(`Value of key ${Person[i]}`)
}