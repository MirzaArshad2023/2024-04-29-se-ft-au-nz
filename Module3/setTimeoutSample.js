setTimeout( () => console.log("first message"), 5000 ); //asynchronous code with 5s delay
setTimeout( () => console.log("second message"), 3000 ); //asynchronous code with 3s delay
setTimeout( () => console.log("third message"), 1000 ); //asynchronous code with 1s delay
setTimeout( () => console.log("fourth message"), 0 ); //asynchronous code with no delay
console.log("fifth message"); //standard synchronous code