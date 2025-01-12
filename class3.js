class pizza{
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class specialPizza extends pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "margarita";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
    }
}

const mySpecialPizza = new specialPizza("medium");
mySpecialPizza.slice();//Our margarita medium pizza has 8 slices