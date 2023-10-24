import './util.min.js';
import './navigation.min.js';
import './menu.min.js';
import './select.min.js';
import './tabs.min.js';
import './text-field.min.js';

// Inferno

const lastText = document.querySelector('.page-content__win-text');

window.addEventListener('resize', () => {
  if(window.innerWidth == 666) {
    lastText.textContent = 'Тысяча чертей! 😈'
  } else {
    lastText.textContent = 'Победа! 😜'
  }
})
