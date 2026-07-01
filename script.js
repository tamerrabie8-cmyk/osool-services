/*==================================================
   OSOOL WEBSITE - Enhanced Main JavaScript
   Professional & World-Class Interactions
   ==================================================*/

// --- العناصر الأساسية ---
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".statistics");
const contactForm = document.querySelector(".contact-form");
const topBtn = document.getElementById("topBtn");

// --- 1. القائمة الجانبية للموبايل (محسّنة) ---
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        // أيقونة البرجر تتحول إلى X (اختياري)
        const icon = menuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
        }
    });
});

// --- 2. تأثير الهيدر عند التمرير (محسّن) ---
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // --- زر العودة للأعلى ---
    if (topBtn) {
        topBtn.style.display = window.scrollY > 500 ? "flex" : "none";
    }
});

// --- 3. العداد الرقمي (بدون تغيير جوهري، فقط تحسين الأداء) ---
let counterStarted = false;

const runCounter = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const speed = target / 80;

        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

window.addEventListener("scroll", () => {
    if (statsSection && !counterStarted) {
        const top = statsSection.offsetTop - 350;
        if (window.scrollY >= top) {
            counterStarted = true;
            runCounter();
        }
    }
});

// --- 4. ظهور العناصر بالتمرير (محسّن) ---
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // إيقاف المراقبة بعد الظهور لتحسين الأداء
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(".service-card, .why-card, .process-card, .stat-item, .about-image, .about-content, .faq-item").forEach(el => {
    el.classList.add("fade-up");
    animationObserver.observe(el);
});

// --- 5. شريط آراء العملاء (تلقائي) ---
const testimonials = document.querySelectorAll(".testimonial");
if (testimonials.length > 0) {
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonials.forEach(item => item.classList.remove("active"));
        testimonials[index].classList.add("active");
    };

    showTestimonial(currentTestimonial);

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 6000); // زيادة الوقت قليلاً لقراءة أفضل
}

// --- 6. الأسئلة الشائعة (محسّن) ---
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        // إغلاق جميع الإجابات
        faqItems.forEach(other => other.classList.remove("active"));
        // فتح الإجابة المطلوبة إذا لم تكن مفتوحة بالفعل
        if (!isActive) {
            item.classList.add("active");
        }
    });
});

// --- 7. التنقل السلس للأقسام النشطة (Spy Scroll) ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// --- 8. نموذج التواصل (محسّن) ---
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // يمكن استبدال هذا بطلب إرسال حقيقي إلى خادم
        alert("تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت.");
        this.reset();
    });
}

// --- 9. زر العودة إلى الأعلى (سلس) ---
if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

console.log("✅ Osool Pro | موقع احترافي جاهز للانطلاق");