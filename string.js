let name = "Hello world";

console.log(name.length);//11

//string methods

console.log(name.charAt(1));//e
console.log(name.indexOf("o"));//4
console.log(name.indexOf("a"));//-1 (not found)
console.log(name.lastIndexOf("l"));//9

//slice

console.log(name.slice(6,11));//world
console.log(name.slice(6));//world

console.log(name.toUpperCase());//HELLO WORLD
console.log(name.toLowerCase());//hello world

console.log(name.includes("Hello"));//true
console.log(name.includes("sir"));//false

//split -> splits the string using the character specified and places them in array

console.log(name.split(" "));//['Hello','world]
console.log(name.split("l"));//['He','','o wor','d']
