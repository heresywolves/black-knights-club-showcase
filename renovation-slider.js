const renovationSlider = () => {
  const movingWrapper = document.querySelector('.section-4 .renovation-grid');
  const leftButton = document.querySelector('.section-4 button.left');
  const rightButton = document.querySelector('.section-4 button.right');
  const sliderButtons = document.querySelector('.section-4 .renovation-slider');


  const STEPSIZE = 355.9;
  const PAGES = 5
  let currentPage = 1;
  let currentOffset = 0;

  for (let i = 0; i < PAGES; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('page-circle');
    if (i === 0) {
      newDiv.classList.add('active');
    }
    sliderButtons.insertBefore(newDiv, rightButton);
  }

  const pageCircles = document.querySelectorAll('.section-4 .page-circle');
  const pageCircleArr = [...pageCircles];

  leftButton.disabled = true;

  function controlButtonsDisable() {
      leftButton.disabled = false;
      rightButton.disabled = false;
    if (currentPage === 1) {
      leftButton.disabled = true;
    } else if (currentPage === PAGES) {
      rightButton.disabled = true;
    }
  }

  function controlPageCircles() {
    pageCircleArr.forEach((el) => {
      el.classList.remove('active');
    })
    pageCircleArr[currentPage - 1].classList.add('active');
  }

  function handleStepRight() {
    currentPage++;
    controlButtonsDisable();
    controlPageCircles();
    currentOffset -= STEPSIZE;
    movingWrapper.style.transform = `translateX(${currentOffset}px)`;
  }

  function handleStepLeft() {
    currentPage--;
    controlButtonsDisable();
    controlPageCircles();
    currentOffset += STEPSIZE;
    movingWrapper.style.transform = `translateX(${currentOffset}px)`;
  }

  leftButton.addEventListener('click', handleStepLeft);
  rightButton.addEventListener('click', handleStepRight);
}

renovationSlider();