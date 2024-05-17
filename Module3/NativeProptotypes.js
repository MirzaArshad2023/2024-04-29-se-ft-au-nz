const arr = [] // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype

const string = ""
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(string)) ) //inherited properties from prototype
//console.log(string.show())
String.prototype.show = function(){
    console.log(this)
}

let string1 ="Mirza"; let string2="Arshad"
"BOOM!".show();
string1.show()
string2.show()

let arr1 = ["First", "Second", "Third"]
console.log(arr1.join(" "))