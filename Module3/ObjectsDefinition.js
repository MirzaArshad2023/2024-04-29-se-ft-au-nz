let obj1 = {name: value1, name2: value2} //Object literals

function Animal(name, mammal)
{
    name = name,
    mammal = mammal
}

let Obj2 = new Animal("Cheetah", true)
let Obj3 = new Animal("Tiger", true)

class AnimalClass
{
    constructor(name, mammal)
    {
        name = name,
        mammal = mammal
    }
    walks(){}
    sleeps(){}
}
let obj4 = new AnimalClass("Leopard", true)
let obj5 = new  AnimalClass("Deer", true)