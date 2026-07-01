/* ==========================================
   Osool Website
   Main JavaScript
========================================== */

// تغيير شكل شريط التنقل عند التمرير
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "#071b46";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(10,30,70,.95)";
        header.style.boxShadow = "none";
    }
});

// تأثير ظهور العناصر أثناء التمرير
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .about-text, .about-image, .contact form")
.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// تأثير الضغط على الأزرار
document.querySelectorAll(".btn, .gold-btn, .white-btn")
.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);

    });

});

// رسالة عند إرسال النموذج
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("شكراً لتواصلك معنا، سيتم الرد عليك في أقرب وقت.");

        form.reset();

    });

}

// زر العودة للأعلى
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d4af37";
topButton.style.color = "#071b46";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// سنة تلقائية في الفوتر
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Osool Government Services & Consultancy`;

}

console.log("Osool Website Loaded Successfully");
// Animated Counter

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=60;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,30);

}else{

counter.innerText=target;

}

};

update();

});
// تأثير بسيط عند المرور بالفأرة
document.querySelectorAll(".why-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});