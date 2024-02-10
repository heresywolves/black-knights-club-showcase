const slider = () => {
  const sliderContainer = document.querySelector('.section-5 .slider');
  const leftButton = sliderContainer.querySelector('.section-5 button.left');
  const rightButton = sliderContainer.querySelector('.section-5 button.right');
  const currentSlidesEl = sliderContainer.querySelector('.section-5 span.current');
  const movingWrapper = sliderContainer.querySelector('.section-5 .moving-wrapper');

  const TOTALSLIDES = 6;


  if (window.innerWidth < 1224) {
    let currentSlide = 1;
    const stepDistance = 454;
    let currentOffset = 959;
    let page = 1;
    currentSlidesEl.textContent = '1';
    movingWrapper.style.transform = `translateX(${currentOffset}px)`;
    leftButton.disabled = true;

    function handleRightClick(e) {
      page++;
      currentSlidesEl.textContent = page;
      buttonDisableController();
      currentOffset -= stepDistance;
      movingWrapper.style.transform = `translateX(${currentOffset}px)`;
    }

    function handleLeftClick(e) {
      page--;
      currentSlidesEl.textContent = page;
      buttonDisableController();
      currentOffset += stepDistance;
      movingWrapper.style.transform = `translateX(${currentOffset}px)`;
    }

    function buttonDisableController() {
      if (page === 1) {
        rightButton.disabled = false;
        leftButton.disabled = true;
      } else if (page === TOTALSLIDES) {
        rightButton.disabled = true;
        leftButton.disabled = false;
      } else {
        rightButton.disabled = false;
        leftButton.disabled = false;
      }
    }

    leftButton.addEventListener('click', handleLeftClick);
    rightButton.addEventListener('click', handleRightClick);

    window.onresize = (event) => {
      if (window.innerWidth > 1224) {
        movingWrapper.style.transform = `translateX(0px)`
        leftButton.removeEventListener('click', handleLeftClick);
        rightButton.removeEventListener('click', handleRightClick);
        slider();
      }
    };

  } else {
    let currentSlides = 3;
    const stepDistance = 1242;
    let currentOffset = 0;
    let page = 1;

    currentSlidesEl.textContent = currentSlides;
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

    window.onresize = (event) => {
      if (window.innerWidth <= 1224) {
        clearInterval(timer);
        movingWrapper.style.transform = `translateX(952px)`
        leftButton.removeEventListener('click', handleLeftClick);
        rightButton.removeEventListener('click', handleRightClick);
        slider();
      }
    };
  }

};
slider();