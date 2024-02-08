const slider = (() => {
  const sliderContainer = document.querySelector('.slider');
  const leftButton = sliderContainer.querySelector('button.left');
  const rightButton = sliderContainer.querySelector('button.right');
  const currentSlidesEl = sliderContainer.querySelector('span.current');
  const movingWrapper = sliderContainer.querySelector('.moving-wrapper');

  let currentSlides = currentSlidesEl.textContent;
  const TOTALSLIDES = 6;
  const stepDistance = 1242;
  let currentOffset = 0;
  let page = 1;

  leftButton.disabled = true;

  function buttonDisableController() {
    if (page === 1) {
      rightButton.disabled = false;
      leftButton.disabled = true;
    } else if (page === TOTALSLIDES / 3) {
      rightButton.disabled = true;
      leftButton.disabled = false;
    }
  }

  function setCurrentSlides() {
    currentSlides = page * 3;
    currentSlidesEl.textContent = currentSlides;
  }


  function handleRightClick(e) {
    clearInterval(timer);
    page++;
    setCurrentSlides();
    buttonDisableController();
    currentOffset -= stepDistance;
    movingWrapper.style.transform = `translateX(${currentOffset}px)`;
  }


  function handleLeftClick(e) {
    clearInterval(timer);
    page--;
    setCurrentSlides();
    buttonDisableController();
    currentOffset += stepDistance;
    movingWrapper.style.transform = `translateX(${currentOffset}px)`;
  }

  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);

  function handleAutoSlide() {
    if (rightButton.disabled) {
      page = 1;
      setCurrentSlides();
      buttonDisableController();
      currentOffset = 0; 
      movingWrapper.style.transform = `translateX(${currentOffset}px)`;
    } else {
      page++;
      setCurrentSlides();
      buttonDisableController();
      currentOffset -= stepDistance;
      movingWrapper.style.transform = `translateX(${currentOffset}px)`;
    }

  }

  let timer = setInterval(handleAutoSlide, 4000);

})();