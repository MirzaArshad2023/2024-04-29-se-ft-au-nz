new Promise((resolve, reject) => setTimeout(() => resolve(10), 100)
).then((result) => { // promise handler function inside .then()
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
}).then((result) => { // can explicitly return new promises
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
}).then((result) => { // which use the results of previously resolved promises in the chain
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
});
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between