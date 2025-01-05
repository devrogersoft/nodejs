class Car{
    constructor(wheel, chassi, strearing, seats, engine){
        this.wheel = wheel;
        this.chassi = chassi;
        this.strearing = strearing;
        this.seats = seats;
        this.engine = engine;
    }
    drive(){
        return `Car with chassi number ${this.chassi} and ${this.engine} is ready to drive`
    }
}

class ToyotaCar extends Car {
    manufacturer(){
        return "Toyota";
    }
}

//Object of class Car
const toyotaCarBasic = new Car("4 alloy wheels" , "PPPF12123", "ZFComp", "5 seats", "ENGINE2333445");
console.log(toyotaCarBasic.drive());


//Object of class ToyotaCar
const toyotaYarris = new ToyotaCar("4 alloy wheels" , "PPPF12123", "ZFComp", "5 seats", "ENGINE2333445");
console.log(toyotaYarris.drive())
console.log(toyotaYarris.manufacturer())
