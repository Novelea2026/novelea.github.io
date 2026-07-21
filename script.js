document.addEventListener("DOMContentLoaded", () => {

    console.log("WebDesign Studio geladen");


    // ===========================
    // Scroll animaties
    // ===========================

    const elements = document.querySelectorAll(
        ".card, .features div, section h2, section p"
    );

    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "all 0.8s ease";
    });


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold:0.15
    });


    elements.forEach(element => {
        observer.observe(element);
    });



    // ===========================
    // Navbar effect bij scrollen
    // ===========================

    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.background = "rgba(255,255,255,0.95)";
            navbar.style.boxShadow =
            "0 15px 40px rgba(0,0,0,0.12)";

        } else {

            navbar.style.background =
            "rgba(255,255,255,0.75)";

            navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.08)";

        }

    });



    // ===========================
    // Smooth scroll voor links
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    // ===========================
    // Formulier bevestiging
    // ===========================

    const form = document.querySelector("form");


    if(form){

        form.addEventListener("submit", () => {

            const button = form.querySelector("button");

            button.innerHTML = "Versturen...";

            button.style.opacity = "0.7";

        });

    }



    // ===========================
    // Jaar automatisch aanpassen
    // ===========================

    const year = document.querySelector("footer p");

    if(year){

        const currentYear = new Date().getFullYear();

        year.innerHTML =
        year.innerHTML.replace("2026", currentYear);

    }

});
