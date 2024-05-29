// Unit to be tested - the square function.
// Stored in a file called square.js - from here we can
// both test and use the same function, by exporting it
function square(a) {
    return a * a;
}

function Add(a, b){
    return a + b;
}

module.exports = { square, Add };