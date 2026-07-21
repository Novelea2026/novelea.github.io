/* =====================================================
   NOVELEA - PREMIUM WEBSITE SCRIPT
===================================================== */


/* ================================
   NAVBAR SCROLL EFFECT
================================ */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
        "0 20px 50px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});





/* ================================
   SMOOTH SCROLL
================================ */


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        const target =
        document.querySelector(
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





/* ================================
   FADE IN ANIMATIONS
================================ */


const revealItems = document.querySelectorAll(

    "section, .services article, .usp div, .project, .review-grid article"

);



revealItems.forEach(item => {


    item.style.opacity = "0";

    item.style.transform =
    "translateY(40px)";


    item.style.transition =
    "all .8s ease";


});




const observer = new IntersectionObserver((entries)=>{


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



revealItems.forEach(item=>{

    observer.observe(item);

});





/* ================================
   HERO IMAGE PARALLAX
================================ */


const heroImage =
document.querySelector(".image-card img");



window.addEventListener("scroll",()=>{


    if(heroImage){


        let offset =
        window.scrollY * 0.05;


        heroImage.style.transform =
        `translateY(${offset}px)`;


    }


});





/* ================================
   FOOTER JAARTAL
================================ */


const footerDate =
document.querySelector("footer small");



if(footerDate){


    footerDate.textContent =
    "© " +
    new Date().getFullYear() +
    " Novelea";


}





/* ================================
   CONTACT FORM EFFECT
================================ */


const form =
document.querySelector("form");



if(form){


    form.addEventListener("submit",()=>{


        const button =
        form.querySelector("button");


        if(button){


            button.innerHTML =
            "Verzenden...";


            button.style.opacity =
            "0.7";


        }


    });


}





/* ================================
   MOUSE PREMIUM EFFECT
================================ */


const projects =
document.querySelectorAll(".project");



projects.forEach(project=>{


    project.addEventListener("mousemove",(e)=>{


        const rect =
        project.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;



        project.style.transform =

        `
        perspective(800px)
        rotateX(${-(y-rect.height/2)/30}deg)
        rotateY(${(x-rect.width/2)/30}deg)
        scale(1.03)
        `;


    });



    project.addEventListener("mouseleave",()=>{


        project.style.transform =
        "scale(1)";


    });


});





/* ================================
   PAGE LOAD EFFECT
================================ */


window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});
