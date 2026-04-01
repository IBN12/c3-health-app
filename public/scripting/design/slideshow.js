import { activationHub } from "../tools/elementActions.js";

(() => {
    const AUTOPLAY_DELAY = 5500; // ms per slide

    const container   = document.querySelector('.slideshow-container');
    if (!container) return;

    const slides      = Array.from(container.querySelectorAll('.slide'));
    const dots        = Array.from(container.querySelectorAll('.slide-dot'));
    const prevBtn     = container.querySelector('.slide-arrow--prev');
    const nextBtn     = container.querySelector('.slide-arrow--next');
    const progressBar = container.querySelector('.slide-progress-bar');

    let current    = 0;
    let autoTimer  = null;
    let progTimer  = null;

    /* ── Core: activate a slide ── */
    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('active');
        dots[current].classList.add('active');

        resetProgress();
    }

    /* ── Progress bar animation ── */
    function resetProgress() {
        if (!progressBar) return;
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        // Force reflow so the transition reset takes effect
        void progressBar.offsetWidth;

        progressBar.style.transition = `width ${AUTOPLAY_DELAY}ms linear`;
        progressBar.style.width = '100%';
    }

    /* ── Autoplay ── */
    function startAutoplay() {
        stopAutoplay();
        autoTimer = setInterval(() => goTo(current + 1), AUTOPLAY_DELAY);
        resetProgress();
    }

    function stopAutoplay() {
        clearInterval(autoTimer);
        autoTimer = null;
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
        }
    }

    /* ── Arrow buttons ── */
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(current - 1);
        startAutoplay();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(current + 1);
        startAutoplay();
    });

    /* ── Dot buttons ── */
    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            if (i === current) return;
            goTo(i);
            startAutoplay();
        });
    });

    /* ── Click on slide navigates to its href ── */
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            if (!activationHub.disableActivated)
            {
                const href = slide.dataset.href;
                if (href) window.location.href = href;
            }
        });
    });

    /* ── Keyboard navigation ── */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { goTo(current - 1); startAutoplay(); }
        if (e.key === 'ArrowRight') { goTo(current + 1); startAutoplay(); }
    });

    /* ── Touch / swipe support ── */
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 40) return;
        delta < 0 ? goTo(current + 1) : goTo(current - 1);
        startAutoplay();
    }, { passive: true });

    /* ── Pause on hover ── */
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    /* ── Init ── */
    goTo(0);
    startAutoplay();
})();
