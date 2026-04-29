document.querySelectorAll('.navbar a').forEach(link=>{link.addEventListener('click',function(e){
e.preventDefault();

let target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior:'smooth'
});
});
});