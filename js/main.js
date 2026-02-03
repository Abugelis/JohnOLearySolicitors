/* ================== MOBILE MENU ================== */

const hamburger = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    });
}

/* ================== CARDS ================== */

const cards = document.querySelectorAll('[data-card]');

if (cards.length) {
    cards.forEach(card => {
        card.addEventListener('click', e => {
            const isLink = e.target.closest('a');

            // If user clicked a link → let it behave normally
            if (isLink) return;

            // Toggle card open state
            const isOpen = card.classList.contains('is-open');

            cards.forEach(c => c.classList.remove('is-open'));

            if (!isOpen) {
                card.classList.add('is-open');
            }
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('[data-card]')) {
            cards.forEach(c => c.classList.remove('is-open'));
        }
    });
}

/* ================== SIDE NAV ACTIVE LINK ================== */

const sideNavLinks = document.querySelectorAll('#side-nav-links a');

if (sideNavLinks.length) {
    const currentPath = window.location.pathname.split('/').pop();

    sideNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}
