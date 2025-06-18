// Load and render watchlist movies on page load
document.addEventListener("DOMContentLoaded", () => {
  renderWatchlist();
});

// Render the watchlist items from localStorage
function renderWatchlist() {
  const watchlistContainer = document.getElementById('watchlist-container');
  const noWatchlistMsg = document.getElementById('no-watchlist-msg');

  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

  if (watchlist.length === 0) {
    watchlistContainer.style.display = 'none';
    noWatchlistMsg.style.display = 'block';
  } else {
    noWatchlistMsg.style.display = 'none';
    watchlistContainer.style.display = 'flex';  // or block, depending on your CSS

    watchlistContainer.innerHTML = watchlist.map(movie => `
      <div class="movie-card">
        <img src="${movie.poster}" alt="${movie.title}" />
        <h4>${movie.title}</h4>
        <div class="rating">Rating: ${movie.rating}</div>
        <button onclick='removeFromWatchlist("${movie.title}")'>Remove</button>
        <button onclick="window.open('${movie.trailer}', '_blank')">▶ Trailer</button>
      </div>
    `).join('');
  }
}

// Remove a movie from the watchlist by title
function removeFromWatchlist(title) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  watchlist = watchlist.filter(movie => movie.title !== title);
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
  renderWatchlist();
}
