const tabs = document.querySelectorAll('.examples__tab');
const examplesContent = document.querySelectorAll('.examples__content');

tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    chooseClickedElement(tabs, this, 'examples__tab--current');
    chooseClickedElement(examplesContent, examplesContent[index], 'examples__content--current');
  })
})

function chooseClickedElement(array, thisItem, className) {
  array.forEach((item) => item.classList.remove(className));
  thisItem.classList.add(className);
}
