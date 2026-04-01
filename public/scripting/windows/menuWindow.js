import { DisableElements, EnableElements } from "../tools/elementActions.js";

// Main body dom variables:
const mainBody = document.querySelector('body');

// Footer dom variables:
const mainFooter = document.getElementById('footer-main');

// Menu window dom variables:
const menuBtnSVG = document.querySelector('.nav-menu-button');
const menuWindow = document.getElementById('menu-window-main');
const menuCloseBtn = document.querySelector('.menu-window-close-button');
const menuBrandLink = document.querySelector('.menu-brand-link');
const menuSocialLink = document.querySelectorAll('.menu-social-link');
const menuNavList = document.querySelectorAll('.menu-nav-list > li > a');

// Main navigation dom variables: 
const mainNav = document.querySelector('#nav-main');

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

// Sentinel variables viewport changes: 
let resizeTapped = false; 
let mobileCurrent = false; 

// Menu window buttons: 
menuBtnSVG.addEventListener('click', SlideMenuWindow);
menuCloseBtn.addEventListener('click', CloseSlideMenuWindow); 

// SlideMenuWindow(): Will open the menu connected to the main navigation header. 
function SlideMenuWindow(e){
    menuBtnSVG.classList.add('menu-is-open');
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

    // If there is a page resize, then reset the elements back.
    window.addEventListener('resize', () => {
        if (menuWindow.clientWidth < 600 && menuWindow.classList.contains('slide-menu-window') && !resizeTapped && !mobileCurrent)
        {
            setTimeout(() => {
                mainFooter.classList.add('hide');
                mainHomepage.classList.add('hide');
                mainNav.classList.add('visibility');
            }, 100);

            mainBody.removeAttribute('style');  
            menuWindow.classList.add('bg-color-mobile-menu-window');

            resizeTapped = true;
        }
        else if (menuWindow.clientWidth >= 600 && menuWindow.classList.contains('slide-menu-window'))
        {
            setTimeout(() => {
                mainFooter.classList.remove('hide');
                mainFooter.removeAttribute('class');
                mainHomepage.classList.remove('hide');
                mainHomepage.removeAttribute('class');
                mainNav.classList.remove('visibility');
                mainNav.removeAttribute('class');  
            }, 100); 

            mainBody.setAttribute('style', 'overflow: hidden;');
            menuWindow.classList.remove('bg-color-mobile-menu-window');
            
            resizeTapped = false; 
            mobileCurrent = false; 
        }
    });

    // Default resize:
    if (menuWindow.clientWidth < 600)
    {
        setTimeout(() => {
            mainFooter.classList.add('hide');
            mainHomepage.classList.add('hide');
            mainNav.classList.add('visibility');
        }, 800);

        mainBody.removeAttribute('style'); 
        menuWindow.classList.add('bg-color-mobile-menu-window'); 

        mobileCurrent = true;
        resizeTapped = false;
    }
    else if (menuWindow.clientWidth >= 600)
    {
        mainBody.setAttribute('style', 'overflow: hidden;');
        menuWindow.classList.remove('bg-color-mobile-menu-window'); 
        
        mobileCurrent = false; 
        resizeTapped = false; 
    }

    mainNav.setAttribute('style', 'filter: blur(3px) brightness(30%) opacity(60%);');
    mainHomepage.setAttribute('style', 'filter: blur(3px) brightness(30%) opacity(60%);');  

    DisableElements('Menu Window', 'Menu Window Opened', e.target.baseURI);
}

// CloseSlideMenuWindow(): Will close the menu connected to the main navigation header.
function CloseSlideMenuWindow(e){
    menuBtnSVG.classList.remove('menu-is-open');
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

    if (menuWindow.clientWidth < 600)
    {
        mainFooter.classList.remove('hide');
        mainHomepage.classList.remove('hide');
        mainNav.classList.remove('visibility'); 

        setTimeout(() => {
            menuWindow.classList.remove('bg-color-mobile-menu-window'); 
        }, 100);

        resizeTapped = false; 
    }
    else
    {
        mainBody.removeAttribute('style'); 
    }

    mainNav.removeAttribute('style');
    mainHomepage.removeAttribute('style'); 
    
    EnableElements('Menu Window', 'Menu Window Closed', e.target.baseURI); 
}