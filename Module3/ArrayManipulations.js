const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]
fruits.push('Kiwi')
console.log(fruits)
fruits.unshift('Banana')
console.log(fruits)
fruits.shift()
console.log(fruits)