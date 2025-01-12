//Function:

//synatx:

/*
function name(parameters) {
    //code
}
*/

//Eg:

function sum(num1,num2) {
    let output = num1+num2;
    return output;
}

sum(5,6)//NO OUTPUT because the function sum just returns a value but doesn't print it to the console.
console.log(sum(5,6));//11

//Or we can remove return and add console.log() to the sum function.

//Eg:

function sum2(num1,num2) {
    let output = num1+num2;
    console.log(output);
}

sum2(5,6);//11

//Eg: function to convert the first letter of a word to upper case and the rest to lower case.

function properCase(word){
    let output = word.charAt(0).toUpperCase() + 
        word.slice(1).toLowerCase();
    return output;
}

console.log(properCase("gOodmOrning"));//Goodmorning

//Eg: 

function capitalizeFirstLetterOfEachWord(para) {
    let words = para.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(capitalizeFirstLetterOfEachWord("this is a test string"));//This Is A Test String
