class pizza{
    constructor(pizzaType,pizzaSize,pizzaCrust){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
        this.toppings = [];
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(pizzaToppings){
        this.toppings.push(pizzaToppings);
    }
    bake(){
        return console.log(`This is a ${this.size} sized ${this.type} ${this.crust} crust pizza with ${this.toppings} toppings.`);
    }
}

const myPizza = new pizza("margarita","small","thin");
myPizza.setToppings("sausage");
myPizza.setToppings("egg");
myPizza.setToppings("corn");
myPizza.bake();//This is a small sized margarita thin crust pizza with sausage,egg,corn toppings.