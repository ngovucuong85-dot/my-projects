document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        });
    }

    const hamburgerBtn = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    if (hamburgerBtn && navUl) {
        hamburgerBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
            });
        });
    }
});