const n = 1.23456; // primitive floating point number
let x = 10
let y = true;
console.log(n.toFixed(1)) // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(30)) // 1.234560000 - fills or rounds to the exact number of digits
const hello = 'Hello world' // primitive string
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(hello.toLowerCase()) // HELLO WORLD
console.log(hello.endsWith('world')) // true
console.log(hello.toLowerCase().startsWith('hello')) // true

let object1 = {
    firstName: 'Mirza',
    lastName: 'Arshad',
    toString()
    {
        return this.firstName + " " + this.lastName
    }
}

console.log(n.toString())
console.log(x.toString())
console.log(y.toString())
console.log(object1.toString())
console.log("The name of user is : " + object1)

let Apple = {
    name: 'Apple',
    category: 'Royal Gala',
    price : 2.5,
    valueOf()
    {
        return this.price
    }

}
console.log(Apple * 5)