const textField = document.querySelector('.text-field__input');
const textFieldPlaceholder = document.querySelector('.text-field__input ~ .text-field__placeholder');

textField.addEventListener('change', () => {
  if(textField.value.length !== 0) {
    textFieldPlaceholder.classList.add('text-field__placeholder--active');
  } else {
    textFieldPlaceholder.classList.remove('text-field__placeholder--active');
  }

  if(!textField.value.includes('@') && textField.value.length !== 0) {
    textField.classList.add('text-field__input--error');
  } else {
    textField.classList.remove('text-field__input--error');
  }
})
