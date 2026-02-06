//difference between inheritance and interface

//interface is used to implement class

interface Vehicle{
    brandName : String,
    getBrandName()=> string
}
class Bike implements Vehicle{
    brandName: String;
    constructor(brandName: String){
        this.brandName = brandName;
    }
    getBrandName(): string {
        return this.brandName;
    }
}

class Car implements Vehicle{
    brandName: String
    constructor(brandName: String){
        this.brandName = brandName;
    }
    getBrandName(): string {
        return this.brandName;
    }   