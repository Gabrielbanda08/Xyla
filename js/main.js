/* ============================================
   MUSIV — main.js
   ============================================ */

'use strict';

// ─── State ────────────────────────────────────────────────────────────────
let currentIndex    = 0;
let isPlaying       = false;
let isShuffled      = false;
let repeatMode      = 1;           // 0=off, 1=all, 2=one
let currentVolume   = 0.8;
let prevVolume      = 0.8;
let activeSongs     = window.songs; // Currently active list
let isDragging      = false;
let errorCount      = 0;
const MAX_ERRORS    = 3;
let youtubePlayer   = null;
let isVideoOpen     = false;
let currentMode     = 'audio';
let audioCtx        = null;
let analyserNode    = null;
let sourceNode      = null;
let vizRafId        = null;
let currentTheme    = null;

let favorites = JSON.parse(localStorage.getItem('msv_favorites') || '[]');
let playlists = JSON.parse(localStorage.getItem('msv_playlists') || 'null') || {
  'Chill Vibes': [],
  'Workout Mix': [],
  'Road Trip': []
};

// ─── DOM ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const loadingScreen   = $('loading-screen');
const sidebar         = $('sidebar');
const sidebarOverlay  = $('sidebar-overlay');
const sidebarToggle   = $('sidebar-toggle');
const sectionArea     = $('section-area');
const searchInput     = $('search-input');
const bgCover         = $('background-cover');
const audio           = $('audio');

// Player
const playerCover     = $('player-cover');
const playerTitle     = $('player-title');
const playerArtist    = $('player-artist');
const btnPlay         = $('btn-playpause');
const iconPlay        = $('icon-play');
const iconPause       = $('icon-pause');
const btnPrev         = $('btn-prev');
const btnNext         = $('btn-next');
const btnShuffle      = $('btn-shuffle');
const btnRepeat       = $('btn-repeat');
const btnVideo        = $('btn-video');
const btnMute         = $('btn-mute');
const btnFav          = $('player-fav-btn');
const progressBar     = $('progress-bar');
const progressFill    = $('progress-inner');
const progressThumb   = $('progress-thumb');
const timeCurrent     = $('player-current');
const timeDuration    = $('player-duration');
const volumeRange     = $('volume-range');
const visualizerCanvas = $('audio-visualizer');
const vizCtx          = visualizerCanvas ? visualizerCanvas.getContext('2d') : null;
const volUp           = $('icon-vol-up');
const volOff          = $('icon-vol-off');

// Panels
const ytPanel         = $('youtube-panel');
const settingsPanel   = $('settings-panel');
const contactsPanel   = $('contacts-panel');

// ─── Init ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Hide loading after animation
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => loadingScreen.remove(), 600);
  }, 2400);

  loadSection('home');
  setupNavigation();
  setupPlayer();
  setupKeyboard();
  setupSwipe();
  initMediaSession();

  // Initialize YouTube
  if (window.YT && YT.Player) initYouTube();
  else window.onYouTubeIframeAPIReady = initYouTube;

  // Online/offline
  window.addEventListener('online',  () => notify('Back online', 'success'));
  window.addEventListener('offline', () => notify('You are offline', 'error'));

  // PWA service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});

