/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// console.log(slideWidth);

// Arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}


// when i click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide)

  moveToSlide(track, currentSlide, prevSlide)
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});


// when i click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


// when i click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
  // what indicator was clicked on?
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex)

})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fyb3VzZWwtaW1hZ2VzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRyYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX190cmFjaycpXHJcbmNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20odHJhY2suY2hpbGRyZW4pO1xyXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19idXR0b24tLXJpZ2h0Jyk7XHJcbmNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2J1dHRvbi0tbGVmdCcpO1xyXG5jb25zdCBkb3RzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYnKTtcclxuY29uc3QgZG90cyA9IEFycmF5LmZyb20oZG90c05hdi5jaGlsZHJlbik7XHJcblxyXG5jb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKHNsaWRlV2lkdGgpO1xyXG5cclxuLy8gQXJyYW5nZSB0aGUgc2xpZGVzIG5leHQgdG8gb25lIGFub3RoZXJcclxuLy8gc2xpZGVzWzBdLnN0eWxlLmxlZnQgPSBzbGlkZVdpZHRoICogMCArICdweCc7XHJcbi8vIHNsaWRlc1sxXS5zdHlsZS5sZWZ0ID0gc2xpZGVXaWR0aCAqIDEgKyAncHgnO1xyXG4vLyBzbGlkZXNbMl0uc3R5bGUubGVmdCA9IHNsaWRlV2lkdGggKiAyICsgJ3B4JztcclxuXHJcbmNvbnN0IHNldFNsaWRlUG9zaXRpb24gPSAoc2xpZGUsIGluZGV4KSA9PiB7XHJcbiAgc2xpZGUuc3R5bGUubGVmdCA9IHNsaWRlV2lkdGggKiBpbmRleCArICdweCc7XHJcbn1cclxuXHJcbnNsaWRlcy5mb3JFYWNoKHNldFNsaWRlUG9zaXRpb24pO1xyXG5cclxuXHJcbmNvbnN0IG1vdmVUb1NsaWRlID0gKHRyYWNrLCBjdXJyZW50U2xpZGUsIHRhcmdldFNsaWRlKSA9PiB7XHJcbiAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLScgKyB0YXJnZXRTbGlkZS5zdHlsZS5sZWZ0ICsgJyknO1xyXG4gIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXNsaWRlJyk7XHJcbiAgdGFyZ2V0U2xpZGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zbGlkZScpO1xyXG59XHJcblxyXG5jb25zdCB1cGRhdGVEb3RzID0gKGN1cnJlbnREb3QsIHRhcmdldERvdCkgPT4ge1xyXG4gIGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xyXG4gIHRhcmdldERvdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNsaWRlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVTaG93QXJyb3dzID0gKHNsaWRlcywgcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbiwgdGFyZ2V0SW5kZXgpID0+IHtcclxuICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcclxuICAgIHByZXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gIH0gZWxzZSBpZiAodGFyZ2V0SW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICBwcmV2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gd2hlbiBpIGNsaWNrIGxlZnQsIG1vdmUgc2xpZGVzIHRvIHRoZSBsZWZ0XHJcbnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBjb25zdCBjdXJyZW50U2xpZGUgPSB0cmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xyXG4gIGNvbnN0IHByZXZTbGlkZSA9IGN1cnJlbnRTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gIGNvbnN0IGN1cnJlbnREb3QgPSBkb3RzTmF2LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgY29uc3QgcHJldkRvdCA9IGN1cnJlbnREb3QucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICBjb25zdCBwcmV2SW5kZXggPSBzbGlkZXMuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlID09PSBwcmV2U2xpZGUpXHJcblxyXG4gIG1vdmVUb1NsaWRlKHRyYWNrLCBjdXJyZW50U2xpZGUsIHByZXZTbGlkZSlcclxuICB1cGRhdGVEb3RzKGN1cnJlbnREb3QsIHByZXZEb3QpO1xyXG4gIGhpZGVTaG93QXJyb3dzKHNsaWRlcywgcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbiwgcHJldkluZGV4KTtcclxufSk7XHJcblxyXG5cclxuLy8gd2hlbiBpIGNsaWNrIHJpZ2h0LCBtb3ZlIHNsaWRlcyB0byB0aGUgcmlnaHRcclxubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRyYWNrLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgY29uc3QgbmV4dFNsaWRlID0gY3VycmVudFNsaWRlLm5leHRFbGVtZW50U2libGluZztcclxuICBjb25zdCBjdXJyZW50RG90ID0gZG90c05hdi5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xyXG4gIGNvbnN0IG5leHREb3QgPSBjdXJyZW50RG90Lm5leHRFbGVtZW50U2libGluZztcclxuICBjb25zdCBuZXh0SW5kZXggPSBzbGlkZXMuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlID09PSBuZXh0U2xpZGUpXHJcblxyXG4gIG1vdmVUb1NsaWRlKHRyYWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSk7XHJcbiAgdXBkYXRlRG90cyhjdXJyZW50RG90LCBuZXh0RG90KTtcclxuICBoaWRlU2hvd0Fycm93cyhzbGlkZXMsIHByZXZCdXR0b24sIG5leHRCdXR0b24sIG5leHRJbmRleCk7XHJcbn0pXHJcblxyXG5cclxuLy8gd2hlbiBpIGNsaWNrIHRoZSBuYXYgaW5kaWNhdG9ycywgbW92ZSB0byB0aGF0IHNsaWRlXHJcblxyXG5kb3RzTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgLy8gd2hhdCBpbmRpY2F0b3Igd2FzIGNsaWNrZWQgb24/XHJcbiAgY29uc3QgdGFyZ2V0RG90ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XHJcblxyXG4gIGlmICghdGFyZ2V0RG90KSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRyYWNrLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgY29uc3QgY3VycmVudERvdCA9IGRvdHNOYXYucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICBjb25zdCB0YXJnZXRJbmRleCA9IGRvdHMuZmluZEluZGV4KGRvdCA9PiBkb3QgPT09IHRhcmdldERvdCk7XHJcbiAgY29uc3QgdGFyZ2V0U2xpZGUgPSBzbGlkZXNbdGFyZ2V0SW5kZXhdO1xyXG5cclxuICBtb3ZlVG9TbGlkZSh0cmFjaywgY3VycmVudFNsaWRlLCB0YXJnZXRTbGlkZSk7XHJcbiAgdXBkYXRlRG90cyhjdXJyZW50RG90LCB0YXJnZXREb3QpO1xyXG4gIGhpZGVTaG93QXJyb3dzKHNsaWRlcywgcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbiwgdGFyZ2V0SW5kZXgpXHJcblxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=