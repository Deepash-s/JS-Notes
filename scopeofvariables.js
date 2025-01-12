//Scope of variables

//var:

//var is not in use currently because of the prblm in the below example

var x=1;
var x=2;
console.log(x);//2
//doesn't let the user know that the x variable is already declared and takes the latest declared variable, so we use let to overcome this

//let

/*
let y=1;
let y=2;
*/

//Uncaught SyntaxError: Identifier 'y' has already been declared

//const:

//const is constant variable, cannot be changed after declaring


const z=1;
z=5;


//Uncaught TypeError: Assignment to constant variable 

//Global Scope
/*/
var x=1;
let y=2;
const z=3;
*/
//Local Scope(Block Scope)

{
    let y=5;
}

//Local Scope(Function Scope)

function myfun(){
    let z=4;
    console.log(z);
}
myfun()//4

console.log(x);//1
console.log(y);//2
console.log(z);//3