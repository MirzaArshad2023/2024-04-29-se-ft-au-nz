class Laptop {
    _hardDiskType = 'HDD'; // protected property, meant to be internal
    #numCPUFans = 1;
    constructor(brand) {
        this.brand = brand; // public property, can be used externally by instances
    }
    getHDiskType() { return this._hardDiskType; } // public method to access protected property
    #getConfiguration()
    {
        return {cores: 4, Processor: "Intel"}
    }
    calculateSpeed()
    {
        let config = this.#getConfiguration()
        return config.cores * this.#numCPUFans
    }
}

try{

    let macbook = new Laptop()
    console.log(macbook.getHDiskType1())
    console.log(macbook.calculateSpeed1())
}
catch(error)
{
    console.log('Error has occurred:' + error)
}

let obj1 = new Laptop();
console.log(obj1.calculateSpeed())

let obj2 = new Laptop();
console.log(obj1.calculateSpeed())

let obj3 = new Laptop();
console.log(obj1.calculateSpeed())

