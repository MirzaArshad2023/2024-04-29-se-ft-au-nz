let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype

function Rabbit(name) { // constructor function, first letter capitalised by convention
    this.jumps = true;
    this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)

let whiteRabbit = new Rabbit('White Rabbit')
let brownRabbit = new Rabbit('Brown Rabbit')
console.log(whiteRabbit) // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`) // all properties