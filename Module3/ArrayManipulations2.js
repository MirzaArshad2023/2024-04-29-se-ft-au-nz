const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = [...fruits1] // refers to same memory location
fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
console.log(fruits1)
// fruits2 reflects the same change made to fruits1 since they are both references to the same place
console.log('fruit at index 0: '+fruits1[0]) // Apple - accessed using numeric index 0
console.log('fruit at index 1: '+fruits1[1]) // Orange - accessed using numeric index 1
const matrix = [ // 3x3 matrix
[1, 2, 3], // row 0
[4, 5, 6], // row 1
[7, 8, 9] // row 2
]
console.log(matrix[2][2]) // 5, the value in the middle

const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log('Numbers: ' + numbers) // Numbers: 1,2,3
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty: