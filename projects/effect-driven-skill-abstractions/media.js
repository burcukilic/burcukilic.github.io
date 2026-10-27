// Play visible demonstrations and respect the visitor's motion preference.
const clips = [...document.querySelectorAll('video')];
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const visibleClips = new Set();
const userPausedClips = new Set();
const managedPauses = new WeakSet();

function updatePlayback() {
  for (const clip of clips) {
    if (visibleClips.has(clip) && !motionPreference.matches && !document.hidden && !userPausedClips.has(clip)) {
      clip.play().catch(() => {});
    } else if (!clip.paused) {
      managedPauses.add(clip);
      clip.pause();
    }
  }
}

for (const clip of clips) {
  clip.autoplay = false;
  clip.addEventListener('pause', () => {
    if (managedPauses.has(clip)) managedPauses.delete(clip);
    else userPausedClips.add(clip);
  });
  clip.addEventListener('play', () => userPausedClips.delete(clip));
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) visibleClips.add(entry.target);
    else visibleClips.delete(entry.target);
  }
  updatePlayback();
}, { threshold: 0.25 });

for (const clip of clips) observer.observe(clip);
motionPreference.addEventListener('change', updatePlayback);
document.addEventListener('visibilitychange', updatePlayback);
