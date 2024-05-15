const user = {
    name: 'Bilbo Baggins',
    salary : 1000,
    annualIncrement() {
        //console.log(this) // 'this' is the current object
        this.salary = 12 * 40/10 + 2000 
        return this; // if we return it, we can 'chain' object methods together
    },
    printSalary() {
        console.log(`User ${this.name} Salary incremented to ${this.salary}`) // 'this' is the current object
    }
}
user.annualIncrement().printSalary()
