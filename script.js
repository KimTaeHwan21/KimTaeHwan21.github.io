const sections = document.querySelectorAll('.page');

function showPage(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}

function openModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'flex'; // 중앙 정렬을 위해 flex
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    showPage('home');
    closeModal();
  }
});

// 초기 로딩 시 home 페이지 보이도록
window.onload = () => showPage('home');

// 테마 변경
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  html.classList.toggle('light-mode');
});

// Playlist 동작
const trackList = document.getElementById('trackList');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const nowTitle = document.getElementById('now-title');
const nowArtist = document.getElementById('now-artist');
const playPauseBtn = document.getElementById('playPauseBtn');

trackList.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (li && li.dataset.src) {
    audio.src = li.dataset.src;
    cover.src = li.dataset.cover;
    nowTitle.textContent = li.dataset.title;
    nowArtist.textContent = li.dataset.artist;
    cover.classList.remove('paused');
    audio.play();
  }
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    cover.classList.remove('paused');
  } else {
    audio.pause();
    cover.classList.add('paused');
  }
});