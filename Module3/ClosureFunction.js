function makeAdder(x) { // function factory: bundles value of x into the scope of adder
    return function adder(y) { // closure function 'adder' now has access to both x and y when created
        return x + y;
    };
}
const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
console.log(add5(10)) // x is still 5 and y is 10, result is 15

const nameConcat =makeAdder('Mirza')
console.log(nameConcat('Arshad'))


function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
    return function (title) { // unnamed closure function, can access value of hTag when created
        return `<${hTag}>${title}</${hTag}>`
    }
}
const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2
console.log(getH1('Heading 1')) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
console.log(getH2('Heading 2')) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>