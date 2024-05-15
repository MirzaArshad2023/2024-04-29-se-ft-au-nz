const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]

let titles = products.map(product => product.title)
let categories = products.map(product => product.category)

//let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )

let x = "Mirza"
let y = "Arshad"

console.log(x > y)

products.sort( (product1, product2) => product1.price - product2.price )
//console.log(products)
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1)
//console.log(products)
//console.log(titles)
//console.log(categories)
//console.log(raisedPrices)

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const numbers = [1, 2000,223,11, 40, 234]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]
console.log(numbers.sort((x, y)=> x - y))

const stringNums1 = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums1].sort((x, y)=> x - y)
console.log(stringNums1) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]