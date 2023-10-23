const menu = document.querySelector('.menu');
const openMenuButton = document.querySelector('.page-header__menu-button');
const closeMenuButton = document.querySelector('.menu__button');

openMenuButton.addEventListener('click', function() {
  menu.classList.remove('menu--close');
  menu.classList.add('menu--open');
})

closeMenuButton.addEventListener('click', function() {
  menu.classList.remove('menu--open');
  menu.classList.add('menu--close');
})

