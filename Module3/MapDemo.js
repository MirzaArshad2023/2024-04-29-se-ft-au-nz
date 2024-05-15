let object = {name: 'John'}
const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set(object, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
console.log(exampleMap.get(object))
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
//{ name: 'John' } => { phone: '0412345678' } }

console.log( exampleMap.get('1') ) // second string one - gets value for matching key
console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
console.log( exampleMap.has(1) ) // true - key does exist
console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful
exampleMap.clear() // removes all items from map
console.log( exampleMap ) // Map(0) {}
console.log(exampleMap.keys())

const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
    ])
    for (let ingredient of recipeMap.keys()) {
    console.log(ingredient ) // flour, milk, eggs, butter
    }
    for (let ingredient of recipeMap.values()) {
        console.log(ingredient ) // flour, milk, eggs, butter
        }

    for(let item of recipeMap)
    {
        console.log(item)
    }
    const priceMap = new Map([
        ['banana', 1],
        ['pineapple', 2],
        ['watermelon', 5]
        ])

    console.log(priceMap)
    console.log(Object.fromEntries(priceMap))

const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }
const priceMap2 = new Map( Object.entries(priceObject) )
console.log(priceMap2) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap2.get('banana')) // 1