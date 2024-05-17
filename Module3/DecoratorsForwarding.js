function cachingDecorator(origFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure
    return function (x) { // decorator returns same function with extra bits - caching
        if (cache.has(x)) { // if the key exists in the cache,
            console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
        }
        let result = origFunction(x) // otherwise, call the original function and store the result
        cache.set(x, result); // then cache (remember) the result for next time
        return result;
    };
}
function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
    return function () { // and returns that function with extra bits - timing/logging
        console.time('Function timer'); // start a timer
        console.log(`\nExecuting function ...`) // log a message
        const result = originalFunction.apply(this, arguments)// execute the original function and store result
        console.timeEnd('Function timer'); // stop the timer
        return result; // return the result of running the original function
    }
}
let worker = {
    getMultiplier() {
        return Math.floor(Math.random() * 1_000_000); // large random number
    },
    slow(x) {
        let random = 0, goal = x * this.getMultiplier(); // needs context to work
        for (let i = 0; i < goal; i++) random++;
        console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
        return random; // return large number
    }
};
worker.slow(5) // works, context comes from before the dot, ie. worker
worker.fast = cachingDecorator(worker.slow.bind(worker)) // without call/apply, context is lost
worker.fastTimed = loggingTimingDecorator(worker.fast)
//worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')
worker.fastTimed(3)
worker.fastTimed(3)

let newArray = [1, 2, 3, 5, 8, 16, 32]

console.log(newArray.filter((number)=>{ return number % 2}))