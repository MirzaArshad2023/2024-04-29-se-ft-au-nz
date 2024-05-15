console.log( +"100px" ) // NaN - 100px is not a valid number

console.log( parseInt("150px") ) // 150 - stops at 'px'
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops