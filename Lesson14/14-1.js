  document.addEventListener("DOMContentLoaded",  ()=> {
      const prevButton = document.getElementById("chevron_prev");
      const nextButton = document.getElementById("chevron_next");
      const image = document.querySelectorAll("#content img");
      const content = document.getElementById("content");
      const totalSlides = image.length;
      const dotContainer = document.getElementById("dot");


      let currentIndex = 0;
      for (let i = 0; i < totalSlides; i++) {
          const dot = document.createElement("span");
          dot.addEventListener("click", () =>goToSlide(i));
          dotContainer.appendChild(dot);
      }
      function updateSlider(){
          content.style.transform = `translateX(-${currentIndex * 600}px)`;
          prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
          nextButton.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';

          const dots = document.querySelectorAll('#dot span');
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentIndex);
          });
      }


      function goToSlide(index){
          currentIndex = index;
          updateSlider()
      }
      prevButton.addEventListener('click', () => {
          if (currentIndex > 0) currentIndex--;
          updateSlider();
      });

      nextButton.addEventListener('click', () => {
          if (currentIndex < totalSlides - 1) currentIndex++;
          updateSlider();
      });

      updateSlider();
  })

