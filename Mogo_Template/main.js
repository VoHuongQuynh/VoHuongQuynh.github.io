
const menu = document.querySelector(".banner__menu-list");
const ToggleMenu = document.querySelector(".banner__menu-toggle");

ToggleMenu.addEventListener("click", function(){
    menu.classList.add("is-actived");
})


document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !e.target.matches(".banner__menu-toggle")){
        menu.classList.remove("is-actived");
    }
})