// ─── Notifications ────────────────────────────────────────────────────
function notify(msg, type = 'info') {
  const container = $('notification-container');
  const el = document.createElement('div');
  el.className = `notification ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  requestAnimationFrame(() => { requestAnimationFrame(() => el.classList.add('show')); });
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

// ─── Navigation ───────────────────────────────────────────────────────
function setupNavigation() {
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      if (!section) return;

      if (section === 'settings') { openModal(settingsPanel); return; }
      if (section === 'contacts') { openModal(contactsPanel); return; }

      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      loadSection(section);
      closeSidebar();
    });
  });

  sidebarToggle.addEventListener('click', toggleSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Close panels
  $('close-settings').addEventListener('click', () => closeModal(settingsPanel));
  $('close-contacts').addEventListener('click', () => closeModal(contactsPanel));
  $('close-youtube').addEventListener('click', closeYoutube);
  settingsPanel.addEventListener('click', e => { if (e.target === settingsPanel) closeModal(settingsPanel); });
  contactsPanel.addEventListener('click', e => { if (e.target === contactsPanel) closeModal(contactsPanel); });
  ytPanel.addEventListener('click', e => { if (e.target === ytPanel) closeYoutube(); });

  $('save-settings').addEventListener('click', () => {
    const theme = $('theme-select').value;
    applyTheme(theme);
    localStorage.setItem('msv_theme', theme);
    notify('Settings saved', 'success');
    closeModal(settingsPanel);
  });

  $('logout-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
      notify('Logged out', 'info');
      closeModal(settingsPanel);
    }
  });

  // Restore theme
  const savedTheme = localStorage.getItem('msv_theme');
  if (savedTheme) {
    $('theme-select').value = savedTheme;
    applyTheme(savedTheme);
  }
}

function applyTheme(theme) {
  document.body.classList.toggle('light-theme', theme === 'light');
}

function toggleSidebar() {
  sidebar.classList.toggle('active');
  sidebarOverlay.classList.toggle('active');
}
function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
}

function openModal(panel) {
  panel.style.display = 'flex';
  requestAnimationFrame(() => panel.style.opacity = '1');
}
function closeModal(panel) {
  panel.style.display = 'none';
}

// ─── Section Loading ──────────────────────────────────────────────────
function loadSection(section) {
  // Show skeleton first
  sectionArea.innerHTML = buildSkeleton(6);

  setTimeout(() => {
    switch (section) {
      case 'home':
        activeSongs = window.songs;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Welcome back 🎵</h1>
            <p class="section-subtitle">${window.songs.length} songs in your library</p>
          </div>
          <div class="music-grid">${buildCards(window.songs)}</div>`;
        break;

      case 'search':
        activeSongs = window.songs;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Search</h1>
            <p class="section-subtitle">Find songs, artists and albums</p>
          </div>
          <div class="music-grid">${buildCards(window.songs)}</div>`;
        break;

      case 'trending': {
        const shuffled = [...window.songs].sort(() => Math.random() - 0.5).slice(0, 12);
        activeSongs = shuffled;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Trending Now 🔥</h1>
            <p class="section-subtitle">The hottest tracks right now</p>
          </div>
          <div class="music-grid">${buildCards(shuffled)}</div>`;
        break;
      }

      case 'playlists':
        activeSongs = window.songs;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Playlists</h1>
            <p class="section-subtitle">Your music collections</p>
          </div>
          <div class="music-grid">
            ${buildPlaylistCard('Chill Vibes', '😌', 'linear-gradient(135deg,#667eea,#764ba2)')}
            ${buildPlaylistCard('Workout Mix', '⚡', 'linear-gradient(135deg,#f093fb,#f5576c)')}
            ${buildPlaylistCard('Road Trip', '🚗', 'linear-gradient(135deg,#4facfe,#00f2fe)')}
          </div>`;
        break;

      case 'genres': {
        const genres = [...new Set(window.songs.map(s => s.genre).filter(Boolean))].sort();
        activeSongs = window.songs;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Genres</h1>
            <p class="section-subtitle">Browse by genre</p>
          </div>
          <div class="genre-chips">
            <span class="genre-chip active" onclick="filterGenre(null, this)">All</span>
            ${genres.map(g => `<span class="genre-chip" onclick="filterGenre('${escHtml(g)}', this)">${escHtml(g)}</span>`).join('')}
          </div>
          <div class="music-grid" id="genre-grid">${buildCards(window.songs)}</div>`;
        break;
      }

      case 'library':
        activeSongs = window.songs.slice(0, 8);
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Your Library</h1>
            <p class="section-subtitle">Recently added</p>
          </div>
          <div class="music-grid">${buildCards(activeSongs)}</div>`;
        break;

      case 'favorites':
        activeSongs = favorites;
        sectionArea.innerHTML = `
          <div class="section-header">
            <h1 class="section-title">Favorites ❤️</h1>
            <p class="section-subtitle">${favorites.length} loved track${favorites.length !== 1 ? 's' : ''}</p>
          </div>
          ${favorites.length
            ? `<div class="music-grid">${buildCards(favorites)}</div>`
            : `<div class="empty-state">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <p>No favorites yet. Hit ❤️ on any song!</p>
              </div>`}`;
        break;

      default:
        activeSongs = window.songs;
        sectionArea.innerHTML = `<div class="music-grid">${buildCards(window.songs)}</div>`;
    }

    bindCardClicks();
    lazyImages();
  }, 280);
}

function buildSkeleton(count) {
  return `<div class="skeleton-grid">${Array(count).fill(`
    <div class="skeleton-card">
      <div class="skeleton-cover"></div>
      <div class="skeleton-body">
        <div class="skeleton-line w-3q"></div>
        <div class="skeleton-line w-half"></div>
      </div>
    </div>`).join('')}</div>`;
}

function buildCards(arr) {
  return arr.map((song, i) => {
    const isFav = favorites.some(f => f.id === song.id);
    return `
    <div class="music-card" data-index="${i}" data-id="${song.id}">
      <div class="music-card-cover">
        <img src="" data-src="${escHtml(song.cover || '')}" alt="${escHtml(song.title)}" class="lazy-img" onerror="this.src=''; this.style.display='none'">
        <div class="card-play-overlay">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="now-playing-dot"></div>
        ${song.youtubeId ? `<div class="video-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>MV</div>` : ''}
      </div>
      <div class="music-card-body">
        <div class="music-card-title">${escHtml(song.title)}</div>
        <div class="music-card-artist">${escHtml(song.artist)}</div>
        <div class="music-card-album">${escHtml(song.album || '')}</div>
      </div>
      <div class="music-card-actions" onclick="event.stopPropagation()">
        <button class="card-action-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${song.id})" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <button class="card-action-btn" onclick="downloadSong(event, ${song.id})" title="Download">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </button>
        <button class="card-action-btn" style="position:relative" onclick="showPlaylistDrop(event, ${song.id})" title="Add to playlist">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
}

