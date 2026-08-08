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
/*==========================
        FAQ
==========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
/*==================================================
            GALLERY FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const galleryCards = document.querySelectorAll(".gallery-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        /* Add active class */

        button.classList.add("active");


        const filter = button.dataset.filter;


        galleryCards.forEach(card => {

            const category = card.dataset.category;


            if(filter === "all" || category === filter){

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform = "translateY(0)";

                }, 50);

            }

            else{

                card.style.opacity = "0";

                card.style.transform = "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});
/*==================================================
                GALLERY LIGHTBOX
==================================================*/

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const closeLightbox =
    document.getElementById("lightboxClose");

const prevButton =
    document.getElementById("lightboxPrev");

const nextButton =
    document.getElementById("lightboxNext");


const viewButtons =
    document.querySelectorAll(".view-image");


let currentIndex = 0;


/*=========================================
            GET ARTWORKS
=========================================*/

const artworkButtons =
    Array.from(viewButtons);


/*=========================================
            OPEN LIGHTBOX
=========================================*/

function openLightbox(index){

    const button =
        artworkButtons[index];

    if(!button) return;


    const image =
        button.dataset.image;

    const title =
        button.dataset.title;


    const card =
        button.closest(".gallery-card");


    const category =
        card.querySelector(".gallery-info span")
        ?.textContent || "Artwork";


    lightboxImage.src = image;

    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    lightboxCategory.textContent = category;


    currentIndex = index;


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/*=========================================
            OPEN BUTTON
=========================================*/

artworkButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        openLightbox(index);

    });

});


/*=========================================
            CLOSE
=========================================*/

function closeGalleryLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


closeLightbox.addEventListener(
    "click",
    closeGalleryLightbox
);


/*=========================================
            NEXT
=========================================*/

nextButton.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= artworkButtons.length){

        currentIndex = 0;

    }

    openLightbox(currentIndex);

});


/*=========================================
            PREVIOUS
=========================================*/

prevButton.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
            artworkButtons.length - 1;

    }

    openLightbox(currentIndex);

});


/*=========================================
            CLICK OUTSIDE
=========================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        closeGalleryLightbox();

    }

});


/*=========================================
            KEYBOARD
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")){

        return;

    }


    if(e.key === "Escape"){

        closeGalleryLightbox();

    }


    if(e.key === "ArrowRight"){

        nextButton.click();

    }


    if(e.key === "ArrowLeft"){

        prevButton.click();

    }

});
/*==================================================
            PRICING FAQ
==================================================*/

const pricingFaqItems =
    document.querySelectorAll(".pricing-faq-item");

pricingFaqItems.forEach(item => {

    const question =
        item.querySelector(".pricing-faq-question");

    question.addEventListener("click", () => {

        /*
        Close other questions
        */

        pricingFaqItems.forEach(otherItem => {

            if(otherItem !== item){

                otherItem.classList.remove("active");

            }

        });


        /*
        Open / close current question
        */

        item.classList.toggle("active");

    });

});
/*==================================================
                    CONTACT FAQ
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions =
        document.querySelectorAll(".contact-faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                this.closest(".contact-faq-item");


            /* Close all other items */

            document
                .querySelectorAll(".contact-faq-item")
                .forEach(function (item) {

                    if (item !== currentItem) {

                        item.classList.remove("active");

                    }

                });


            /* Toggle current item */

            currentItem.classList.toggle("active");

        });

    });

});
/*========================================
        ARTWORK CONTACT FORM
========================================*/

async function sendArtworkForm(event) {

    event.preventDefault();

    const form = event.target;

    const button =
        form.querySelector(".contact-submit");

    const successMessage =
        document.getElementById("formSuccess");

    const originalButtonText =
        button.innerHTML;


    // Loading state

    button.disabled = true;

    button.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';


    try {

        const response = await fetch(
            form.action,
            {
                method: "POST",

                body: new FormData(form),

                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            // Clear form

            form.reset();


            // Show success message

            successMessage.classList.add("show");


            // Scroll to success message

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            // Hide after 6 seconds

            setTimeout(function () {

                successMessage.classList.remove("show");

            }, 6000);

        } else {

            alert(
                "Unable to send your enquiry. Please try again."
            );

        }

    } catch (error) {

        console.error(
            "Form submission error:",
            error
        );

        alert(
            "Something went wrong. Please try again."
        );

    }


    // Restore button

    button.disabled = false;

    button.innerHTML =
        originalButtonText;

}
/*========================================
            BACK TO TOP
========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) {
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
/*========================================
        AUTO TESTIMONIAL SLIDER
========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const track =
        document.querySelector(".testimonial-track");

    const cards =
        document.querySelectorAll(".testimonial-card");

    if (!track || cards.length === 0) {
        return;
    }


    let currentSlide = 0;


    function getSlidesPerView() {

        if (window.innerWidth <= 768) {
            return 1;
        }

        if (window.innerWidth <= 1024) {
            return 2;
        }

        return 3;
    }


    function moveSlider() {

        const slidesPerView =
            getSlidesPerView();

        const maxSlide =
            cards.length - slidesPerView;


        currentSlide++;


        if (currentSlide > maxSlide) {
            currentSlide = 0;
        }


        const cardWidth =
            cards[0].offsetWidth;

        const gap =
            parseFloat(
                getComputedStyle(track).gap
            ) || 0;


        const distance =
            currentSlide *
            (cardWidth + gap);


        track.style.transform =
            "translateX(-" + distance + "px)";

    }


    /* Move automatically every 4 seconds */

    setInterval(function () {

        moveSlider();

    }, 4000);


});