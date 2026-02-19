const student ={
    name:"Shubham",
    marks:94.4,
    printMarks:function(){
        console.log("marks=",this.marks); //student.marks
    }
}

const employee={
    calTax() {
        console.log("Tax rate is 10%");
    },
    // calTax:function(){ //Not a good practice
    //     console.log("tax rate is 10%")
    // }
}

const Karanarjun={
    salary:50000,
    calTax() {
        console.log("Tax rate is 20%");
    },
}
    

Karanarjun.__proto__=employee; //link the employee object (or now Karanjun have same properties as employee)


//Classes in javaScript

class ToyotaCar {
    constructor(brand,milage){
        console.log("Creating new object");
        this.brand=brand;// variable is created directly
        this.milage=milage;
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //         this.brand=brand;
    //     }
    }


let fortuner=new ToyotaCar("fortuner",10); //constructor invoked
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus=new ToyotaCar("lexus",20);
console.log(lexus);
// lexus.setBrand("lexus");


//Inheritance in JavaScript