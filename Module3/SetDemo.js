const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo', 'Oliver', 'Jack'])
names.add('Mateo')
names.add('Oliver')
names.add('Bruno')
console.log(names.size) // 5 - only the unique names
console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

console.log( names.delete('Jack') ) // true - successful delete
console.log( names.has('Jack') ) // false - Jack no longer exists in set
console.log( names.has('Mateo') ) // true - Mateo does exist in set
//names.clear()
console.log(names) // Set(0) {}


// traditional style of for loop - works because Sets are iterable
for (let name of names) {
console.log(name)
}
// more concise for simple operations, newer syntax using arrow function
names.forEach(name => console.log(name))