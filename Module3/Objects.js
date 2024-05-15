let Person = {
    fistName : 'Mirza',
    lastName : 'Arshad',
    instituteName: 'IOD',
    CountryName: 'New Zealand'

}
let Student = {
    name: 'Will',
    age: 20,
    'has a car': true,
    
};

let Pupil = new Object()

//console.log(Person.CountryName)
//console.log(Person["CountryName"])

console.log(Student)
console.log(Student.age)
console.log(Student['has a car'])
Student.name = 'Smith'
Student.Nationality = 'USA'
Student.DrivingLicense = true
delete Student.age
console.log(Student)
console.log(Pupil)