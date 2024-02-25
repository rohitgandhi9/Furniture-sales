// DOM is used to access the html element in the js 
// 1. accessing the element of html
// let cl = document.getElementsByClassName("myclass");
// console.dir(cl);
// let iden=document.getElementById("mybutton");
// console.dir(iden);
// let para=document.getElementsByTagName("p");
// console.dir(para);
// let a=document.querySelector("#mybutton"); //returns the first element
// console.dir(a);
// let b=document.querySelectorAll(".myclass"); //return a nodelist 
// console.dir(b);
// let c=document.querySelectorAll("p");
// console.dir(c);
// let ad=document.querySelector("#myclass").firstChild;
// console.dir(ad);
// // console.dir(ad).innerHTML;
// let div=document.querySelector("div");
// console.dir(div);
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"From Sinhgad College Of Engineering";
let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
let index=1;
for(div of divs) {
    // console.log(div.innerText);
    div.innerText=`new div ${index}`;
    index++;
}
// divs[0].innerText="New Div 1";
// divs[1].innerText="New Div 2";
// divs[2].innerText="New Div 3";

