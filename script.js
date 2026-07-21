/*====================================================
  WEBDESIGN STUDIO
  Premium Apple x Porsche JavaScript
====================================================*/


// ================================
// Navbar scroll effect
// ================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

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


const revealElements = document.querySelectorAll(
    ".card, .stats div, .portfolio-item, .about, .cta, form"
);


revealElements.forEach(element => {

    element.classList.add("fade-in");

});



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{

    observer.observe(element);

});




// ================================
// Hero parallax effect
// ================================


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll",()=>{


    if(heroImage){


        let scroll = window.scrollY;


        heroImage.style.transform =
        `translateY(${scroll * 0.08}px)`;

    }


});




// ================================
// Footer jaar automatisch
// ================================


const footerYear = document.querySelector("footer small");


if(footerYear){


    footerYear.textContent =
    "© " + new Date().getFullYear() +
    " WebDesign Studio";


}




// ================================
// Luxe hover effect kaarten
// ================================


const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;



        card.style.setProperty(
            "--mouse-x",
            x + "px"
        );


        card.style.setProperty(
            "--mouse-y",
            y + "px"
        );


    });



    card.addEventListener("mouseleave",()=>{


        card.style.removeProperty("--mouse-x");

        card.style.removeProperty("--mouse-y");


    });



});




// ================================
// Portfolio afbeelding klik effect
// ================================


const portfolioItems =
document.querySelectorAll(".portfolio-item");



portfolioItems.forEach(item=>{


    item.addEventListener("click",()=>{


        item.classList.toggle("active");


    });


});




// ================================
// Lazy loading afbeeldingen
// ================================


document.querySelectorAll("img").forEach(img=>{


    img.setAttribute(
        "loading",
        "lazy"
    );


});




// ================================
// Page load animatie
// ================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
