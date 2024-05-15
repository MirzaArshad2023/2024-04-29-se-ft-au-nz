const cachedWealth = new WeakMap()
// below data would come from external source
const billionaires = [ { name: 'Elon Musk' }, { name: 'Jeff Bezos' }, { name: 'Bill Gates'} ]

function calculateWealth(billionaire) {
    let wealth = cachedWealth.get(billionaire) // if it exists already, get the cached value
    if (!wealth) { // otherwise, calculate it (eg. lookups of external data or expensive calculations)
        wealth = Math.floor(Math.random() * 300); // example only, actual may be lookup(billionaire)
        cachedWealth.set(billionaire, wealth); // store calculation in Map
    }
    return wealth;
}

billionaires.forEach(billionaire => calculateWealth(billionaire)) // populate cache
let elon = billionaires[0]
console.log(cachedWealth.has(elon)) // true
// if external object is removed, our cache will also update and remove unreferenced value
elon = null;
console.log(cachedWealth.has(elon))