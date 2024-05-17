class Person {
    static latin = 'persona'; // static (class) property, belongs to class not any instance
    constructor(name) {
        this.name = name; // standard property, is unique to each instance of the class
    }
    getName() { // standard method, belongs to each instance of the class
        return this.name;
    }
    static createAnonymous() { // static (class) method, belongs to class not any instance
        return new Person("Unnamed Person");
    }
}

let student = new Person("Daniel")
let employee = new Person("Mirza")
console.log(student)
console.log(employee)
console.log(employee.latin)
employee.latin = 'xyzabc'
student.getName()
console.log(Person.createAnonymous())
console.log(employee.latin)
console.log(Person.latin + " " + employee.latin)