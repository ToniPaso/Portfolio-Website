const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menuList = document.querySelector('.menul');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menuList.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menuList.classList.remove('open');
};

var type = new Typed(".input", {
    strings: ["Developer."],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
});