function buildPlaylistCard(name, emoji, bg) {
  const count = playlists[name] ? playlists[name].length : 0;
  return `
  <div class="music-card" onclick="loadPlaylist('${escHtml(name)}')">
    <div class="music-card-cover">
      <div class="playlist-card-cover" style="background:${bg}">${emoji}</div>
    </div>
    <div class="music-card-body">
      <div class="music-card-title">${escHtml(name)}</div>
      <div class="music-card-artist">${count} song${count !== 1 ? 's' : ''}</div>
    </div>
  </div>`;
}

function bindCardClicks() {
  document.querySelectorAll('.music-card[data-index]').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      playSong(idx, activeSongs);
    });
  });
}

// ─── Lazy Images ──────────────────────────────────────────────────────
function lazyImages() {
  const imgs = document.querySelectorAll('img.lazy-img');
  if (!imgs.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        const src = img.dataset.src;
        if (src) img.src = src;
        io.unobserve(img);
      }
    });
  });
  imgs.forEach(img => io.observe(img));
}

// ─── Search ───────────────────────────────────────────────────────────
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      activeSongs = window.songs;
    } else {
      activeSongs = window.songs.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q) ||
        (s.album || '').toLowerCase().includes(q) ||
        (s.genre || '').toLowerCase().includes(q)
      );
    }
    const grid = document.querySelector('.music-grid');
    if (grid) {
      grid.innerHTML = activeSongs.length
        ? buildCards(activeSongs)
        : `<div class="empty-state" style="grid-column:1/-1"><p>No results for "${q}"</p></div>`;
      bindCardClicks();
      lazyImages();
    }
  }, 250);
});

// ─── Genre Filter ─────────────────────────────────────────────────────
function filterGenre(genre, chip) {
  document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const filtered = genre ? window.songs.filter(s => s.genre === genre) : window.songs;
  activeSongs = filtered;
  const grid = document.getElementById('genre-grid');
  if (grid) {
    grid.innerHTML = buildCards(filtered);
    bindCardClicks();
    lazyImages();
  }
}

