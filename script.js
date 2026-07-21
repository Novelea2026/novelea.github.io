// ==============================
// Navbar Scroll Effect
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(8,8,8,0.95)";
        navbar.style.padding = "16px 9%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(10,10,10,.6)";
        navbar.style.padding = "22px 9%";
        navbar.style.boxShadow = "none";

    }

});


// ==============================
// Fade In On Scroll
// ==============================

const hiddenElements = document.querySelectorAll(
    ".card, .features div, section h2, #over p, form"
);

hiddenElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(el => observer.observe(el));


// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Typing Effect
// ==============================

const title = document.querySelector(".hero h1");

const text = title.innerText;

title.innerText = "";

let index = 0;

function typeText(){

    if(index < text.length){

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText,40);

    }

}

window.addEventListener("load", typeText);


// ==============================
// Parallax Hero
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==============================
// Ripple Effect Buttons
// ==============================

const buttons = document.querySelectorAll(
".cta-button,.secondary-button,.nav-btn,button"
);

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";

        circle.style.left=e.offsetX-diameter/2+"px";
        circle.style.top=e.offsetY-diameter/2+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.background="rgba(255,255,255,.4)";
        circle.style.transform="scale(0)";
        circle.style.animation="ripple .6s linear";
        circle.style.pointerEvents="none";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});


// ==============================
// Ripple Animation CSS
// ==============================

const style=document.createElement("style");

style.innerHTML=`

button,
.cta-button,
.secondary-button,
.nav-btn{

position:relative;
overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(4);
opacity:0;

}

}

.active{

color:#d4af37 !important;

}

`;

document.head.appendChild(style);


// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} WebDesign Studio - Alle rechten voorbehouden.`;

}


// ==============================
// Hero Floating Animation
// ==============================

const heroContent = document.querySelector(".hero-content");

let move = 0;

setInterval(()=>{

    move = move === 0 ? 8 : 0;

    heroContent.style.transform = `translateY(${move}px)`;

    heroContent.style.transition = "2s ease";

},2000);
