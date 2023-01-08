window.addEventListener('DOMContentLoaded', () => {
    const fpa1 = document.querySelector('.fpa1'),
    li1 = document.querySelectorAll('.li1'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        fpa1.classList.toggle('fpa1_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            fpa1.classList.toggle('fpa1_active');
        })
    })
})