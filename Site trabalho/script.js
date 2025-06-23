document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

    } else {
        console.warn("Elementos 'menu-toggle' ou 'main-nav' não encontrados. Verifique seu HTML.");
    }
});