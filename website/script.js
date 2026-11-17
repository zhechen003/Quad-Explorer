let activePlayer = null;
for (const card of document.querySelectorAll('.experiment')) {
  const video = card.querySelector('video');
  const playButton = card.querySelector('.video-start');
  const feedback = card.querySelector('.video-feedback');
  const message = card.querySelector('.video-message');
  const retryButton = card.querySelector('.video-retry');
  let loadingTimer;
  let request = 0;
  let position = 0;

  function clearLoadingTimer() {
    clearTimeout(loadingTimer);
  }

  function showLoading(text) {
    message.textContent = text;
    feedback.hidden = false;
    clearLoadingTimer();
    loadingTimer = setTimeout(() => {
      message.textContent = 'Taking longer than usual. You can retry loading.';
      retryButton.hidden = false;
    }, 15000);
  }

  function showError() {
    clearLoadingTimer();
    message.textContent = 'Unable to load this video. Please retry or open the original below.';
    feedback.hidden = false;
    retryButton.hidden = false;
  }

  const player = {
    stop() {
      request += 1;
      position = video.currentTime || position;
      clearLoadingTimer();
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.controls = false;
      playButton.textContent = position > 0 ? '▶ Resume video' : '▶ Play video';
      playButton.hidden = false;
      feedback.hidden = true;
      retryButton.hidden = true;
    }
  };

  function start(retry = false) {
    if (activePlayer && activePlayer !== player) activePlayer.stop();
    activePlayer = player;
    const currentRequest = ++request;
    position = video.currentTime || position;
    playButton.hidden = true;
    retryButton.hidden = true;
    video.controls = true;
    showLoading('Loading video…');
    if (!video.hasAttribute('src') || retry) {
      const url = new URL(video.dataset.src, document.baseURI);
      if (retry) url.searchParams.set('retry', Date.now());
      video.src = url.href;
      video.load();
    }
    video.play().catch(error => {
      if (currentRequest !== request || error.name === 'AbortError') return;
      if (error.name === 'NotAllowedError') {
        clearLoadingTimer();
        feedback.hidden = true;
        playButton.textContent = '▶ Play video';
        playButton.hidden = false;
      } else {
        showError();
      }
    });
  }

  playButton.addEventListener('click', () => start());
  retryButton.addEventListener('click', () => start(true));
  video.addEventListener('loadedmetadata', () => {
    if (position > 0 && position < video.duration) video.currentTime = position;
    position = 0;
  });
  video.addEventListener('playing', () => {
    clearLoadingTimer();
    feedback.hidden = true;
    retryButton.hidden = true;
    playButton.hidden = true;
  });
  video.addEventListener('waiting', () => showLoading('Buffering…'));
  video.addEventListener('stalled', () => {
    if (!video.paused) showLoading('Buffering…');
  });
  video.addEventListener('pause', () => {
    if (!video.paused) return;
    clearLoadingTimer();
    if (!video.error) feedback.hidden = true;
  });
  video.addEventListener('error', showError);
  video.addEventListener('ended', clearLoadingTimer);
}
