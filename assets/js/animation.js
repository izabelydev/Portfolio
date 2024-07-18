const menu = document.querySelector('.navbar');
const openMenu = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.arrow-back');

openMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});