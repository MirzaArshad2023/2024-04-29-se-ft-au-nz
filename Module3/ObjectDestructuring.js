let object1 = { title: 'My Component', height: 100, width: 200 }
//let {title, height, width, mass=100, weight=40}= object1

let {height, ...rest} = object1
//console.log(title)
//console.log(height)
//console.log(width)

function printObject({title, width})
{
    console.log(title + " " + width)
}

console.log(rest)
//printObject(object1)