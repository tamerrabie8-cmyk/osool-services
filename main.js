/*==================================================
OSOOL WEBSITE
Main JavaScript
==================================================*/

/*==========================
Mobile Menu
==========================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

/*==========================
Header Scroll
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#071b46";
header.style.boxShadow="0 10px 25px rgba(0,0,0,.20)";

}else{

header.style.background="rgba(11,46,89,.96)";
header.style.boxShadow="none";

}

});

/*==========================
Animated Counter
==========================*/

const counters=document.querySelectorAll(".counter");

const runCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

};

let counterStarted=false;

const stats=document.querySelector(".statistics");

window.addEventListener("scroll",()=>{

if(stats){

const top=stats.offsetTop-400;

if(window.scrollY>=top&&!counterStarted){

counterStarted=true;

runCounter();

}

}

});

/*==========================
Scroll Animation
==========================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(
".service-card,.why-card,.process-card,.stat-item,.about-image,.about-content"
).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});/*==================================================
Testimonials Slider
==================================================*/

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

    let current = 0;

    function showSlide(index) {

        testimonials.forEach(item => {
            item.classList.remove("active");
        });

        testimonials[index].classList.add("active");
    }

    showSlide(current);

    setInterval(() => {

        current++;

        if (current >= testimonials.length) {
            current = 0;
        }

        showSlide(current);

    }, 5000);

}

/*==================================================
FAQ Accordion
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {
                other.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

/*==================================================
Back To Top Button
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==================================================
Contact Form
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("تم إرسال رسالتك بنجاح، وسنتواصل معك في أقرب وقت.");

        contactForm.reset();

    });

}

/*==================================================
Smooth Active Menu
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*==================================================
Console
==================================================*/

console.log("✅ Osool Website Loaded Successfully");