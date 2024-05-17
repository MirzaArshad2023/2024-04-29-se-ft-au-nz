let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype

let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype

//console.log(animalPrototype); // BUT printing it via console.log is incomplete
//console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal);
let jackal = {}
object1.setPrototypeOf(jackal)

console.log(rabbit1.eats + " " + rabbit1.sleeps + " " + rabbit1.legs)

let rabbitPrototype = Object.getPrototypeOf(rabbit1); // recommended way to get prototype
console.log(rabbitPrototype)

let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
    jumps: { // name of custom 'own' property for rabbit object
        value: true, // property descriptor to set the property value
        enumerable: true // property descriptor to make this enumerable - otherwise jumps not in for...in
    }
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own

