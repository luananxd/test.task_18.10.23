import { chooseClickedElement } from "./util.min.js";

const tabs = document.querySelectorAll('.examples__tab');
const examplesContent = document.querySelectorAll('.examples__content');

tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    chooseClickedElement(tabs, this, 'examples__tab--current');
    chooseClickedElement(examplesContent, examplesContent[index], 'examples__content--current');
  })
})

