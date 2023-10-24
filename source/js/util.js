function chooseClickedElement(elements, target, className) {
  elements.forEach((item) => item.classList.remove(className));
  target.classList.add(className);
}

function markCurrentSection(pageSection, navigationLinks, className) {
  navigationLinks.forEach(navigationLink => {
    navigationLink.classList.remove(className);
    if(navigationLink.dataset.section === pageSection.dataset.section) {
      navigationLink.classList.add(className);
    }
  })
}

export {chooseClickedElement, markCurrentSection};
