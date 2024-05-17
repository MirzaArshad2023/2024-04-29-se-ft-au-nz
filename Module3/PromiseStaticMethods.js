const promise1 = new Promise((Resolve, Reject)=>{

    Resolve(100)
})

const myPromise = new Promise((Resolve, Reject)=>{

    let x = 10
    let random = Math.floor(Math.random() * 10)
    if(random % 2 == 0)
        Resolve('Even')
    else
        Reject('Odd')
}).catch((outcomes)=> console.log(outcomes))


const thirdPromise = new Promise((resolve, reject) => {
    resolve(10); // resolve promise successfully with value of 10
})

Promise.all([promise1, thirdPromise])
.then((outcomes)=> console.log(outcomes))

Promise.allSettled([promise1, myPromise, thirdPromise])
.then((outcomes)=> console.log(outcomes))

const promise11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise22 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise11, promise22]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // Expected output: "two"
  
const promise111 = Promise.reject(0);
const promise222 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise333 = new Promise((resolve) => setTimeout(reject, 500, 'slow'));

const promises = [promise111, promise222, promise333];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"