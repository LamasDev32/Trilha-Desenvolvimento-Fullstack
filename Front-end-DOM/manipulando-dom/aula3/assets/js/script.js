const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.add('menu-open');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('menu-open');
    }
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });
});

const titulo = document.querySelectorAll('.titulo');

titulo.forEach((tit) => {
    tit.addEventListener('mouseover', () => {
        tit.style.color = 'blue';
        tit.style.fontSize = '2em';
    });
});

titulo.forEach((tit) => {
    tit.addEventListener('mouseout', () => {
        tit.style.color = '';
        tit.style.fontSize = '';
    });
});
