//Event Listeners

//syntax

// addEventListeners(event,function,useCapture)

const view1 = document.querySelector(".view1");
const div1 =  view1.lastElementChild;

const action = () => {
    div1.style.borderRadius = "50px";
}

div1.addEventListener("click",action);
div1.removeEventListener("click",action);

div1.addEventListener("click",(event)=>{
    console.log(event.target);//<div>1</div>
    event.target.textContent = "hello"//<div>hello</div>
})


document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState
        === "complete"){
            console.log("Site load is completed.");//Site load is completed.
        }
    /* view1.classList.add("yellow");
    view1.classList.remove("blue"); */ 
    //or
    
})
/* 

div1.addEventListener("click", (event)=>{

    div1.classList.toggle("purple");
    div1.classList.toggle("black");
      }) */

/* const submit = () =>{
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    });
  } */