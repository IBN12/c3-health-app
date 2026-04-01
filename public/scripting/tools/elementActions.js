/**
 *************** Nav Header Variables *************** 
 */
const mainNav = document.getElementById('nav-main'); 
const mainNavBrandLabel = document.querySelector('.nav-brand-label-container > a');

/**
 *************** Footer Variables *************** 
 */
const mainFooter = document.getElementById('footer-main');
const footerBrandLink = document.querySelector('.footer-brand-link'); 
const footerSocialLinks = document.querySelectorAll('.footer-social-link');
const footerLinkLists = document.querySelectorAll('.footer-link-list > li > a');
const footerLegalLinks = document.querySelectorAll('.footer-legal-links > a'); 


/**
 *************** Homepage Variables *************** 
 */
// |Homepage Header - Slideshow Container| 
const homepageHeader = document.querySelector('.homepage-header');
const slideshowContainer = document.querySelector('.slideshow-container');
const slideContent = document.querySelector('.slide-content');
const slideContentLinks = document.querySelectorAll('.slide-content > a');
const slideContentDots = document.querySelectorAll('.slide-dot');
const slideContentArrows = document.querySelectorAll('.slide-arrow');

// |Registration Section|
const homepageRegistrationSection = document.querySelector('.homepage-registration-section');
const regLinks = document.querySelectorAll('.reg-cta-group > a'); 

// |News Section|
const homepageNewsSection = document.querySelector('.homepage-news-section'); 
const viewAllNewsLink = document.querySelector('.news-view-all'); 
const newsCards = document.querySelectorAll('.news-card'); 

// |Features Section|
const homepageFeaturesSection = document.querySelector('.homepage-features-section');
const featCardLinks = document.querySelectorAll('.feat-card-link');
const visitLearningHubLink = document.querySelector('.feat-cta-primary');


// (async() => {
//     const homepagePath = await fetch("/");
//     console.log(homepagePath); // Testing 
// })();


export const activationHub = {
    disableActivated: false,
    enableActivated: false, 
}

// DisableElements(): Disable certain elements in the application for reasons. 
export function DisableElements(element, reason, path){
    if (element === 'Menu Window')
    {
        activationHub.disableActivated = true;

        if (reason === 'Menu Window Opened')
        {
            // Note: These paths will change based on where the application is uploaded. 
            if (path === 'http://localhost:4000/' || path === 'http://localhost:4000/#' 
                || path === 'https://c3-health-app-production.up.railway.app/' 
                || path === 'https://c3-health-app-production.up.railway.app/#') // Homepage Variables
            {
                // |Nav Header Variables|
                mainNavBrandLabel.classList.add('no-click');
                mainNavBrandLabel.setAttribute('tabindex', '-1');

                // |Footer Variables|
                footerBrandLink.classList.add('no-click');
                footerBrandLink.setAttribute('tabindex', '-1');

                footerSocialLinks.forEach((social) => {
                    social.classList.add('no-click');
                    social.setAttribute('tabindex', '-1'); 
                });

                footerLinkLists.forEach((link) => {
                    link.classList.add('no-click');
                    link.setAttribute('tabindex', '-1');
                });

                footerLegalLinks.forEach((legal) => {
                    legal.classList.add('no-click');
                    legal.setAttribute('tabindex', '-1');
                }); 

                // |Slideshow Container Variables|
                slideContentLinks.forEach((slide) => {
                    slide.classList.add('no-click');
                    slide.setAttribute('tabindex', '-1'); 
                });
                slideContentDots.forEach((dot) => {
                    dot.classList.add('no-click'); 
                    dot.setAttribute('tabindex', '-1');
                }); 
                slideContentArrows.forEach((arrow) => {
                    arrow.classList.add('no-click');
                    arrow.setAttribute('tabindex', '-1'); 
                }); 

                // |Registration Section|
                regLinks.forEach((link) => {
                    link.classList.add('no-click');
                    link.setAttribute('tabindex', '-1'); 
                });

                // |News Section|
                viewAllNewsLink.classList.add('no-click');
                viewAllNewsLink.setAttribute('tabindex', '-1');

                newsCards.forEach((card) => {
                    card.classList.add('no-click');
                    card.setAttribute('tabindex', '-1');
                });

                // |Features Section|
                featCardLinks.forEach((link) => {
                    link.classList.add('no-click');
                    link.setAttribute('tabindex', '-1');
                });

                visitLearningHubLink.classList.add('no-click');
                visitLearningHubLink.setAttribute('tabindex', '-1'); 
            }
        }
    }
}

// EnableElements(): Enable elements in the application for reasons. 
export function EnableElements(element, reason, path){
    if (element === 'Menu Window')
    {
        activationHub.disableActivated = false; 

        if (reason === 'Menu Window Closed')
        {
            // Note: These paths will change based on where the application is uploaded. 
            if (path === 'http://localhost:4000/' || path === 'http://localhost:4000/#'
                || 'https://c3-health-app-production.up.railway.app/'
                || 'https://c3-health-app-production.up.railway.app/#') // Homepage Variables
            {
                // |Nav Header Variables|
                mainNavBrandLabel.classList.remove('no-click');
                mainNavBrandLabel.removeAttribute('tabindex');

                // |Footer Variables|
                footerBrandLink.classList.remove('no-click');
                footerBrandLink.removeAttribute('tabindex');

                footerSocialLinks.forEach((social) => {
                    social.classList.remove('no-click');
                    social.removeAttribute('tabindex');
                });

                footerLinkLists.forEach((link) => {
                    link.classList.remove('no-click');
                    link.removeAttribute('tabindex');
                });

                footerLegalLinks.forEach((legal) => {
                    legal.classList.remove('no-click');
                    legal.removeAttribute('tabindex');  
                }); 

                // |Slideshow Container Variables|
                slideContentLinks.forEach((slide) => {
                    slide.classList.remove('no-click');
                    slide.removeAttribute('tabindex'); 
                });
                slideContentDots.forEach((dot) => {
                    dot.classList.remove('no-click'); 
                    dot.removeAttribute('tabindex');
                }); 
                slideContentArrows.forEach((arrow) => {
                    arrow.classList.remove('no-click');
                    arrow.removeAttribute('tabindex'); 
                }); 

                // |Registration Links|
                regLinks.forEach((link) => {
                    link.classList.remove('no-click');
                    link.removeAttribute('tabindex');
                });

                // |News Section|
                viewAllNewsLink.classList.remove('no-click');
                viewAllNewsLink.removeAttribute('tabindex'); 

                newsCards.forEach((card) => {
                    card.classList.remove('no-click');
                    card.removeAttribute('tabindex');  
                }); 

                // |Features Section|
                featCardLinks.forEach((link) => {
                    link.classList.remove('no-click');
                    link.removeAttribute('tabindex');
                });

                visitLearningHubLink.classList.remove('no-click');
                visitLearningHubLink.removeAttribute('tabindex');
            }
        }
    }
}