// ─── Playlist Loading ─────────────────────────────────────────────────
function loadPlaylist(name) {
  activeSongs = playlists[name] || [];
  sectionArea.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">${escHtml(name)}</h1>
      <p class="section-subtitle">${activeSongs.length} songs</p>
    </div>
    ${activeSongs.length
      ? `<div class="music-grid">${buildCards(activeSongs)}</div>`
      : `<div class="empty-state"><p>This playlist is empty. Add songs using the ⋮ button!</p></div>`}`;
  bindCardClicks();
  lazyImages();
}

// ─── Favorites ────────────────────────────────────────────────────────
function toggleFav(e, songId) {
  e.stopPropagation();
  const song = window.songs.find(s => s.id === songId) || activeSongs.find(s => s.id === songId);
  if (!song) return;
  const idx = favorites.findIndex(f => f.id === songId);
  if (idx === -1) {
    favorites.push(song);
    notify(`Added "${song.title}" to favorites`, 'success');
  } else {
    favorites.splice(idx, 1);
    notify(`Removed "${song.title}" from favorites`, 'info');
  }
  localStorage.setItem('msv_favorites', JSON.stringify(favorites));

  // Update all matching buttons in DOM
  document.querySelectorAll(`.music-card[data-id="${songId}"] .card-action-btn:first-child`).forEach(btn => {
    btn.classList.toggle('active', idx === -1);
  });

  // Update player fav button if it's the current song
  const cur = activeSongs[currentIndex];
  if (cur && cur.id === songId) updatePlayerFavBtn();

  // Refresh favorites section if open
  if (document.querySelector('.sidebar-link[data-section="favorites"].active')) {
    loadSection('favorites');
  }
}

function updatePlayerFavBtn() {
  const cur = activeSongs[currentIndex];
  if (!cur || !btnFav) return;
  const isFav = favorites.some(f => f.id === cur.id);
  btnFav.classList.toggle('active', isFav);
}

btnFav.addEventListener('click', () => {
  const cur = activeSongs[currentIndex];
  if (cur) toggleFav(new Event('click'), cur.id);
});

// ─── Download ─────────────────────────────────────────────────────────
function downloadSong(e, songId) {
  e.stopPropagation();
  const song = window.songs.find(s => s.id === songId);
  if (!song || !song.audio) { notify('Download not available', 'error'); return; }
  const a = document.createElement('a');
  a.href = song.audio;
  a.download = `${song.artist} - ${song.title}.mp3`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  notify(`Downloading "${song.title}"`, 'success');
}

// ─── Playlist Dropdown ────────────────────────────────────────────────
function showPlaylistDrop(e, songId) {
  e.stopPropagation();
  document.querySelectorAll('.playlist-dropdown').forEach(d => d.remove());
  const btn = e.currentTarget;
  const drop = document.createElement('div');
  drop.className = 'playlist-dropdown';
  drop.innerHTML = Object.keys(playlists).map(name =>
    `<div class="playlist-option" onclick="addToPlaylist('${escHtml(name)}', ${songId}, event)">${escHtml(name)}</div>`
  ).join('');
  btn.appendChild(drop);
  setTimeout(() => {
    document.addEventListener('click', function close(ev) {
      if (!drop.contains(ev.target)) { drop.remove(); document.removeEventListener('click', close); }
    });
  }, 0);
}

function addToPlaylist(name, songId, e) {
  if (e) e.stopPropagation();
  const song = window.songs.find(s => s.id === songId);
  if (!song) return;
  if (!playlists[name]) playlists[name] = [];
  if (playlists[name].some(s => s.id === songId)) { notify(`Already in ${name}`, 'info'); return; }
  playlists[name].push(song);
  localStorage.setItem('msv_playlists', JSON.stringify(playlists));
  notify(`Added to ${name}`, 'success');
  document.querySelectorAll('.playlist-dropdown').forEach(d => d.remove());
}

// ─── Audio Context ────────────────────────────────────────────────────
function initAudioCtx() {
  if (audioCtx) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    audioCtx    = new AC();
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 128;
    sourceNode   = audioCtx.createMediaElementSource(audio);
    sourceNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);
  } catch(err) { console.warn('AudioContext init failed:', err); }
}

function resumeAudioCtx() {
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

// ─── Background / Theme ───────────────────────────────────────────────
function updateBg(url) {
  if (!url || url.includes('placeholder')) {
    bgCover.classList.remove('active');
    return;
  }
  bgCover.style.backgroundImage = `url('${url}')`;
  bgCover.classList.add('active');
}

function applyDynamicAccent(url) {
  if (!url || currentTheme === url) return;
  currentTheme = url;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 40;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, 40, 40);
      const d = ctx.getImageData(0, 0, 40, 40).data;
      let r=0, g=0, b=0, n=0;
      for (let i=0; i<d.length; i+=4) {
        if (d[i+3] < 200) continue;
        r+=d[i]; g+=d[i+1]; b+=d[i+2]; n++;
      }
      if (!n) return;
      r=Math.round(r/n); g=Math.round(g/n); b=Math.round(b/n);
      const accent = `rgb(${r},${g},${b})`;
      const soft   = `rgba(${r},${g},${b},0.2)`;
      document.documentElement.style.setProperty('--dyn', accent);
      document.documentElement.style.setProperty('--dyn-soft', soft);
    } catch(_) {}
  };
  img.src = url;
}

// ─── Visualizer ──────────────────────────────────────────────────────
function startViz() {
  if (!vizCtx || !analyserNode) return;
  cancelAnimationFrame(vizRafId);
  const buf = new Uint8Array(analyserNode.frequencyBinCount);
  function draw() {
    vizRafId = requestAnimationFrame(draw);
    analyserNode.getByteFrequencyData(buf);
    vizCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    const bw = (visualizerCanvas.width / buf.length) * 2;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--dyn').trim() || '#1587c9';
    vizCtx.fillStyle = accent;
    let x = 0;
    for (let i=0; i<buf.length; i++) {
      const h = (buf[i]/255) * visualizerCanvas.height;
      vizCtx.fillRect(x, visualizerCanvas.height - h, bw - 1, h);
      x += bw;
    }
  }
  draw();
}

function stopViz() {
  cancelAnimationFrame(vizRafId);
  vizRafId = null;
  if (vizCtx) vizCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
}

// ─── Play Song ────────────────────────────────────────────────────────
function playSong(index, list = activeSongs) {
  if (!list.length) return;
  currentIndex = Math.max(0, Math.min(index, list.length - 1));
  const song = list[currentIndex];
  if (!song) return;

  initAudioCtx();
  resumeAudioCtx();

  // Stop video if open
  if (isVideoOpen) closeYoutube();
  currentMode = 'audio';
  errorCount = 0;

  // Update cover
  if (song.cover) {
    playerCover.src = song.cover;
    playerCover.onerror = () => { playerCover.src = ''; };
    updateBg(song.cover);
    applyDynamicAccent(song.cover);
  } else {
    playerCover.src = '';
    bgCover.classList.remove('active');
  }

  playerTitle.textContent  = song.title;
  playerArtist.textContent = song.artist;
  updatePlayerFavBtn();

  // Highlight card
  document.querySelectorAll('.music-card').forEach(c => c.classList.remove('playing'));
  const active = document.querySelector(`.music-card[data-id="${song.id}"]`);
  if (active) active.classList.add('playing');

  // Load and play
  audio.src = song.audio || '';
  audio.load();
  const promise = audio.play();
  if (promise) {
    promise.then(() => {
      setPlayState(true);
      updateMediaSessionMeta(song);
    }).catch(err => {
      console.warn('Playback blocked:', err);
      setPlayState(false);
    });
  }

  // Update video button
  btnVideo.classList.toggle('active', !!(song.youtubeId && song.youtubeId.trim()));
}

function setPlayState(playing) {
  isPlaying = playing;
  iconPlay.style.display  = playing ? 'none' : 'block';
  iconPause.style.display = playing ? 'block' : 'none';
  if (playing) startViz(); else stopViz();
  updateMediaSessionState();
}

// ─── Player Controls ─────────────────────────────────────────────────
function setupPlayer() {
  btnPlay.addEventListener('click', togglePlay);
  btnPrev.addEventListener('click', playPrev);
  btnNext.addEventListener('click', playNext);
  btnShuffle.addEventListener('click', toggleShuffle);
  btnRepeat.addEventListener('click', toggleRepeat);
  btnVideo.addEventListener('click', handleVideoBtn);
  btnMute.addEventListener('click', toggleMute);

  // Progress
  progressBar.addEventListener('click', seekTo);
  progressBar.addEventListener('mousedown', e => { isDragging = true; seekTo(e); });
  document.addEventListener('mousemove', e => { if (isDragging) seekTo(e); });
  document.addEventListener('mouseup', () => { isDragging = false; });
  progressBar.addEventListener('touchstart', e => { isDragging = true; seekToTouch(e); }, { passive: true });
  document.addEventListener('touchmove', e => { if (isDragging) seekToTouch(e); }, { passive: true });
  document.addEventListener('touchend', () => { isDragging = false; });

  // Volume
  volumeRange.addEventListener('input', () => {
    currentVolume = parseFloat(volumeRange.value);
    audio.volume  = currentVolume;
    updateVolIcon();
  });
  audio.volume = currentVolume;

  // Audio events
  audio.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = fmt(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    if (!isDragging && audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = pct + '%';
      progressThumb.style.left = pct + '%';
      timeCurrent.textContent  = fmt(audio.currentTime);
    }
  });

  audio.addEventListener('play', () => setPlayState(true));
  audio.addEventListener('pause', () => setPlayState(false));

  audio.addEventListener('ended', () => {
    stopViz();
    errorCount = 0;
    if (repeatMode === 2) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else if (repeatMode === 1 || isShuffled) {
      playNext();
    } else {
      setPlayState(false);
    }
  });

  audio.addEventListener('error', () => {
    errorCount++;
    if (errorCount >= MAX_ERRORS) {
      notify('Playback error — stopping', 'error');
      setPlayState(false);
      return;
    }
    notify('Skipping broken track…', 'error');
    setTimeout(playNext, 800);
  });

  updateRepeatBtn();
}

function togglePlay() {
  resumeAudioCtx();
  if (!audio.src) { if (activeSongs.length) playSong(0); return; }
  if (currentMode === 'video' && youtubePlayer) {
    if (isPlaying) youtubePlayer.pauseVideo(); else youtubePlayer.playVideo();
    return;
  }
  if (isPlaying) audio.pause(); else audio.play().catch(() => {});
}

function playPrev() {
  resumeAudioCtx();
  currentMode = 'audio';
  const i = isShuffled
    ? Math.floor(Math.random() * activeSongs.length)
    : (currentIndex - 1 + activeSongs.length) % activeSongs.length;
  playSong(i, activeSongs);
}

function playNext() {
  resumeAudioCtx();
  currentMode = 'audio';
  const i = isShuffled
    ? Math.floor(Math.random() * activeSongs.length)
    : (currentIndex + 1) % activeSongs.length;
  playSong(i, activeSongs);
}

function toggleShuffle() {
  isShuffled = !isShuffled;
  btnShuffle.classList.toggle('active', isShuffled);
  notify(isShuffled ? 'Shuffle on' : 'Shuffle off', 'info');
}

function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatBtn();
  notify(['Repeat off','Repeat all','Repeat one'][repeatMode], 'info');
}

function updateRepeatBtn() {
  const icon = btnRepeat.querySelector('.repeat-icon');
  const paths = [
    'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z'
  ];
  icon.innerHTML = `<path d="${paths[repeatMode]}"/>`;
  btnRepeat.classList.toggle('active', repeatMode > 0);
  btnRepeat.title = ['Repeat Off','Repeat All','Repeat One'][repeatMode];
}

function seekTo(e) {
  if (!audio.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1));
  audio.currentTime = pct * audio.duration;
  progressFill.style.width = pct * 100 + '%';
  progressThumb.style.left = pct * 100 + '%';
  timeCurrent.textContent  = fmt(audio.currentTime);
}
function seekToTouch(e) {
  if (!audio.duration || !e.touches.length) return;
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min((e.touches[0].clientX - rect.left) / rect.width, 1));
  audio.currentTime = pct * audio.duration;
}

function toggleMute() {
  if (audio.muted || currentVolume === 0) {
    audio.muted = false;
    currentVolume = prevVolume || 0.8;
    audio.volume = currentVolume;
    volumeRange.value = currentVolume;
  } else {
    prevVolume = currentVolume;
    audio.muted = true;
  }
  updateVolIcon();
}
function updateVolIcon() {
  const muted = audio.muted || currentVolume === 0;
  volUp.style.display  = muted ? 'none' : 'block';
  volOff.style.display = muted ? 'block' : 'none';
}

// ─── YouTube ──────────────────────────────────────────────────────────
function initYouTube() {
  youtubePlayer = new YT.Player('youtube-player', {
    height: '100%', width: '100%',
    playerVars: { playsinline: 1, controls: 1, rel: 0, modestbranding: 1 },
    events: {
      onStateChange: e => {
        if (currentMode !== 'video') return;
        if (e.data === YT.PlayerState.PLAYING)  setPlayState(true);
        if (e.data === YT.PlayerState.PAUSED)   setPlayState(false);
        if (e.data === YT.PlayerState.ENDED) { currentMode = 'audio'; playNext(); }
      },
      onError: () => notify('Video unavailable', 'error')
    }
  });
}

function handleVideoBtn() {
  const song = activeSongs[currentIndex];
  if (!song || !song.youtubeId || !song.youtubeId.trim()) { notify('No video for this song', 'info'); return; }
  if (!youtubePlayer) { notify('Video player not ready', 'error'); return; }
  audio.pause();
  currentMode = 'video';
  stopViz();
  youtubePlayer.loadVideoById(song.youtubeId);
  $('video-song-title').textContent  = song.title;
  $('video-song-artist').textContent = song.artist;
  ytPanel.style.display = 'flex';
  isVideoOpen = true;
  setPlayState(true);
}

function closeYoutube() {
  if (youtubePlayer) youtubePlayer.stopVideo();
  ytPanel.style.display = 'none';
  isVideoOpen = false;
  currentMode = 'audio';
  setPlayState(false);
}

// ─── Keyboard Shortcuts ───────────────────────────────────────────────
function setupKeyboard() {
  document.addEventListener('keydown', e => {
    const tag = e.target.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    switch (e.code) {
      case 'Space': e.preventDefault(); togglePlay(); break;
      case 'ArrowRight': e.preventDefault(); if (audio.duration) audio.currentTime = Math.min(audio.currentTime+5, audio.duration); break;
      case 'ArrowLeft':  e.preventDefault(); if (audio.duration) audio.currentTime = Math.max(audio.currentTime-5, 0); break;
      case 'ArrowUp':    e.preventDefault(); currentVolume = Math.min(currentVolume+0.05, 1); audio.volume = currentVolume; volumeRange.value = currentVolume; break;
      case 'ArrowDown':  e.preventDefault(); currentVolume = Math.max(currentVolume-0.05, 0); audio.volume = currentVolume; volumeRange.value = currentVolume; break;
      case 'KeyN': if (e.shiftKey) playNext(); break;
      case 'KeyP': if (e.shiftKey) playPrev(); break;
      case 'KeyM': toggleMute(); break;
    }
  });
}

// ─── Swipe (Mobile) ───────────────────────────────────────────────────
function setupSwipe() {
  let x0 = 0;
  document.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) < 60) return;
    if (dx > 0 && x0 < 30) { sidebar.classList.add('active'); sidebarOverlay.classList.add('active'); }
    else if (dx < 0) closeSidebar();
  });
}

// ─── Media Session ────────────────────────────────────────────────────
function initMediaSession() {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.setActionHandler('play', togglePlay);
  navigator.mediaSession.setActionHandler('pause', togglePlay);
  navigator.mediaSession.setActionHandler('previoustrack', playPrev);
  navigator.mediaSession.setActionHandler('nexttrack', playNext);
  try {
    navigator.mediaSession.setActionHandler('seekforward',  d => { if(audio.duration) audio.currentTime = Math.min(audio.currentTime + (d.seekOffset||10), audio.duration); });
    navigator.mediaSession.setActionHandler('seekbackward', d => { if(audio.duration) audio.currentTime = Math.max(audio.currentTime - (d.seekOffset||10), 0); });
  } catch(_) {}
}

function updateMediaSessionMeta(song) {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title:   song.title || 'Unknown',
      artist:  song.artist || 'Unknown',
      album:   song.album || '',
      artwork: song.cover ? [{ src: song.cover, sizes: '512x512', type: 'image/jpeg' }] : []
    });
  } catch(_) {}
}

function updateMediaSessionState() {
  if (!('mediaSession' in navigator)) return;
  try { navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused'; } catch(_) {}
}

// ─── Helpers ──────────────────────────────────────────────────────────
function fmt(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
