const myPromise = new Promise((Resolve, Reject)=>{

    let x = 10
    let random = Math.floor(Math.random() * 10)
    if(random % 2 == 0)
        Resolve('Even')
    else
        Reject('Odd')
})
.then((result) => console.log(`The number is ${result}`))
.catch((result) => console.log(`THe number is ${result}`))
.finally(()=> console.log("The promise settles"))

/*console.log("My code continues")
console.log("My code continues")
console.log("My code continues")
console.log("My code continues")

console.log("My code continues")
console.log("My code continues")*/