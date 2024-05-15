let array1 = ['Mirza', 'Will', 'Smith']
const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
let [name1, name2, name3] = array1
console.log(name1 + " " + name2 + " " + name3)
console.log(jcFirst + " " + jcLast + " " + jcPlace)

const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); //store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
//key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]
console.log(student) // Andrew
console.log(teacher) // James

const [cFirst, cLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log( jcTitles.length ) // 4

const [First = 'Unknown', Last, jcTitle = 'Consul'] = ['Julius', 'Caesar']
console.log( First ) // Julius
console.log( jcTitle ) // Consul