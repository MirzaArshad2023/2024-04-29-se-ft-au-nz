function User(first, last) { // constructor function
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3
}
// we can create multiple users with different names
let user1 = new User('Tim', 'Smith') // need to use 'new'
let user2 = new User('Mirza', 'Arshad')
let user3 = new User('Will', 'Smith')
console.log(user1) // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()) // true
console.log(user1);
console.log(user2);
console.log(user3);

let user4 = {
    first: 'Mirza',
    last: 'Arshad'
}
let user5 = {...user4, first: 'Will', last:'Smith'}
