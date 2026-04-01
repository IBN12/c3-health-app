import { DisableElements, EnableElements } from "../tools/elementActions.js";

// Main body dom variables:
const mainBody = document.querySelector('body');

// Menu window dom variables:
const menuBtn = document.querySelector('.nav-menu-button'); 
const menuWindow = document.getElementById('menu-window-main');
const menuCloseBtn = document.querySelector('.menu-window-close-button');
const menuBrandLink = document.querySelector('.menu-brand-link');
const menuSocialLink = document.querySelectorAll('.menu-social-link');
const menuNavList = document.querySelectorAll('.menu-nav-list > li > a');

// Main navigation dom variables: 
const mainNav = document.getElementById('nav-main');

// Main homepage dom variables:
const mainHomepage = document.getElementById('homepage-main'); 

// Disable Menu Window properties by default:
menuBrandLink.classList.add('no-click'); 
menuBrandLink.setAttribute('tabindex', '-1');

menuSocialLink.forEach((social) => {
    social.classList.add('no-click');
    social.setAttribute('tabindex', '-1'); 
});

menuNavList.forEach((nav) => {
    nav.classList.add('no-click');
    nav.setAttribute('tabindex', '-1'); 
}); 

// Menu window buttons: 
menuBtn.addEventListener('click', SlideMenuWindow);
menuCloseBtn.addEventListener('click', CloseSlideMenuWindow); 

// SlideMenuWindow(): Will open the menu connected to the main navigation header. 
function SlideMenuWindow(e){
    menuBtn.classList.add('menu-is-open');
    menuWindow.classList.add('slide-menu-window');

    menuBrandLink.classList.remove('no-click');
    menuBrandLink.removeAttribute('tabindex'); 

    menuSocialLink.forEach((social) => {
        social.classList.remove('no-click');
        social.removeAttribute('tabindex');
    }); 

    menuNavList.forEach((nav) => {
        nav.classList.remove('no-click');
        nav.removeAttribute('tabindex');  
    }); 

    mainBody.setAttribute('style', 'overflow: hidden;'); 
    mainNav.setAttribute('style', 'filter: blur(3px) brightness(30%) opacity(60%);');
    mainHomepage.setAttribute('style', 'filter: blur(3px) brightness(30%) opacity(60%);');  

    DisableElements('Menu Window', 'Menu Window Opened', e.target.baseURI);
}

// CloseSlideMenuWindow(): Will close the menu connected to the main navigation header.
function CloseSlideMenuWindow(e){
    console.log(e.target.baseURI); // Testing 

    menuBtn.classList.remove('menu-is-open');
    menuWindow.classList.remove('slide-menu-window'); 

    menuBrandLink.classList.add('no-click');
    menuBrandLink.setAttribute('tabindex', '-1');

    menuSocialLink.forEach((social) => {
        social.classList.add('no-click');
        social.setAttribute('tabindex', '-1');
    });

    menuNavList.forEach((nav) => {
        nav.classList.add('no-click');
        nav.setAttribute('tabindex', '-1');
    }); 

    mainBody.removeAttribute('style'); 
    mainNav.removeAttribute('style');
    mainHomepage.removeAttribute('style'); 
    
    EnableElements('Menu Window', 'Menu Window Closed', e.target.baseURI); 
}