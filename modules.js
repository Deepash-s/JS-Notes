//Module

"use strict" //mode is activated automatically

const welcome = () => {
    return "Welcome to this page";
};

const asking = () => {
    return "How are you";
};

const thanks = () => {
    return "Thank you for visiting";
};

export default class email{
    constructor(name){
        this.name = name;
    }
    emailMe(){
        return `Welcome ${this.name} to our page`;  
    }
}

export {welcome};
export{asking,thanks};

//or
/* const default welcome(){
    return "Welcome to this page";
};
 */


