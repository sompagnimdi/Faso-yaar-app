let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}