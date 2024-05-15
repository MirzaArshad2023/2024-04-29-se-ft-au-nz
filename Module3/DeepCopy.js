const box1 = {
    weight: '20kg',
    dimensions: { // nested object property
        width: '30cm',
        height: '10cm'
    }
}
const box2 = { ...box1 }; // shallow clone

box2.dimensions = {
    width:'40cm',
    height: '50cm'
}
box1.dimensions.height = '12cm'; // change box1 nested object property
console.log(box1); // box2 references box1 dimensions and picks up height change
console.log(box2)
