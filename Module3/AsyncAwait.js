async function ProcessSomething()
{
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Simple successful promise'), 5000)
    });
    // using .then to process asynchronously:
    promise.then(msg => console.log(msg));

    await promise
    console.log("Synchronous code continuess...")
}

ProcessSomething()

const sayHI = async function()
{
    console.log("Hi")
}
const sayHII = async ()=>{
    console.log("Hi")
}

console.log("Synchornous code continues..")
console.log("Synchornous code continues..")
console.log("Synchornous code continues..")
console.log("Synchornous code continues..")
