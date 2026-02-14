// console.log("hii Friends")
// window.alert("Hello")
console.dir(window.document.body.childNodes[0])
console.log(window.document.body)

// Accessing elements of HTML element through JavaScript

let var1=document.getElementById("para") //accessing element through id
console.log(var1) // showing content as it is in html
console.dir(var1) // showing content as object variable


let headings = document.getElementsByClassName("heading") //accessing element through class name in html
console.dir(headings)
console.log(headings)

let buttons=document.getElementsByTagName("button") //accessing element through tag name
console.dir(buttons)
console.log(buttons)

// Accessing Element through QuerySelector

let first=document.querySelector("p") // tag
console.dir(first)

let all=document.querySelectorAll("p") 
console.dir(all)


let first1=document.querySelector(".heading") // class
console.dir(first1)

let all1=document.querySelectorAll(".heading") 
console.dir(all1)

let para=document.querySelector("#para") // para
console.dir(para)