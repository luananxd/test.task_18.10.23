import { chooseClickedElement } from "./util.min.js";

const select = document.querySelector('.custom-select');
const selectPlaceholder = document.querySelector('.custom-select__preview');
const selectItems = document.querySelectorAll('.custom-select__item');

select.addEventListener('click', () => {
  select.classList.toggle('custom-select--open');
})

document.addEventListener('click', function(event) {
  if (!select.contains(event.target)) {
      select.classList.remove('custom-select--open');
  }
});

selectItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    chooseClickedElement(selectItems, e.target, 'custom-select__item--current');
    selectPlaceholder.setAttribute('value', item.textContent);
  })
  select.classList.remove('custom-select--open');
})
