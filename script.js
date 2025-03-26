
// section conversion
const sections = document.querySelectorAll('.page');

// id에 해당하는 페이지만 보여줌. 나머지는 숨기기.
function showPage(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}

// image modal open & close
function openModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'flex'; // 중앙 정렬을 위해 flex
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// ESC 누르면 홈으로 이동하고 madal close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    showPage('home');
    closeModal();
  }
});

// 사이트 들어가면 초기에 home 페이지 보여지게 하기
window.onload = () => showPage('home');

// theme conversion
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const modeLabel = document.getElementById('mode-label');

// theme mode lable conversion
function updateThemeLabel() {
  const label = document.getElementById("theme-label");
  const isLight = document.documentElement.classList.contains("light-mode");
  label.textContent = isLight ? "☀ Light Mode" : "🌙 Dark Mode";
}

// theme conversion click event
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
  updateThemeLabel();
});

// 페이지 load하면 theme label도 초기설정 함.
window.onload = () => {
  showPage('home');
  updateThemeLabel();
};


// Hobby & Favorite
const titleMap = {
  fitness: "Fitness", game: "Game", travel: "Travel",
  sky: "Sky Photo", food: "Food", dog: "Dog"
};

const imageMap = {
  fitness: ["image/fit1.jpg", "image/fit2.jpg"],
  game: ["image/game1.png", "image/game2.jpg"],
  travel: ["image/travel1.jpg", "image/travel2.jpg"],
  sky: ["image/sky1.jpg", "image/sky2.jpg"],
  food: ["image/food1.jpg", "image/food2.jpg"],
  dog: ["image/dog1.jpg", "image/dog2.jpg"]
};

const contentMap = {
  fitness: "20대 초반에 바디프로필 찍는게 버킷리스트였는데 열심히 운동하여 작년 여름에 찍었고 우연치 않은 기회로 보디빌딩 대회까지 1등 한 경험이 있어요. 예전에 운동 선수였어서 헬스말고 다른 운동도 좋아하니까 좋아하는 운동 있으면 같이해요!",
  game: "저는 롤, 피파, 옵치, 배그, 발로 등 각종 게임 다 하구여 현재 깔려있는 게임은 롤, 피파, 발로, 스팀 게임들이 깔려있어요. 핸드폰으로는 사과게임 자주해요~ 게임 좋아하면 어떤 게임이든 안 가리고 하는 잡종이니까 같이 할 수 있으면 좋겠습니다~",
  travel: "작년 겨울에 눈이 엄청오는 삿포로를 갔다왔어요~ 진짜 평생 볼 눈을 삿포로에서 다 본 듯한 느낌..? 그 정도로 너무 좋았어요~ 꼭 가보세요! 제주도도 자주가는 지역 중 하나입니다~ 근데 부산을 안 가봤다는 점.... 누가 저 좀 데리고 부산 좀 가주세요 ㅜ 최근 낭만 여행을 갔다왔는데 인스타 보시면 릴스 올려놨으니 구경해주세요~",
  sky: "저는 하늘이 이쁘면 사진을 찍는 버릇..?이 있는데 사진 고자이지만 예쁜 하늘 보면 참을 수 없어서 그만,, 사진 잘 찍는 방법 알려주시면 배우겠습니담",
  food: "저는 진짜 음식을 좋아해서 음식에 돈을 절대 아끼지 않는 편이고 특히 맛집 탐방 좋아해요. 디저트도 안 가리고 맛집 탐방하는 편이랍니다~",
  dog: "저의 강아지 '체리'인데요 올해로 10살이지만 나이가 들면 들수록 징징대는게 더 심해지는.... 피곤한 st... 그래도 귀여우니까 봐주고 있어요~ 강쥐 보고 싶으면 학교 한번 데려갈게요 말해주세요~!"
};

// Hobby & Favorite의 detail
function showDetail(type) {
  const isHobby = ['fitness', 'game', 'travel'].includes(type);
  const titleColor = isHobby ? 'detail-title-hobby' : 'detail-title-favorite';

  document.getElementById('detailTitle').innerText = titleMap[type];
  document.getElementById('detailTitle').className = titleColor;

  document.getElementById('detailImg1').src = imageMap[type][0];
  document.getElementById('detailImg2').src = imageMap[type][1];
  document.getElementById('detailContent').innerText = contentMap[type];

  document.getElementById('detailCard').style.display = 'block';
}

function closeDetail() {
  document.getElementById('detailCard').style.display = 'none';
}

// full image modal open & close
function openImageModal(src) {
  const fullModal = document.getElementById("fullImageModal");
  const modalImg = document.getElementById("fullImage");
  modalImg.src = src;
  fullModal.style.display = "flex";
  document.body.classList.add("modal-active");
}

function closeImageModal() {
  const fullModal = document.getElementById("fullImageModal");
  fullModal.style.display = "none";
  document.body.classList.remove("modal-active");
}


// sections 이동하면 detail card close
function showPage(id) {
  const sections = document.querySelectorAll('.page');
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'about') {
    closeDetail();
  }
}

// detail image click하면 full image로 보이게 하기
document.querySelectorAll('.detail-images img').forEach(img => {
  img.addEventListener('click', () => {
    openImageModal(img.src);
  });
});


// Playlist
const trackList = document.getElementById('trackList');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const overlay = document.getElementById('overlay');
const nowTitle = document.getElementById('now-title');
const nowArtist = document.getElementById('now-artist');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

let isPlaying = false;
let currentTrackIndex = 0;
const tracks = Array.from(trackList.querySelectorAll("li"));

// start & stop 초기화. 처음은 start 상태 표시
overlay.src = "icon_image/start.png";

// start & stop toggle
overlay.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    overlay.src = "icon_image/stop.png";
    cover.classList.add("playing");
    isPlaying = true;
  } else {
    audio.pause();
    overlay.src = "icon_image/start.png";
    cover.classList.remove("playing");
    isPlaying = false;
  }
});

// trackList click 하면 현재 music 변경 및 재생
trackList.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (li && li.dataset.src) {
    currentTrackIndex = tracks.indexOf(li);
    loadAndPlayTrack(currentTrackIndex);
  }
});

// track loading 및 재생
function loadAndPlayTrack(index) {
  const li = tracks[index];
  if (!li) return;

  audio.src = li.dataset.src;
  cover.src = li.dataset.cover;
  nowTitle.textContent = li.dataset.title;
  nowArtist.textContent = li.dataset.artist;
  overlay.src = "icon_image/stop.png";
  cover.classList.add("playing");
  audio.play();
  isPlaying = true;
}

// 노래 끝나면 자동으로 다음 곡 재생
audio.addEventListener("ended", () => {
  currentTrackIndex++;
  if (currentTrackIndex >= tracks.length) {
    currentTrackIndex = 0;
  }
  loadAndPlayTrack(currentTrackIndex);
});

// music bar & time show
audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  progressBar.max = audio.duration;

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

// music bar control
progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

// time format
function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
