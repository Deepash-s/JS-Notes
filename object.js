//Object

//object : collection of key-value pairs
//key : string
//value : any data type

//syntax:
// var obj = {key:value,key,value,....}
//var obj = {name:'John',age:25,city:'New York'}
//console.log(obj)//{name:'John',age:25,city:'New York'}

//Accessing the object values
//console.log(obj.name)//John
//console.log(obj.age)//25
//console.log(obj.city)//New York

//Adding new key-value pairs
//obj.country = 'USA'
//console.log(obj)//{name:'John',age:25,city:'New York',country:'USA'}

//Updating the value
//obj.age = 30
//console.log(obj)//{name:'John',age:30,city:'New York',country:'USA'}

//Deleting the key-value pair
//delete obj.city
//console.log(obj)//{name:'John',age:30,country:'USA'}

//Nested object
//var obj = {name:'John',age:25,city:'New York',address:{street:'Main St',zip:71}
//console.log(obj)//{name:'John',age:25,city:'New York',address:{street:'Main St',zip:71}}
//console.log(obj.address.street)//Main St
//console.log(obj.address.zip)//71

//Array of objects
//var obj = [{name:'John',age:25},{name:'Smith',age:30}]
//console.log(obj)//[{name:'John',age:25},{name:'Smith',age:30}]
//console.log(obj[0].name)//John
//console.log(obj[1].age)//30

//Object methods
//Object.keys(obj)//returns the keys of the object
//Object.values(obj)//returns the values of the object
//Object.entries(obj)//returns the key-value pairs of the object
//Object.assign(obj1,obj2)//copies the values of obj2 to obj1
//Object.freeze(obj)//prevents the object from modifying
//Object.seal(obj)//prevents the object from adding or deleting the key-value pairs
//Object.isFrozen(obj)//returns true if the object is frozen
//Object.isSealed(obj)//returns true if the object is sealed


//Eg:

const vehicle = {
   name:"car",
   doors:4,
   engine: function(){
    return "sound!!!";
   }
};

console.log(vehicle.engine());//sound!!!

const car = Object.create(vehicle);
car.wheels=4;

console.log(car)//{wheels:4}
console.log(car.engine());//sound!!!

car.engine = function(){return ".....!!!"};

console.log(car.engine());

//Eg:

const movie = {
    actor:"dhanush",
    music:"arr",
    director:"vetrimaran",
    producer:"lyca"
}

console.log(Object.keys(movie));//['actor', 'music', 'director', 'producer']
console.log(Object.values(movie));//['dhanush', 'arr', 'vetrimaran', 'lyca']

//for-in-loop:

for (let job in movie){
    console.log(movie[job]);//dhanush
                            //arr
                            //vetrimaran
                            //lyca
}

movie.actress = "trisha" ;

for(let jobs in movie){
    console.log(`${jobs}, it's ${movie[jobs]}`)//actor, it's dhanush
                                               // music, it's arr
                                               // director, it's vetrimaran
                                               // producer, it's lyca
}                                              //actress, it's trisha
                                                
delete movie.actress;
console.log(movie)//{actor: 'dhanush', music: 'arr', director: 'vetrimaran', producer: 'lyca'}
 
//to check if a property/key exits:

console.log(movie.hasOwnProperty("actress"))//false
console.log(movie.hasOwnProperty("actor"))//true

//Destructuring the objecst:

const {music:myFavMusicDirector,actor:myFavActor} = movie;
console.log(myFavMusicDirector);//arr
console.log(myFavActor);//dhanush

const {actor,music,director,producer} = movie;
console.log(actor);//dhanush
console.log(producer);//lyca

function sings({music}){
    return music;
}
console.log(sings(movie));//arr