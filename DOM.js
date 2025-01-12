//DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view")
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

/* evenDivs[4].style.backgroundColor = "tomato";

for (let i=0; i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor = "yellow";
    evenDivs[i].style.color = "black"
} */

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "My Website";

const title = document.querySelector("title");
title.textContent = "My Website";

const navBar = document.querySelector("nav");
navBar.innerHTML = "<h3>My Webpage!</h3><P>Welcome</p>";

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());//true
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].previousElementSibling.previousElementSibling);


view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

console.log(view2.lastElementChild);
view2.lastElementChild.remove();



const createDiv = (parent,item) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = item;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "orange";
    newDiv.style.color = "black";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}

for(let j=0;j<8;j++){
    createDiv(view2,j);
}