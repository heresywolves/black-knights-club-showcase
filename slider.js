const slider = () => {
  const slider = document.querySelector('.slider .moving-wrapper');
  const prevBtn = document.querySelector('.slider button.left');
  const nextBtn = document.querySelector('.slider button.right');
  const pageDisplay = document.querySelector('.slider span.current')

  let currentIndex = 6;
  const offsetDistance = 414;
  let page = 1;

  slider.style.transform = `translateX(${currentIndex * -offsetDistance}px)`;

  function updatePageDisplay() {
    if (page < 1) {
      page = 6;
    } else if (page > 6) {
      page = 1;
    }
    pageDisplay.textContent = page;
  }

  updatePageDisplay();


  prevBtn.addEventListener('click', () => {
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      page--;
      updatePageDisplay();
      currentIndex--;
      updateSlider();
  });

  nextBtn.addEventListener('click', () => {
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      page++;
      updatePageDisplay();
      currentIndex++;
      updateSlider();
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
};
slider();