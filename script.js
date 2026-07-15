/*=========================
LOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
            // initialize AOS after loader is hidden to ensure animations trigger
            if (window.AOS) {
                AOS.init({ duration: 1000, once: true, offset: 120 });
                AOS.refresh();
            }
        }, 600);
    }

});

/*=========================
TYPING EFFECT
=========================*/

if (document.querySelector("#typing")) {

    new Typed("#typing",{

        strings:[

            "AI & Data Science Student",

            "Machine Learning Developer",

            "Python Developer",

            "Full Stack Developer",

            "Data Analyst"

        ],

    typeSpeed:60,

    backSpeed:35,

    backDelay:1800,

    loop:true

    });

}
particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: ["#6366F1", "#8B5CF6", "#06B6D4"]

        },

        shape: {

            type: "circle",

            stroke: {

                width: 0,

                color: "#000"

            }

        },

        opacity: {

            value: 0.55,

            random: true,

            anim: {

                enable: false

            }

        },

        size: {

            value: 3,

            random: true,

            anim: {

                enable: false

            }

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#8B5CF6",

            opacity: 0.28,

            width: 1

        },

        move: {

            enable: true,

            speed: 1.8,

            direction: "none",

            random: false,

            straight: false,

            out_mode: "out",

            bounce: false

        }

    },

    interactivity: {

        detect_on: "window",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            },

            resize: true

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: 0.45

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});


/*=========================SMOOTH SCROLL
=========================*/

const headerHeight = document.querySelector("header")?.offsetHeight || 100;

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({

                top: targetPosition,

                behavior:"smooth"

            });

        }

    });

});


/*=========================
SCROLL PROGRESS BAR
=========================*/

window.addEventListener("scroll",()=>{

    const progress=document.getElementById("progress-bar");

    const totalHeight=document.body.scrollHeight-window.innerHeight;

    const progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});


/*=========================
BACK TO TOP
=========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
ACTIVE NAVIGATION
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/*=====================================
    ANIMATED COUNTERS
=====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: .5
});

counters.forEach(counter => counterObserver.observe(counter));



/*=====================================
      VANILLA TILT
=====================================*/

VanillaTilt.init(document.querySelectorAll(

".project-card,.certificate-card,.card,.skill-card,.resume-card"

),{

    max:10,

    speed:500,

    glare:true,

    "max-glare":0.2

});



/*=====================================
      MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}



/*=====================================
     NAVBAR SHADOW
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow="none";

    }

});



/*=====================================
      HERO FADE
=====================================*/

gsap.from(".hero-left",{

    opacity:0,

    x:-80,

    duration:1.2

});

gsap.from(".hero-right",{

    opacity:0,

    x:80,

    duration:1.2

});



/*=====================================
      FLOATING CARDS
=====================================*/

gsap.to(".hero-card",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:2,

    ease:"power1.inOut"

});



/*=====================================
      SKILL CIRCLE ANIMATION
=====================================*/

const circles = document.querySelectorAll(".circle");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const circle=entry.target;

const percent=circle.dataset.percent;

circle.style.background=`conic-gradient(
var(--primary) ${percent}%,
#E5E7EB ${percent}% 100%
)`;

}

});

});

circles.forEach(circle=>{

skillObserver.observe(circle);

});



/*=====================================
     BUTTON RIPPLE EFFECT
=====================================*/

document.querySelectorAll(".btn,.resume-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});



/*=====================================
     PAGE FADE
=====================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

gsap.to("body",{

opacity:1,

duration:.8

});

});
/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

});


document.querySelectorAll("a,button,.card,.project-card,.certificate-card")
.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-grow");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-grow");

});

});


/*=========================================
        FLOATING BLOBS
=========================================*/

gsap.to(".gradient-1",{

x:80,

y:50,

duration:12,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

gsap.to(".gradient-2",{

x:-80,

y:-60,

duration:10,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

gsap.to(".gradient-3",{

x:40,

y:-90,

duration:14,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});


/*=========================================
        MAGNETIC BUTTON
=========================================*/

document.querySelectorAll(".btn,.btn-outline,.resume-btn")
.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

button.style.transform=`translate(
${(x-rect.width/2)/8}px,
${(y-rect.height/2)/8}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});


/*=========================================
      CERTIFICATE POPUP
=========================================*/

const certificates=document.querySelectorAll(".certificate-card img");

certificates.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="popup";

overlay.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});


/*=========================================
      IMAGE HOVER EFFECT
=========================================*/

document.querySelectorAll(".project-card img")
.forEach(image=>{

image.addEventListener("mousemove",(e)=>{

const x=e.offsetX/image.offsetWidth*100;

const y=e.offsetY/image.offsetHeight*100;

image.style.transformOrigin=`${x}% ${y}%`;

});

});


/*=========================================
      THEME TOGGLE
=========================================*/

const theme=document.createElement("button");

theme.innerHTML="🌙";

theme.className="theme-btn";

document.body.appendChild(theme);

theme.onclick=()=>{

document.body.classList.toggle("dark");

theme.innerHTML=document.body.classList.contains("dark")
?"☀️":"🌙";

};