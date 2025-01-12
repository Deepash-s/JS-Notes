//JSON - JavaScript Object Notation

//text format

//To send and receive data in any programming language

const myObj = {
    name:"Jaime",
    family:["cersei","tyrion","tywin"],
    sub: function(){
        console.log("Welcome to the King's Layer");
    }
};

//stringify is use to convert the properties and values in an object into string.function cannot be converted into string.

const sendJSON = JSON.stringify(myObj);

console.log(sendJSON);//{"name":"Jaime","family":["cersei","tyrion","tywin"]}
console.log(sendJSON.name)//undefined
console.log(typeof sendJSON)//string

//while parse is used to covert back the string format into object format.function was not converted into JSON so there is no function here also. 

const receiveJSON = JSON.parse(sendJSON);

console.log(receiveJSON);//{name: 'Jaime', family: Array(3)
console.log(typeof receiveJSON);//object    
console.log(receiveJSON.name);//Jaime