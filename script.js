/* =====================================================
   NOVELEA - PREMIUM WEBSITE SCRIPT
===================================================== */


/* ================================
   SUPABASE CONNECTION
================================ */


const SUPABASE_URL = "https://zfkpevglwoeruwhulksg.supabase.co";

const SUPABASE_KEY = "sb_publishable_hFo-TwUV0nfbok5hh62QIg_ohLSry9Y";


let supabaseClient = null;


if (window.supabase) {


    supabaseClient = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


} else {


    console.error(
        "Supabase is niet geladen."
    );


}





/* ================================
   NAVBAR EFFECT
================================ */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(navbar){


        if(window.scrollY > 40){


            navbar.style.boxShadow =
            "0 20px 50px rgba(0,0,0,0.10)";


        } else {


            navbar.style.boxShadow =
            "none";


        }


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
   SCROLL ANIMATIONS
================================ */


const elements = document.querySelectorAll(

`
.usp div,
.services article,
.project,
.about,
.process-card,
.price-card,
.guarantee-grid div
`

);




elements.forEach(element => {


    element.style.opacity = "0";


    element.style.transform =
    "translateY(40px)";


    element.style.transition =
    "all .8s ease";


});





const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";


            entry.target.style.transform =
            "translateY(0)";


        }


    });


},

{

threshold:0.15

}

);





elements.forEach(element=>{


    observer.observe(element);


});







/* ================================
   HERO IMAGE PARALLAX
================================ */


const heroImage =
document.querySelector(".image-card img");



window.addEventListener("scroll",()=>{


    if(heroImage){


        const movement =
        window.scrollY * 0.035;


        heroImage.style.transform =
        `translateY(${movement}px)`;


    }


});







/* ================================
   FOOTER YEAR
================================ */


const footerYear =
document.querySelector("footer small");



if(footerYear){


    footerYear.textContent =
    "© " +
    new Date().getFullYear() +
    " Novelea";


}







/* ================================
   OFFERTE FORMULIER
================================ */


const offerteForm =
document.querySelector("form");



if(offerteForm){


    offerteForm.addEventListener(

    "submit",

    async(e)=>{


        e.preventDefault();



        const button =
        offerteForm.querySelector("button");



        if(button){


            button.innerHTML =
            "Verzenden...";


            button.disabled = true;


        }





        const naam =
        document.querySelector('[name="naam"]').value;


        const email =
        document.querySelector('[name="email"]').value;


        const bedrijf =
        document.querySelector('[name="bedrijf"]').value;


        const bericht =
        document.querySelector('[name="bericht"]').value;





        if(!supabaseClient){


            alert(
            "Er is een probleem met de verbinding."
            );


            return;


        }





        const {error} = await supabaseClient

        .from("offertes")

        .insert([

        {

            naam:naam,

            email:email,

            bedrijf:bedrijf,

            bericht:bericht

        }

        ]);







        if(error){


            console.error(
                "Supabase fout:",
                error
            );



            alert(
            "Er ging iets mis. Probeer opnieuw."
            );



            if(button){


                button.innerHTML =
                "Versturen";


                button.disabled=false;


            }


        }

        else{


            alert(
            "Bedankt! We nemen snel contact met je op."
            );



            offerteForm.reset();



            if(button){


                button.innerHTML =
                "Verstuurd ✓";


            }


        }



    });


}







/* ================================
   PROJECT HOVER EFFECT
================================ */


const projects =
document.querySelectorAll(".project");



projects.forEach(project=>{


    project.addEventListener(

    "mousemove",

    (e)=>{


        const rect =
        project.getBoundingClientRect();



        const x =
        e.clientX - rect.left;



        const y =
        e.clientY - rect.top;





        project.style.transform =

        `
        perspective(900px)
        rotateX(${-(y - rect.height/2)/45}deg)
        rotateY(${(x - rect.width/2)/45}deg)
        scale(1.03)
        `;


    });



    project.addEventListener(

    "mouseleave",

    ()=>{


        project.style.transform =
        "scale(1)";


    });


});







/* ================================
   PAGE LOAD
================================ */


window.addEventListener(

"load",

()=>{


document.body.style.opacity="1";


}

);
