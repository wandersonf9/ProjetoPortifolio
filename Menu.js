const menuMobile= document.getElementById('menu-mobile');
const menuList= document.getElementById('btn-mobile');

menuMobile.addEventListener('click', animarMenu)

function animarMenu(){
    menuMobile.classList.toggle('abrir')
}




