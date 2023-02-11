/*console.log("hellow ia am learning java script");//to print
let a=7;
console.log(typeof(a));
let b=6;
let sum=a+b;
console.log(sum);

var c=7;
var d=2;
console.log(typeof(c));
mul=c*d;
console.log(mul);
console.log(sum+mul);
const PI=3.14;
let radius = window.prompt("enter radius")
circumference=2*PI*radius;
console.log("the circumference is "+circumference);
function bark(){
    console.log("the dog is barking");
   let age=window.prompt("enter the age of dog");
    if (age<=10){
        console.log("the dog is too thin")

    }
    else{
        console.log("the is fit and fine")
    }

}
bark();*/
document.getElementById("mybutton").onclick=function(){
    let radius =document.getElementById("mynumber").value;
    console.log(radius);
    const PI=3.14;
    let circumference=2*PI*radius;
    //document.getElementById("circumference").innerHTML=circumference;
    document.getElementById("circumference").append(circumference);
}