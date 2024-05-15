/*console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number
*/

let num1;

num1 = 10;

let firstName = "Bruce"
firstName = appendStringwithLetter(firstName, "#")


if("Mirza") 
    console.log('The passed string is true') // implicit "" conversion to false - won't print msg)
else
    console.log('empty string is converted to false')

console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

function appendStringwithLetter(stringtoAppend, letter)
{
    stringtoAppend = stringtoAppend + letter;
    return stringtoAppend;
}
function calculate(number)
{
    
    if(number==null || number == undefined)
        num1 = 0;
    else
        num1 += 1;

    if(number==100)
        return number;
    else
        console.log(number)

    return calculate(num1);
}

let result = calculate(10)

result = appendStringwithLetter(result, "#")
result = calculate(result)
result = calculate(result)
console.log(result);

console.log( !!!"" ) // false - convert value to boolean then negate/toggle twice
let lastName = "Arshad"
lastName = appendStringwithLetter(lastName, "#")
/*let firstName = "Avrill";
let lastName = "Arshad"
if(firstName > lastName)
    console.log("First name greater than last name")*/