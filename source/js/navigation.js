const navigation = document.querySelector('.navigation');
const sections = document.querySelectorAll('section');
const items = document.querySelectorAll('.navigation__link');


function makeStickyNavigation() {
  if(window.scrollY >= 148 && window.innerWidth > 736) {
    navigation.classList.add('navigation--scroll');
  } else {
    navigation.classList.remove('navigation--scroll');
  }
}

function changeCurrentItem() {
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop) {
      items.forEach(item => {
        item.classList.remove('navigation__link--current');
        if(item.dataset.section === section.dataset.section) {
          item.classList.add('navigation__link--current');
        }
      })
    }
  });
}

window.addEventListener('scroll', makeStickyNavigation);
window.addEventListener('scroll', changeCurrentItem);

