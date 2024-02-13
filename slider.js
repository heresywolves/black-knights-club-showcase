const slider = () => {
  const slider = document.querySelector('.slider .moving-wrapper');
  const prevBtn = document.querySelector('.slider button.left');
  const nextBtn = document.querySelector('.slider button.right');

  let currentIndex = 1;
  const offsetDistance = 414;

  // Set initial position
  slider.style.transform = `translateX(${6 * -offsetDistance}px)`;


  // Event listeners for next and previous buttons
  prevBtn.addEventListener('click', () => {
      currentIndex--;
      console.log('current index: ' + currentIndex)
      updateSlider();
  });

  nextBtn.addEventListener('click', () => {
      currentIndex++;
      console.log('current index: ' + currentIndex)
      updateSlider();
  });

  // Function to update slider position
  function updateSlider() {
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
  }

  // Reset position on transition end for smooth looping
  slider.addEventListener('transitionend', () => {
      if (currentIndex === 0) {
          currentIndex = 6;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
      } else if (currentIndex === slider.children.length - 1) {
          currentIndex = 1;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${-currentIndex * offsetDistance}px)`;
      }
  });
};
slider();