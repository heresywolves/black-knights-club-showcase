const movingWrapper = document.querySelector('.section-4 .renovation-grid');
const leftButton = document.querySelector('.section-4 button.left');
const rightButton = document.querySelector('.section-4 button.right');
const elementContainers= movingWrapper.querySelectorAll('.section-4 .element-container');
const sliderButtons = document.querySelector('.section-4 .renovation-slider');

const STEPSIZE = 300;
const PAGES = 5

for (let i = 0; i < PAGES; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('page-circle');
  console.log(newDiv);
  sliderButtons.insertBefore(newDiv, rightButton);
}
