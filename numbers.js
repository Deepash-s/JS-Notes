//numbers declaration

var num = 18;
var num2 = 45;
var str = "18";
var str2 = "hello";

console.log(num+3);//21

//adding a string to a number

console.log(str+3);//183
console.log(str2+3);//hello3

//converting string into numbers

console.log(Number(str)+3);//21
console.log(Number(str2)+3);//Nan (not an number)
console.log(Number(true)+3);//4(because true is 1)
console.log(Number(false)+3);//3(and false is 0)

//checking for not a number (Nan)

console.log(isNaN(str));//false
console.log(isNaN(str2));//true
console.log(isNaN(true));//false
console.log(isNaN(false));//false
//because true is 1 and false is 0 in javascript

//comparing whether equal or not

console.log(num===num2);//false
console.log(num!==num2);//true

//Number Methods

var  mynum = 21;
var myfloat = 21.1;
var myfloat2 = "21.1aaa";
var mystr = "21";
var mystr2 = "world";
var myflt = 18.1467;
 
//isInteger

console.log(Number.isInteger(mynum));//true
console.log(Number.isInteger(myfloat));//false
console.log(Number.isInteger(mystr));//false
console.log(Number.isInteger(mystr2));//false

//parseInt and parseFloat

console.log(Number.parseInt(myfloat))//21
console.log(Number.parseInt(mystr))//21(string converted into integer)

console.log(Number.parseFloat(myfloat))//21.1
console.log(Number.parseFloat(myfloat2))//21.1(removed aaa and converted string into float)

//rounding off

console.log(myflt.toFixed());//18
console.log(myflt.toFixed(3));//18.15 (but toFixed method coverts it into a string)

//coverting int,float into string

console.log(myflt.toString());//18.1467(string)