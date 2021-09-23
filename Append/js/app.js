
var toogle = document.querySelector('.plan__date-toogle');

var numberMonth = document.querySelectorAll('.plan__list-number-month');
var numberYear = document.querySelectorAll('.plan__list-number-year');

var perMonth = document.querySelectorAll('.plan__list-per-month');
var perYear = document.querySelectorAll('.plan__list-per-year');


toogle.onclick = function(e) {
    toogle.classList.toggle('actived');
    
    if(toogle.classList.contains('actived')) {
        for(i = 0; i < numberMonth.length; i++) {
            numberMonth[i].classList.add('actived');
        }
        for(i = 0; i < numberYear.length; i++) {
            numberYear[i].classList.add('actived');
        }

        for(i = 0; i < perMonth.length; i++) {
            perMonth[i].classList.add('actived');
        }
        for(i = 0; i < perYear.length; i++) {
            perYear[i].classList.add('actived');
        }
    }
    else {
        for(i = 0; i < numberMonth.length; i++) {
            numberMonth[i].classList.remove('actived');
        }
        for(i = 0; i < numberYear.length; i++) {
            numberYear[i].classList.remove('actived');
        }

        for(i = 0; i < perMonth.length; i++) {
            perMonth[i].classList.remove('actived');
        }
        for(i = 0; i < perYear.length; i++) {
            perYear[i].classList.remove('actived');
        }
    }

    e.preventDefault();
}



// menu
var menuIcon = document.querySelector('.header__menu');
var menuList = document.querySelector('.header__list');
menuIcon.onclick = function() {
    menuIcon.classList.toggle('actived');
    menuList.classList.toggle('actived');
}


