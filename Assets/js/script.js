/* ==========================================
   SHIDQIA ABADI PROPERTY
   PROFESSIONAL WEBSITE ANIMATION
   ========================================== */


/* ==========================================
   1. REVEAL ANIMATION SAAT SCROLL
   ========================================== */

const revealElements = document.querySelectorAll(
    ".section, .about-box, .property-card, .project-card, .skill-card, .contact-box, .contact-wrapper"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


/* ==========================================
   2. NAVBAR BERUBAH SAAT SCROLL
   ========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==========================================
   3. PARALLAX FOTO HERO
   ========================================== */

const heroImage = document.querySelector(
    ".hero img, .home-image img"
);

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


/* ==========================================
   4. EFEK MOUSE PADA CARD
   ========================================== */

const cards = document.querySelectorAll(
    ".property-card, .project-card, .about-box, .skill-card, .card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ==========================================
   5. RIPPLE EFFECT PADA BUTTON
   ========================================== */

const buttons = document.querySelectorAll(
    ".button, .btn, button, .whatsapp-btn"
);

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size =
            Math.max(rect.width, rect.height);

        const x =
            event.clientX - rect.left - size / 2;

        const y =
            event.clientY - rect.top - size / 2;

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* ==========================================
   6. ACTIVE NAVIGATION SAAT SCROLL
   ========================================== */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    "nav a[href^='#']"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* ==========================================
   7. SMOOTH SCROLL NAVIGATION
   ========================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ==========================================
   8. PAGE LOADING ANIMATION
   ========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* ==========================================
   9. CONSOLE
   ========================================== */

console.log(
    "Shidqia Abadi Property Website Loaded ✓"
);