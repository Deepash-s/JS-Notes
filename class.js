//classes

const myPizza = {
    size:"medium",
    crust:"original",
    bake: function(){
        return console.log(`This is a ${this.size} sized ${this.crust} crust pizza`);
    }
};
/*-----------------------------------------------------------------------------------*/

myPizza.bake();//This is a medium sized original crust pizza

class pizza{
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }
    bake(){
        return console.log(`This is a ${this.size} sized ${this.type} ${this.crust} crust pizza`);
    }
}

const anotherPizza = new pizza("margarita","medium");

anotherPizza.bake();//This is a medium sized margarita original crust pizza

const anotherPizza2  = new pizza("pepperoni","large");

anotherPizza2.bake();//This is a large sized pepperoni original crust pizza