function myfun1(){
    console.log("Apna college\nLearning js")
}
myfun1();


function myfun(a){
    console.log(a)
}
myfun("Shubham");


function sum(a,b){
    console.log("sum of a and b is ",a+b);
}
sum(4,8);

const sum1 = (a,b)=>{
    return a+b
}
console.log(sum1)
console.log(sum1(3,6))

const print1=()=>{
    console.log("hello");
}
print1


function cnt(str){
    let count=0;
    for(let i=0;i<str.length;i++)
       { 
        if(str[i]=='a'||str[i]=='o'||str[i]=='e'||str[i]=='i'||str[i]=='u')
        {
            count++;
        }
       }
     return count;
}
let str="shubham"
// console.log(cnt(str));
console.log(`Number of vowels in ${str} is ${cnt(str)}`);


const cnt1=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++)
       { 
        if(str[i]=='a'||str[i]=='o'||str[i]=='e'||str[i]=='i'||str[i]=='u')
        {
            count++;
        }
       }
     return count;
}
let str1="Musak Raj"
// console.log(cnt(str));
console.log(`Number of vowels in ${str1} is ${cnt1(str1)}`);


arr=[1,2,3,4]

arr.forEach(function value(val)
{
   console.log(val*val)
})

let arr2=arr.map(function value(val)
{
   return val*val
})

let num=[1,2,3,4,5,6,7,8]

let newarr = num.filter(
    (val)=>{
        return val%2==0
    }
)

let num1=[1,2,3,4]

let newarr1 = num.reduce(
    (result,val)=>{
        return result+val
    }
)

/*Practice Question 1*/
let marks=[55,89,98,87,98,67,91]

let mark_90 =marks.filter(
    (val)=>{
        return val>=90;
    }

)

console.log(`Marks Greater than 90are ${mark_90}`)

/*Practice Question 2*/
let ara=[]
let n=prompt("Enter a number : ")
for(let i=1;i<=n;i++)
    {ara.push(i)}
let sum3=ara.reduce(
    (prev,current)=>
    {return prev+current}
)
let pro=ara.reduce(
    (prev,current)=>
    {return prev*current}
)
console.log("Sum of numbers",sum3)
console.log("Products of numbers",pro)

