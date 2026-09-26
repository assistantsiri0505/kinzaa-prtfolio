```javascript
/* =========================================================
   KINZA AWAN PORTFOLIO - JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");

            const icon = menuToggle.querySelector("i");

            if (navLinks.classList.contains("show")) {
                icon.classList.remove("bi-list");
                icon.classList.add("bi-x-lg");
            } else {
                icon.classList.remove("bi-x-lg");
                icon.classList.add("bi-list");
            }
        });


        /* Close menu after clicking a link */

        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("bi-x-lg");
                icon.classList.add("bi-list");
            });
        });
    }


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* ================= HEADER ON SCROLL ================= */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item, .service-card, .contact-wrapper"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= SKILL CARD DELAY ================= */

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.06}s`;
    });


    /* ================= PROJECT CARD DELAY ================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });


    /* ================= TIMELINE DELAY ================= */

    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.12}s`;
    });


    /* ================= CONTACT FORM ================= */

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {

                formMessage.textContent =
                    "Please fill in all the fields.";

                return;
            }


            /* Simple email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }


            formMessage.textContent =
                `Thank you, ${name}! Your message has been received.`;

            contactForm.reset();

        });
    }


    /* ================= BACK TO TOP ================= */

    const backToTop = document.querySelector(
        '.footer-bottom a[href="#home"]'
    );

    if (backToTop) {

        backToTop.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= HERO FLOATING EFFECT ================= */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 800) {

        heroVisual.addEventListener("mousemove", event => {

            const rect = heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left - rect.width / 2) / 35;

            const y =
                (event.clientY - rect.top - rect.height / 2) / 35;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });


        heroVisual.addEventListener("mouseleave", () => {

            heroVisual.style.transform = "translate(0, 0)";

        });

    }


    /* ================= CURRENT YEAR ================= */

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        const currentYear = new Date().getFullYear();

        footerYear.textContent =
            `© ${currentYear} Kinza Awan. All rights reserved.`;

    }


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "Kinza Awan Portfolio loaded successfully."
    );

});
```
