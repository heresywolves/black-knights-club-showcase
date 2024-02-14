const sliderComponent = () => {
  let screenWidth = window.innerwidth || document.documentElement.clientWidth || document.body.clientWidth;
  let offsetDistance;
  let initOffset;
  const slider = document.querySelector('.slider .moving-wrapper');
  const prevBtn = document.querySelector('.slider button.left');
  const nextBtn = document.querySelector('.slider button.right');
  const pageDisplay = document.querySelector('.slider span.current')
  let timer;

  if (screenWidth < 930) {
    offsetDistance = 360;
    if (timer) {
      clearInterval(timer);
    }
  } else {
    offsetDistance = 414;
    timer = setInterval(slideLeft, 4000);
  }

    initOffset = 6 * -offsetDistance; 

    let currentIndex = 6;
    let page = 1;

    slider.style.transform = `translateX(${initOffset}px)`;

    function updatePageDisplay() {
      if (page < 1) {
        page = 6;
      } else if (page > 6) {
        page = 1;
      }
      pageDisplay.textContent = page;
    }

    updatePageDisplay();

    function slideLeft() {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        page++;
        updatePageDisplay();
        currentIndex++;
        updateSlider();
    }

    function slideRight() {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        page--;
        updatePageDisplay();
        currentIndex--;
        updateSlider();
    }


    prevBtn.addEventListener('click', () => {
      slideRight();
      clearInterval(timer);
    });

    nextBtn.addEventListener('click', () => {
      slideLeft();
      clearInterval(timer);
    });

    function updateSlider() {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
    }

    slider.addEventListener('transitionend', () => {
      nextBtn.disabled = false;
      prevBtn.disabled = false;
      if (currentIndex === 0) {
          currentIndex = 6;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
      } else if (currentIndex === 12) {
          currentIndex = 6;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
      }
    });

    window.addEventListener('resize', function() {
    });


}

sliderComponent();
