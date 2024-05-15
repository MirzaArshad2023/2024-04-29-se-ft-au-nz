const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans')
        
let expensive = products.find(product => product.price > 50)

let shirt = products.find(product => product.category == 'Shirts') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
console.log(expensive)