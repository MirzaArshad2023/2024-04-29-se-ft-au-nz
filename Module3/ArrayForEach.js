const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

for(let k=0; k<hobbits.length; k++)
{
    console.log(`#${k}: ${hobbits[k]}`)
}

hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
    console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})
