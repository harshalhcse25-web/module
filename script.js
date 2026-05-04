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
document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}

});
topBtn.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
cards.forEach(card=>{
card.addEventListener("click",()=>{
let name=card.querySelector("h3").innerText;
alert("Faculty Selected: "+name);
});
});
async function getWeather() {
  let city = document.getElementById("city").value.trim();

  if (!city) {
    document.getElementById("result").innerHTML = "Enter city name";
    return;
  }try {
    let geo = await fetch(https://geocoding-api.open-meteo.com/v1/search?name=${city});
    let geoData = await geo.json();

    if (!geoData.results) {
      document.getElementById("result").innerHTML = "❌ City not found";
      return;
    }   let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;
    let name = geoData.results[0].name;

    let weather = await fetch(https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true);
    let weatherData = await weather.json();

    let temp = weatherData.current_weather.temperature;
    let wind = weatherData.current_weather.windspeed;

    document.getElementById("result").innerHTML = `
      <h3>${name}</h3>
      <p>🌡️ Temperature: ${temp} °C</p>
      <p>💨 Wind Speed: ${wind} km/h</p>
    `;