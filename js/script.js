const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});
const menuBtn = document.querySelector(".menu-btn");

const closeBtn = document.querySelector(".close-menu");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.onclick = () => {

    mobileMenu.classList.add("active");

}

closeBtn.onclick = () => {

    mobileMenu.classList.remove("active");

}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.onclick = () => {

        mobileMenu.classList.remove("active");

    }

});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});
function reveal(){

let reveals=document.querySelectorAll(".reveal");

reveals.forEach(r=>{

let windowHeight=window.innerHeight;

let revealTop=r.getBoundingClientRect().top;

let revealPoint=120;

if(revealTop<windowHeight-revealPoint){

r.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText='0';

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+inc)}`;

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-150){

current=section.getAttribute("id");

}

});

navLinks.forEach(a=>{

a.classList.remove("active");

if(a.getAttribute("href")==="#"+current){

a.classList.add("active");

}

});

});
window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

},1500);

}