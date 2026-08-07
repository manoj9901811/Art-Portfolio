/*==========================================
            LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


/*==========================================
        STICKY NAVBAR
==========================================*/

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        nav.style.background = "rgba(5,5,5,.95)";
        nav.style.padding = "14px 8%";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        nav.style.background = "rgba(0,0,0,.25)";
        nav.style.padding = "18px 8%";
        nav.style.boxShadow = "none";

    }

});


/*==========================================
        BACK TO TOP BUTTON
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*==========================================
        ACTIVE MENU
==========================================*/

const links=document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});


/*==========================================
        HERO BUTTON ANIMATION
==========================================*/

document.querySelectorAll(".hero-buttons a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


/*==========================================
        IMAGE HOVER
==========================================*/

const images=document.querySelectorAll(".art-card img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*==========================================
        SCROLL REVEAL
==========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


/*==========================================
        COUNTER
==========================================*/

const counters=document.querySelectorAll(".stat-box h2");

const speed=150;

counters.forEach(counter=>{

const animate=()=>{

const value=+counter.innerText.replace("+","").replace("%","");

const data=+counter.getAttribute("data-count") || value;

const time=data/speed;

if(value<data){

counter.innerText=Math.ceil(value+time);

requestAnimationFrame(animate);

}

};

animate();

});


/*==========================================
        CONTACT FORM
==========================================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


/*==========================================
        LOGO PARALLAX
==========================================*/

const heroLogo=document.querySelector(".hero-logo");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroLogo.style.transform=`translate(${x}px,${y}px)`;

});


/*==========================================
        FLOATING ANIMATION
==========================================*/

let angle=0;

setInterval(()=>{

angle+=0.02;

document.querySelectorAll(".service-card").forEach((card,index)=>{

card.style.transform=`translateY(${Math.sin(angle+index)*3}px)`;

});

},40);