/*=======================================Toggle icon navbar=========================================*/
let nemuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*====================================scroll section active link=====================================*/

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

windows.onscroll= () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

/*========================================Sticky nav bar===============================================*/
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

/*===================================remove Toggle icon navbar=========================================*/
menuIcon.classList.remove('fa-mark');
navbar.classList.remove('active');
}
/*==================================Scroll reveal===============================================*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});

/*==================================Typed Js===============================================*/

const typed=new Typed('.multiple-text',{
    strings:['Full Stack Developer','Web Designer','Oracle Sql Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})