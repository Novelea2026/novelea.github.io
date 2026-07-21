/*====================================================
   NOVELEA
   Premium Website JavaScript
====================================================*/


// ================================
// Navbar scroll effect
// ================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});




// ================================
// Smooth scrolling
// ================================

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




// ================================
// Scroll reveal animaties
// ================================


const animatedElements = document.querySelectorAll(

    ".card, .stats div, .portfolio-item, .about, .cta, form"

);



animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all .8s ease";

});



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";


        }


    });


},{

    threshold:0.15

});



animatedElements.forEach(element=>{

    revealObserver.observe(element);

});





// ================================
// Hero parallax effect
// ================================


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll",()=>{


    if(heroImage){


        const movement =
        window.scrollY * 0.08;


        heroImage.style.transform =
        `translateY(${movement}px)`;


    }


});





// ================================
// Footer automatisch jaartal
// ================================


const footerYear =
document.querySelector("footer small");


if(footerYear){


    footerYear.textContent =
    "© " +
    new Date().getFullYear() +
    " Novelea";


}





// ================================
// Luxe kaart hover effect
// ================================


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transition =
        ".4s";


    });



});





// ================================
// Formulier bevestiging
// ================================


const form =
document.querySelector("form");


if(form){


    form.addEventListener("submit",()=>{


        const button =
        form.querySelector("button");


        if(button){


            button.innerHTML =
            "Aanvraag wordt verzonden...";


            button.style.opacity =
            "0.7";


        }


    });


}





// ================================
// Pagina laad animatie
// ================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
