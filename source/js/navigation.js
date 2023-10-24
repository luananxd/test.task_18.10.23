import { markCurrentSection } from "./util.min.js";

const navigation = document.querySelector('.navigation');
const pageSections = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationButton = document.querySelector('.navigation__button');


function makeStickyNavigation() {
  if(window.scrollY >= 148 && window.innerWidth > 736) {
    navigation.classList.add('navigation--scroll');
  } else {
    navigation.classList.remove('navigation--scroll');
  }
}

function changeCurrentLink() {
  pageSections.forEach(section => {
    if (window.scrollY >= section.offsetTop && window.innerWidth > 736) {
      markCurrentSection(section, navigationLinks, 'navigation__link--current')
    }
  });
}

function showNavigationButton() {
  if(window.scrollY >= 160 && window.innerWidth < 736) {
    navigationButton.classList.add('navigation__button--visible');
  } else {
    navigationButton.classList.remove('navigation__button--visible');
  }
}

window.addEventListener('scroll', makeStickyNavigation);
window.addEventListener('scroll', changeCurrentLink);
window.addEventListener('scroll', showNavigationButton);
navigationButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


