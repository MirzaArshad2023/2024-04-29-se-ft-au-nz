new Promise((resolve, reject) => {
    resolve(10); // resolve promise successfully with value of 10
}).then((result) => { // when resolve is called, it triggers .then()
    console.log(result); return result + 10; // values returned from .then() are also promises
}).then((result) => { // so we can chain them together
    console.log(result); return result + 10; // increasing result by 10 each time
}).then((result) => { // so we can chain them together
    console.log(result); return result + 10; // increasing result by 10 each time
});
// prints 10, 20, 30