// Keep animated previews visible and controllable without loading GIF-sized files.
const previews = [...document.querySelectorAll('.publication-preview video')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const visible = new Set();
const pausedByUser = new Set();
const explicitlyPlaying = new Set();

function syncPlayback() {
  for (const video of previews) {
    const allowMotion = !reducedMotion.matches || explicitlyPlaying.has(video);
    if (visible.has(video) && !document.hidden && allowMotion && !pausedByUser.has(video)) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }
}

for (const video of previews) {
  const button = video.parentElement.querySelector('.preview-toggle');
  video.autoplay = false;
  video.controls = false;
  button.hidden = false;
  const updateButton = () => {
    button.textContent = video.paused ? 'Play' : 'Pause';
    button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} ${button.dataset.label}`);
  };
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  button.addEventListener('click', () => {
    if (video.paused) {
      pausedByUser.delete(video);
      explicitlyPlaying.add(video);
      video.play().catch(() => {});
    } else {
      pausedByUser.add(video);
      explicitlyPlaying.delete(video);
      video.pause();
    }
  });
  updateButton();
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) visible.add(entry.target);
    else visible.delete(entry.target);
  }
  syncPlayback();
}, { threshold: 0.25 });

for (const video of previews) observer.observe(video);
reducedMotion.addEventListener('change', syncPlayback);
document.addEventListener('visibilitychange', syncPlayback);
