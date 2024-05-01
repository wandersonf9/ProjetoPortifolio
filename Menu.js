const menuMobile= document.getElementById('menu-mobile');
const menuList= document.getElementById('btn-mobile');

menuMobile.addEventListener('mouseover', animarMenu)

function animarMenu(){
    menuMobile.classList.toggle('abrir')
    menuList.classList.toggle('ativo')
}




