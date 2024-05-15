const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products.filter(product => product.category == 'Shirts')
let under50 = products.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array