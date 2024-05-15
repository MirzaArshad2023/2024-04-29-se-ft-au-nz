

let Student = {
    name: 'Will',
    age: 20,
    'has a car': true,
    Schooling: {
        qualification: 'Bachelors',
        univeristy: 'AUT'
    }    
};

let Student2 = {...Student, Citizenship: "New Zealand", PlaceOfBirth: "Australia"}

//Student2.Citizenship = "New Zealand"
//Student2.PlaceOfBirth = "Australia"

Student['Has a dog'] = true

Student2['Has a dog'] = false
console.log(Student)
console.log(Student2)

let student3 = {...Student2,...Student, name: 'Mirza', Citizenship:'UAE', PlaceOfBirth:'Australia'}
console.log(student3)