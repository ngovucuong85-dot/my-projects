
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️';
        } else {
            themeToggleBtn.textContent = '🌙';
        }
    });
}


const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert('Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.');
        contactForm.reset(); 
    });
}