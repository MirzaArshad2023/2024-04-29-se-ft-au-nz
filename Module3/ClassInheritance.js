class Animal {
    type = "Animal"
    constructor(name) {
        this.speed = 0; this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} kph.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
    describe() {
        console.log(`${this.name} is a ${this.type}`)
        }
}
class Rabbit extends Animal {
    type = "Rabbit"
    constructor(name, earLength)
    {
        super(name)
        this.earLength = earLength
    }
    hide() { // custom function, also inherits from Animal
        console.log(`${this.name} hides!`);
    }
    stop()
    {
        super.stop()
        this.hide()
    }
}

class Jackal extends Animal {
    cries()
    {
        console.log(`${this.name} cries`)
    }
}
let bunny = new Rabbit('bunny', 5); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!
let jackal = new Jackal('jackal')
jackal.cries()
jackal.run()
bunny.stop()
bunny.describe()
let newAnimal = new Animal("newAnimal")
newAnimal.describe()