const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]
// get the titles of all products over $25:
const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]
// list product ids and titles in descending order of price:
const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
    .map(prod => ({ id: prod.id, title: prod.title }))
console.log(hiloProducts)
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]