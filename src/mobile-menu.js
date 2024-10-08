import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const overlay = document.querySelector('.js-overlay');
  
    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        overlay.classList.toggle('is-open'); 

        if (!isMenuOpen) {
            disableBodyScroll(document.body);
        } else {
            enableBodyScroll(document.body);
        }
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu); 
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        overlay.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        enableBodyScroll(document.body);
    });
})();
