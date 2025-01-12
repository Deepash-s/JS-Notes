//Arrays

const array=[];
array[0]="virat";
array[1]="bumrah";
array[2]=true;
array[3]=18;

console.log(array);//['virat', 'bumrah', true, 18]
console.log(array.length);//4
console.log(array[3]);//18
console.log(array[array.length-1]);//18

//adding and deleting the last element of the array:

array.push("rohit");
console.log(array);//['virat', 'bumrah', true, 18, 'rohit']
array.pop();
console.log(array);// ['virat', 'bumrah', true, 18]

//adding and deleting the first element of the array:

array.unshift("rohit");
console.log(array);// ['rohit', 'virat', 'bumrah', true, 18]
array.shift();
console.log(array);// ['virat', 'bumrah', true, 18]

//storing the adding & deleting elements actions in a variable;

const lastAdd = array.push("siraj");
console.log(lastAdd);//5 (adding an element and storing it an variable has its arrays length)
const firstAdd = array.unshift("shami");
console.log(firstAdd);//6


const lastDelete = array.pop();
console.log(lastDelete);//siraj(deleting an element and storing it an variable has the element deleted)
const firstDelete = array.shift();
console.log(firstDelete);//shami

//deleting elements in the specific index of an array

delete array[3];
console.log(array);// ['virat', 'bumrah', true, empty]
console.log(array[3]);//undefined(it can cause a problem using delete method)

//splice

//splice method takes two arguments first one is the starting element to delete and the second one is for how many element it should delete

array.splice(3,1);
console.log(array);//removed the third element completely

//Eg:

const myArray=[1,2,3,4,5];
myArray.splice(2,2);//starts from index two and deletes two element
console.log(myArray);//[1,2,5]

//splice method also takes a third argument which is used to replace the deleted element

const num = [1,2,7,4,5];
num.splice(2,1,3);
console.log(num);// [1, 2, 3, 4, 5](7 is replaced with 3)
const words=["hello","thor","america"];
words.splice(1,1,"captain");
console.log(words);//['hello', 'captain', 'america']("thor" is replaced by "captain")

//to insert a value at a specific index of an array
//we can use splice() method without giving number of elements to delete 

//Eg:

const prog = ["c","c++","javaScript","python"];
prog.splice(2,0,"java");
console.log(prog);//['c', 'c++', 'java', 'javaScript', 'python']("java" is inserted at index 2)

//Slice

//slice metjoid returs a copy of the part the array

//Eg:

const newArray = [1,2,3,4,5,6,7,8];
const subArray = newArray.slice(1,5);
const subArray2 = newArray.slice(3);
console.log(subArray);//[2, 3, 4, 5]
console.log(subArray2);//[4, 5, 6, 7, 8]
console.log(newArray)//[1, 2, 3, 4, 5, 6, 7, 8]
//original array is not modified

//reverse

newArray.reverse();
console.log(newArray);//[8, 7, 6, 5, 4, 3, 2, 1]

//join

//joins and converts the element in the array to a single string 

const names = ["john","aemond","tyrion",18];
const join = names.join(".");//joins using the specified character
console.log(join)//john.aemond.tyrion.18

//split

//used to split the joined array elements by giving the specified character

//but all the datatype are converted to strings

console.log(join.split("."));//['john', 'aemond', 'tyrion', '18']

//concatenating arrays

const rcb = ["virat","rajat","salt"];
const rcb2 = [];
const team = rcb.concat(rcb2);
console.log(team);//['virat', 'rajat', 'salt']
console.log(rcb2);//[]

//returns it in a new array so existing arrays is not modified

const int1 = [6,12,18,24];
const int2 = [30,36,42,48,54,60];
const sixTables = int1.concat(int2);
console.log(sixTables);//[6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

//spread operator(same as concat)

const sixTables2 = [...int1,...int2];
console.log(sixTables2);//[6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

//2-D Array

const teamA =["RCB","MI","CSK","KKR","RR"];
const teamB =["LSG","GT","PBKS","DC","SRH"];
const teams = [teamA,teamB];
console.log(teams[0][0]);//RCB
console.log(teams[1][3]);//DC
console.log(teams);//[Array(5), Array(5)]

//arrays

//syntax

const array = [1,2,3,4,5];
console.log(array);//[1, 2, 3, 4, 5]
