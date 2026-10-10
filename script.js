// Replace these demo entries with music you own or have permission to distribute.
// Add a direct authorized download URL in `url` for each track.
// Do not place Telegram bot tokens or other secrets in this frontend file.
const tracks = [
  { title: "Morning Light", artist: "Demo Artist", genre: "Chill", category: "chill", duration: "3:12", url: "" },
  { title: "Quiet Streets", artist: "Demo Artist", genre: "Instrumental", category: "instrumental", duration: "2:48", url: "" },
  { title: "Green Horizon", artist: "Demo Artist", genre: "Chill", category: "chill", duration: "4:05", url: "" },
  { title: "Little Moments", artist: "Demo Artist", genre: "Pop", category: "pop", duration: "3:31", url: "" },
  { title: "Soft Piano", artist: "Demo Artist", genre: "Instrumental", category: "instrumental", duration: "2:57", url: "" },
  { title: "Sunday Sky", artist: "Demo Artist", genre: "Pop", category: "pop", duration: "3:19", url: "" }
];

const trackList = document.querySelector("#trackList");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const trackCount = document.querySelector("#trackCount");
let activeFilter = "all";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}

function renderTracks() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = tracks.filter((track) => {
    const matchesFilter = activeFilter === "all" || track.category === activeFilter;
    const matchesSearch = `${track.title} ${track.artist} ${track.genre}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  trackCount.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
  trackList.innerHTML = visible.map((track) => {
    const index = tracks.indexOf(track);
    const coverClass = ["", "c2", "c3", "c4"][index % 4];
    const action = track.url
      ? `<a class="track-action" href="${escapeHtml(track.url)}" target="_blank" rel="noopener noreferrer">ទាញយក ↗</a>`
      : `<span class="track-action disabled" title="បន្ថែមតំណដែលមានសិទ្ធិប្រើប្រាស់ក្នុង script.js">មិនទាន់មានតំណ</span>`;
    return `<article class="track-card">
      <div class="cover ${coverClass}" aria-hidden="true">♫</div>
      <div class="track-info">
        <div class="track-title">${escapeHtml(track.title)}</div>
        <div class="track-artist">${escapeHtml(track.artist)} · ${escapeHtml(track.duration)}</div>
      </div>
      <span class="tag">${escapeHtml(track.genre)}</span>
      ${action}
    </article>`;
  }).join("");
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderTracks();
  });
});
searchInput.addEventListener("input", renderTracks);
document.querySelector("#year").textContent = new Date().getFullYear();
renderTracks();
