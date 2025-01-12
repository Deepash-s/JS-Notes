//Loops:

//While Loop:

let i = 1;//initialization
while(i<=5)//condition
{//code
    console.log(i);
    i++;//increment
}
//Do While Loop:

//Executes atleast one time

let j = 6;
do{
    console.log(j);
    j++;//increment
}
while(j<=10);

//For Loop:
//initialization//condition//increment/decrement
for(let i=11;    i<=15;      i++){
    console.log(i);
}

//Nested For Loop with example:

for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log(`[${i},${j}]`)
    }
}

//Break and Continue:

//Break:

let k = 1;
while(k<=10){
    if(k===5){
        break;
    }
    console.log(k);
    k++;
}

//Continue:

for(let i=1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}