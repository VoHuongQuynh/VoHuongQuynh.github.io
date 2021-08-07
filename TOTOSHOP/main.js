
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        backToTop.classList.add('is-actived');
    }
    else{
        backToTop.classList.remove('is-actived');
    }
})

const searchIcon = document.querySelector('.banner__action-search');
const searchClose = document.querySelector('.search-close');
const searchModal = document.querySelector('.search-modal');
const searchModalInner = document.querySelector('.search-modal-inner');


searchIcon.addEventListener('click', function(){
    searchModal.classList.add('is-actived');
    searchModalInner.classList.add('is-actived');
})

searchClose.addEventListener('click', function(){
    searchModal.classList.remove('is-actived');
    searchModalInner.classList.remove('is-actived');
})



const cartIcon = document.querySelector('.banner__action-bag');
const cartClose = document.querySelector('.cart-close');
const cartModal = document.querySelector('.cart-modal');
const cartModalInner = document.querySelector('.cart-modal-inner');

cartIcon.addEventListener('click', function(){
    cartModal.classList.add('is-actived');
    cartModalInner.classList.add('is-actived');
})

cartClose.addEventListener('click', function(){
    cartModal.classList.remove('is-actived');
    cartModalInner.classList.remove('is-actived');
})



const bannerBg = document.querySelector('.banner');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 50){
        bannerBg.classList.add('is-actived');
    }
    else{
        bannerBg.classList.remove('is-actived');
    }
})