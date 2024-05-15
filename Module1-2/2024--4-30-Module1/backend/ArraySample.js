let randomData = [1, 2, 3, 4]

let newArray = ["Mirza", 1, "A+", false, null]

const nameOfP = "Super"
const newConstArray = ["1", "2"]

console.log(randomData[0]);
console.log(randomData[1]);
console.log(randomData[2]);
console.log(randomData[3]);


console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'


mountains[1] = "Mt Cook"
console.log(mountains[1]);

console.log(mountains)
newConstArray.push("5")
console.log(newConstArray)

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push('Red Sea');
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
seas.unshift('Adriatic Sea')
console.log(seas[0]);

let rivers = ['Mississippi', 'Amazon', 'Nile'];
console.log(rivers)
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]
rivers.shift();
console.log(rivers)

let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];
let fujiIndex = volcanoes.indexOf('Mount Fuji');
console.log(fujiIndex); // 2 (indexes start at 0)

console.log(volcanoes.length)