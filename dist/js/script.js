window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    menu__burger = document.querySelector('.menu__burger');

    menu__burger.addEventListener('click', () => {
        menu__burger.classList.toggle('menu__burger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu__burger.classList.toggle('menu__burger__active');
            menu.classList.toggle('menu__active');
        })
    })
})