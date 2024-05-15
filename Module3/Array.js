const arr1 = new Array(1,2,3); // constructor, not often used
const arr2 = [1, 2, 3]; // array literal, much more common
console.log(arr1); // [ 1, 2, 3 ] - both do the same
console.log(arr2); // [ 1, 2, 3 ] - both do the same

const myArray = [1, true, null, false,{name:'Mirza', Last:'Arshad'}, function(){console.log('Mirza')}]
console.log(myArray)
myArray[5]();