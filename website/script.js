// Keep the six experiments from playing over one another.
const videos = document.querySelectorAll('video');
for (const video of videos) {
  video.addEventListener('play', () => {
    for (const other of videos) {
      if (other !== video) other.pause();
    }
  });
}
