function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    function toggleFooter() {
        const footerGrid = document.querySelector('.footer-grid');
        const footerResponsive = document.querySelector('.footer-responsive');

        if (window.innerWidth <= 800) {
            footerGrid.style.display = 'none';
            footerResponsive.style.display = 'block';
        } else {
            footerGrid.style.display = 'grid';
            footerResponsive.style.display = 'none';
        }
    }


    toggleFooter();

    window.addEventListener('resize', toggleFooter);
});
