//Error Handling

/* variable1 = "Hello";
console.log(variable1);//Hello */

"use strict";
//we have to use it at the starting of the program

/* variable1 = "Hello";
console.log(variable1);//Uncaught ReferenceError: variable1 is not defined */

/*Major types of errors in JS:

1-TypeError
2-ReferenceError
3-SyntaxError */

//try, catch, finnaly Method to handle errors:

//syntax:

/* try{

}catch(){
    
}
*/

const error = () => {
    try{
        const name = "virat";
        name = "kohli";
    }catch(err){
        console.log(err);// console.log(err.stack);(both are same)
        console.error(err);
        console.warn(err);
        console.table(err);
        console.log(err.name);//TypeError
    }
};

error();//TypeError: Assignment to constant variable.(it's in text(string) format)
// TypeError: Assignment to constant variable
//TypeError: Assignment to constant variable.
/* (index)                  Value
stack	            'TypeError: Assignment to constant variable
message	            'Assignment to constant variable. */

const error2 = () => {
    try{
        throw new Error("This is a custom error");
    }catch(err){
        console.error(err);
    }
};

error2();/* Error: This is a custom error
   at error2 (errorhandling.js:50:15)
   at errorhandling.js:56:1 */

const error3 = () => {
    try{
        throw new Error("This is a custom error");
    }catch(err){
        console.error(err);
    }finally{
        console.log("END...")
    }
};

error3();/* Error: This is a custom error
at error2 (errorhandling.js:50:15)
at errorhandling.js:56:1 
END... 
*/

/* When try produced error catch gets executed and finally is executed, and also if try didn't produce any error catch is not executed and the finally gets executedWhen try produced error catch gets executed and finally is executed, and also if try didn't produce any error catch is not executed and the finally gets executed. */

//finally block always execute at the end of the program




//Eg:

const num = () =>{
    let i=0;
    while(i<=5){
        try{
            if(i%2!==0){
                throw new Error(`${i} is Odd Number`);
            }
            console.log(`${i} is Even Number`);
        }catch(err){
            console.error(err.message);
        }finally{
            if (i!==5){
                console.log("and");
            }
            i++;
        }
    }
};

num();

/*
0 is Even Number
and
1 is Odd Number
and
2 is Even Number
and
3 is Odd Number
and 
4 is Even Number
and
5 is Odd Number
*/
