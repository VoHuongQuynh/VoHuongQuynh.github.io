

var menuIcon = document.querySelector('.header__images-menu');
var menu = document.querySelector('.header__list');

menuIcon.onclick = function() {
    menu.classList.toggle('actived');
}
