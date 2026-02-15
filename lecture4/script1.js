let newbtn=document.createElement("button")

newbtn.innerText="Click Me!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn)

//q2

let para2=document.querySelector("p")
// let para1=para2.getAttribute("class")
// console.log(para2.setAttribute("class","newclass"))
console.log(para2.classList)
para2.classList.add("newclass")
para2.classList.remove("newclass")