class Laptop {
    _hardDiskType = 'HDD'; // protected property, meant to be internal
    constructor(brand) {
        this.brand = brand; // public property, can be used externally by instances
    }
    getHDiskType() { return this._hardDiskType; } // public method to access protected property
    _getConfiguration()
    {
        return {cores: 4, Processor: "Intel"}
    }
}

let dell = new Laptop("Dell")
console.log(dell.getHDiskType())
console.log(dell._getConfiguration())
console.log(dell._hardDiskType)