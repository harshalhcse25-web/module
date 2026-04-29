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
sections.forEach(section=>{
let top=window.scrollY;
let offset=section.offsetTop-150;
let height=section.offsetHeight;
let id=section.getAttribute("id");

if(top>=offset && top<offset+height){
current=id;
}
});
navLinks.forEach(link=>{
link.style.color="";

if(link.getAttribute("href")==="#"+current){
link.style.color="yellow";
}
});

});
let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{
card.style.transform="scale(1.05)";
card.style.transition="0.3s";
});

card.addEventListener("mouseleave",()=>{
card.style.transform="scale(1)";
});

});
window.onload=function(){
setTimeout(()=>{
alert("Welcome to Computer Science Department Website");
},800);
};let topBtn=document.createElement("button");

topBtn.innerHTML="↑";
topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 16px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.cursor="pointer";
topBtn.style.display="none";