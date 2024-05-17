const user = {
    name: 'John',
    sayHi() {
        console.log(`Hi, ${this.name}`)
    }
}
user.sayHi() // called directly, works! Hi, John
//setTimeout(user.sayHi, 1000) // passed as reference, fails! Hi, undefined
//setTimeout( function() { user.sayHi(); }, 1000 ) // works! Hi, John
setTimeout( () => user.sayHi(), 1000 ) // works! Hi, John

const boundedFunc = user.sayHi.bind(user)

setTimeout(boundedFunc, 1000)