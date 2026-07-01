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
// --- 5. شريط آراء العملاء (تلقائي مع نقاط تحكم تفاعلية ذكية) ---
const testimonials = document.querySelectorAll(".testimonial");
const sliderContainer = document.querySelector(".testimonial-slider");

if (testimonials.length > 0 && sliderContainer) {
    let currentTestimonial = 0;
    let timer;

    // إنشاء حاوية النقاط ديناميكياً لتوفير عناء تعديل ملف HTML عليك
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "testimonial-dots";
    sliderContainer.appendChild(dotsContainer);

    // إنشاء نقطة تحكم لكل رأي عميل موجود في موقعك
    testimonials.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
        
        // عند ضغط المستخدم على أي نقطة
        dot.addEventListener("click", () => {
            currentTestimonial = index;
            updateSlider();
            resetTimer(); // إيقاف وإعادة تشغيل المؤقت حتى لا يقلب التقييم فوراً أثناء قراءته
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dot");

    // وظيفة لتحديث السلايدر والنقاط النشطة
    const updateSlider = () => {
        testimonials.forEach(item => item.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        testimonials[currentTestimonial].classList.add("active");
        dots[currentTestimonial].classList.add("active");
    };

    // تشغيل الحركة التلقائية
    const startTimer = () => {
        timer = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateSlider();
        }, 6000);
    };

    const resetTimer = () => {
        clearInterval(timer);
        startTimer();
    };

    // إطلاق السلايدر عند تحميل الصفحة
    updateSlider();
    startTimer();
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
// --- 8. نموذج التواصل التفاعلي الاحترافي (بدون Alert التقليدي) ---
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector("button[type='submit']");
        const originalText = submitBtn.innerHTML;
        
        // 1. تحويل الزر فوراً لحالة التحميل (Loading) ومنع الضغط المتكرر
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إرسال رسالتك...';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.8';
        
        // محاكاة عملية إرسال حقيقية تستغرق ثانية ونصف
        setTimeout(() => {
            // 2. إنشاء حاوية رسالة نجاح زجاجية جذابة تظهر أسفل النموذج
            const successMessage = document.createElement("div");
            successMessage.className = "form-success-msg";
            successMessage.innerHTML = '<i class="fas fa-circle-check"></i> تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت.';
            
            // إزالة أي رسالة نجاح قديمة إذا كانت موجودة لمنع التكرار
            const oldMsg = contactForm.querySelector(".form-success-msg");
            if (oldMsg) oldMsg.remove();
            
            // إضافة الرسالة الجديدة داخل النموذج
            contactForm.appendChild(successMessage);
            
            // 3. إعادة الزر لوضعه الطبيعي وتصفير الحقول ليصبح جاهزاً مرة أخرى
            submitBtn.innerHTML = originalText;
            submitBtn.style.pointerEvents = 'auto';
            submitBtn.style.opacity = '1';
            contactForm.reset();
            
            // 4. إخفاء رسالة النجاح تلقائياً بعد 5 ثوانٍ بنعومة تامة
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(10px)';
                setTimeout(() => successMessage.remove(), 400); // حذفها نهائياً من الكود بعد انتهاء الحركة
            }, 5000);
            
        }, 1500); // وقت الانتظار الافتراضي للمحاكاة
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
// --- 10. ميزة الوضع الداكن / المضيء الفاخر مع الحفظ التلقائي في المتصفح ---
const themeToggleBtn = document.getElementById("themeToggle");

// التحقق الفوري عند تحميل الصفحة إذا كان المستخدم قد اختار الوضع الداكن سابقاً
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // تحويل الأيقونة لشمس
    }
}

// برمجة حدث الضغط على الزر للتبديل السلس
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        let theme = "light";
        // إذا تحول الموقع للوضع الداكن
        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // شمس للعودة للمضيء
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // هلال للتحويل للداكن
        }
        
        // حفظ خيار المستخدم الحالي في ذاكرة المتصفح المحلية
        localStorage.setItem("theme", theme);
    });
}
