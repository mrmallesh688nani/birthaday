let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const photoCaption = document.getElementById('photoCaption');
const captions = [
  '🫶 Best Memory — A moment worth keeping ♡',
  '🥺 Cute — Too adorable to skip ♡',
  '🥰 Happy — That smile says everything ♡',
  '😎 Attitude — Confidence mode ON ♡',
  '😤 Angry — Still a memorable face ♡',
  '💗 Another Beautiful Memory ♡',
  '✨ A Day To Remember ♡',
  '🌸 Always Keep Smiling ♡',
  '💞 A Sweet Moment ♡',
  '🎂 Birthday Special ♡'
];
let slideTimer;

function renderSlide(index) {
  if (!slides.length) return;
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? 'block' : 'none';
  });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
  if (photoCaption) photoCaption.textContent = captions[slideIndex] || 'A Special Memory ♡';
}

function goToSlide(index) {
  renderSlide(index);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 4500);
}

function showSlides() {
  renderSlide(slideIndex + 1);
  slideTimer = setTimeout(showSlides, 4500);
}

// Show the first photo immediately, then advance automatically every 4.5 seconds.
renderSlide(0);
slideTimer = setTimeout(showSlides, 4500);

const music = document.getElementById('birthdayMusic');
const musicButton = document.querySelector('.music-btn');

function updateMusicButton() {
  if (musicButton && music) musicButton.textContent = music.paused ? '🎵 Play Inthandham' : '⏸️ Pause Inthandham';
}

function startMusic() {
  if (!music) return;
  music.play().then(updateMusicButton).catch(updateMusicButton);
}

function toggleMusic() {
  if (!music) return;
  if (music.paused) startMusic();
  else {
    music.pause();
    updateMusicButton();
  }
}

function showSurprise() {
  const surprise = document.getElementById('surpriseText');
  if (surprise) surprise.classList.toggle('hidden');
  startMusic();
}

if (music) {
  music.addEventListener('play', updateMusicButton);
  music.addEventListener('pause', updateMusicButton);
  updateMusicButton();
}
