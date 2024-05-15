const string = 'I could be anything you like'
const namesOfStudents = "Daniel, Will, Smith, Todd, michael"
console.log(string.length) // 28 - string is 28 characters long
console.log(string.substring(string.indexOf('anything'), string.length-9)) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog')) // false - needs the full stop
console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(namesOfStudents.split(','))
console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end