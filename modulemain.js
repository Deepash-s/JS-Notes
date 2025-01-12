import {welcome} from "./modules.js";
import {asking/* ,.,.,., */} from "./modules.js";
import {thanks as nandri} from "./modules.js";
import email from "./modules.js"

//to import everything

//import * as file from "./modules.js"
//we have to use default to use the function we gave default (if you dont want you cannot remove default and call by its function name itself)
//console.log(file.default());//Welcome to this page
//console.log(file.asking());//How are you

console.log(welcome());//Welcome to this page
console.log(asking());//How are you
console.log(nandri());//Thank you for visiting

const emailid = new email("virat");

console.log(emailid.emailMe());//Welcome virat to our page