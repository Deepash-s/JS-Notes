
//UserInput

//alert:

//The alert() method displays an alert box with a specified message and an OK button.

alert("Hello World");

//confirm:

//The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.Returns true if the user clicks "OK", and false otherwise.

confirm("Press a button!");

//prompt:

//The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. Returns the text entered by the user.The second parameter is the default input text.

prompt("Please enter your name", "Your name here");

//The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.

//null coalescing operator:

//The null coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let name = prompt("Please enter your name", "Your name here");
console.log(name ?? "Please enter your name");   


//Example:

let name2 = prompt("Please enter your name", "Your name here");
if(name){
    console.log(name2 ?? "Please enter your name");
}
else{
    console.log("Please enter your name");
}

console.log(name2.trim().length);