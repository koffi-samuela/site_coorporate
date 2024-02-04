console.log('coucou les amis');
let nav = document.querySelector('.nav')
console.log(nav);

nav.style.backgroundColor='transparent';
nav.style.padding =  "2vh 5vw";
document.addEventListener("scroll",()=>{
    if (window.scrollY>70) {
        nav.style.backgroundColor ='#19376D'; 
        nav.querySelectorAll('a')
        .forEach((e)=>{e.style.fontSize="14px"})
        nav.style.padding =  "1vh 5vw";
        nav.querySelector('.logo').style.width="70px"
    }
    else{
    nav.style.backgroundColor='transparent';
    nav.querySelectorAll('a')
        .forEach((e)=>{e.style.fontSize="16px"})
    nav.style.padding =  "2vh 5vw";


    }
})
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let line4 = document.querySelector('.line4')
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
// line1.style.display = "none"
function display_text(element,time) {
    setTimeout(() => {
        element.style.opacity = 1;
    }, time);
}
display_text(line1,200)
display_text(line2,600)
display_text(line3,1000)
display_text(line4,1400)


document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname;
    console.log(currentPage);
    // Sélectionnez tous les liens avec la classe "menu-link"
    var menuLinks = document.querySelectorAll('.nav_link');

    // Parcourez chaque lien et ajoutez la classe "active" si son href correspond à la page actuelle
    menuLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});


//--------------------------MENU BURGER ------------------------------
var menuburger = document.querySelector('.burgerMenu');
// var toggle = document.querySelector('.toggle');
var close_menu = document.querySelector('.closed');
// var body = document.querySelector('body');
var burgerMenu = document.querySelector('.BurgermenuIcone');
console.log(burgerMenu);
burgerMenu.addEventListener('click',function () {
    menuburger.classList.toggle('active')
})
close_menu.addEventListener('click',function () {
    menuburger.classList.toggle('active')
})