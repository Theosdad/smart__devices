const accordions = document.querySelectorAll('.accordion');
const accordionsButtons = document.querySelectorAll('.accordion__button');
const accordionsList = document.querySelectorAll('.accordion__button');

accordions.forEach(function (accordion) {
  const button = accordion.querySelector('.accordion__button');
  const list = accordion.querySelector('.accordion__list');

  button.addEventListener('click', function () {
    if (button.classList.contains('accordion__button--shown')) {
      button.classList.remove('accordion__button--shown');
    } else {
      accordionsButtons.forEach(function (accordionButton) {
        accordionButton.classList.remove('accordion__button--shown');
      });
      button.classList.add('accordion__button--shown');
    }
    if (list.classList.contains('accordion__list--shown')) {
      list.classList.remove('accordion__list--shown');
    } else {
      accordionsList.forEach(function (accordionList) {
        accordionList.classList.remove('accordion__list--shown');
      });
      list.classList.add('accordion__list--shown');
    }
  });
});
