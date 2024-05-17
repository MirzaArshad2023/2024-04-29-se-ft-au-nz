// define our own join() function for objects
const obj = {
     0: "Hello",
     1: "world",
     2: "second",
     3: "Fourth",
    length: 4 // needed for join to work
     
};

obj.join = Array.prototype.join

console.log(obj.join(','))