class User {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    hasShortName() {
        return this.first.length <= 3
    }
}
let user2 = new User('Tina', 'Smith') // need to use 'new'
let user3 = new User('Mirza', 'Arshad')
console.log(user2) // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName())
console.log(user3.hasShortName())