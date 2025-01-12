//To get input from user Prompt() method is used

//IF, ElSE If, ELSE statements

//syntax

/*if (condition) {
    ->code
}*/

//Eg 1: with IF & ELSE statements

let age = prompt("Enter your age:");

if(age>18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}

//Eg 2: with ELSE IF Statement

let number = prompt("Enter a number");

if (number>0){
    console.log(number+" is positive");
}
else if(number<0){
    console.log(number+" is negative");
}
else{
    console.log(number+" is neutral");
}

//Eg 3: with &&(AND) and ||(OR) operators

let name = "virat"
let married = true;
let education = false;

if(married && education){
    console.log(`${name} is married and educated`);
}
else if (married || education){
    console.log(`${name} is either married or educated`);
}
else{
    console.log(`${name} is neither married nor educated`);
}