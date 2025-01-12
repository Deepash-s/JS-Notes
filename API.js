//Web Storage API

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete");
        initApp();
    }
});

const initApp = () => {
    const players = ["virat","dhoni","bumrah"];
    const myObject = {
        name:"virat",
        players:["virat","dhoni","bumrah"],
        logName:function(){
            console.log(this.name);
        }
    };

    window.sessionStorage.setItem("mySessionStorage",JSON.stringify(myObject));
    const mySessionStorage = JSON.parse(sessionStorage.getItem("mySessionStorage"));
    console.log(mySessionStorage);//{name: 'virat', players: Array(3)}

    window.localStorage.setItem("myLocalStorage",JSON.stringify(myObject));
    const myLocalStorage = JSON.parse(localStorage.getItem("myLocalStorage"));
    console.log(myLocalStorage);//{name: 'virat', players: Array(3)}
};

   
//session storage stores till the browser session(until the application is open)

//local storage stores until it is deleted using javascript or cache is cleared 