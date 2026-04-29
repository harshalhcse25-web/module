document.querySelectorAll('.navbar a').forEach(link=>{link.addEventListener('click',function(e){
e.preventDefault();

let target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior:'smooth'
});
});
});
let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";