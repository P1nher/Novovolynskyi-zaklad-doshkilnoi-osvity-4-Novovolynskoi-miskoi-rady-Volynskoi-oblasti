document.addEventListener('DOMContentLoaded', () => {
  const sliderImages = document.querySelector('.slider-images');

  const slideWidth = 410; // 400px + 10px відступ
  const totalSlides = sliderImages.children.length;
  const visibleSlides = 3;
  let currentIndex = 0;

  function updateSlider() {
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalSlides - visibleSlides) currentIndex = totalSlides - visibleSlides;

    const offset = -currentIndex * slideWidth;
    sliderImages.style.transform = `translateX(${offset}px)`;
  }

  // Автопрокрутка
  let autoSlideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex > totalSlides - visibleSlides) {
      currentIndex = 0; // зациклити
    }
    updateSlider();
  }, 3000); // кожні 3 секунди

  updateSlider();
});