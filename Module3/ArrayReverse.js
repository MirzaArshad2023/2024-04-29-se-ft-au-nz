const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original
console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)