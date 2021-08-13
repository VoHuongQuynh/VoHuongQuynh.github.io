
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.banner__outside');
toggle.onclick = function(){
    toggle.classList.toggle('actived');
    menu.classList.toggle('actived');
}