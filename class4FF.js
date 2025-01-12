//classes

//Factory Function

function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return { 
        bake : ()=> console.log(`Baking a ${size} sized ${crust} crust pizza.`)
    };
}

const myPizza = new pizzaFactory("medium");
myPizza.bake();//Baking a medium sized original crust pizza.
console.log(myPizza.crust);//undefined
//we can make to not not modify the property but also
//cannot access properties in this method with "." like object 

//To solve this problem public/private method is used

// by putting # before the property it becomes private to its class it cannot be used oustside

class pizza{
    crust = "original";
    #sauce = "tomato";
    constructor(pizzaSize){
        this.size = pizzaSize;
    }
    bake(){
        return console.log(`Baking a ${this.size} sized ${this.crust} crust pizza with ${this.#sauce} sauce.`)
    }
}

const newPizza = new pizza("small");
newPizza.bake();//Baking a small sized original crust pizza with tomato sauce.
console.log(newPizza.crust);//original
console.log(newPizza.sauce);//undefined
console.log(newPizza.#sauce);//Uncaught SyntaxError: Private field '#sauce' must be declared in an enclosing class