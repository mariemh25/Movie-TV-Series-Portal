  // Sample movie data
const top10Movies = [
  { title: "The Last of Us", rating: "8.7", trailer: "https://youtu.be/uLtkt8BonwM?si=BTeuQEq197M-81QW", poster: "moviepics/thelastofus.jpg" },
  { title: "tangled", rating: "7.6", trailer: "https://youtu.be/ycoY201RTRo?si=ujPo8CIu1Ous_kqK", poster: "moviepics/tangled.jpeg" },
  { title: "alein", rating: "8.1", trailer: "https://youtu.be/jQ5lPt9edzQ?si=YTDCMDyXyvt-EPvP", poster: "moviepics/alien.jpeg" },
  { title: "spiderman", rating: "7.7", trailer: "https://youtu.be/t06RUxPbp_c?si=11rhMmCFq4UE8ire", poster: "moviepics/spiderman.jpg" },
  { title: "us", rating: "8.4", trailer: "https://youtu.be/hNCmb-4oXJA?si=8g32ulFlfEj1d7N-", poster: "moviepics/us.jpg" },
  { title: "Oppenheimer", rating: "8.6", trailer: "https://youtu.be/uYPbbksJxIg", poster: "moviepics/Oppenheimer.jpg" },
  { title: "Barbie", rating: "7.2", trailer: "https://youtu.be/pBk4NYhWNMM", poster: "moviepics/barbie.jpg" },
  { title: "The Batman", rating: "7.9", trailer: "https://youtu.be/mqqft2x_Aa4", poster: "moviepics/batman.jpg" },
  { title: "Joker", rating: "8.4", trailer: "https://youtu.be/zAGVQLHvwOY", poster: "moviepics/jokerjpg.jpg" },
  { title: "Avatar: The Way of Water", rating: "7.8", trailer: "https://youtu.be/d9MyW72ELq0", poster: "moviepics/avatar.jpg" },
  { title: "Inception", rating: "8.8", trailer: "https://youtu.be/YoHD9XEInc0", poster: "moviepics/inc.jpg" },
  { title: "Interstellar", rating: "8.6", trailer: "https://youtu.be/zSWdZVtXT7E", poster: "moviepics/installer.jpg" },
  { title: "The Dark Knight", rating: "9.0", trailer: "https://youtu.be/EXeTwQWrcwY", poster: "moviepics/thedarknight.jpg" },
  { title: "Dune", rating: "8.1", trailer: "https://youtu.be/n9xhJrPXop4", poster: "moviepics/Dune_(2021_film).jpg" },
  { title: "The Walking Dead", rating: "6.8", trailer: "https://youtu.be/sfAc2U20uyg?si=-d8XQweNw2g5Oi2_", poster: "moviepics/thewalkingdead.jpg" },
  { title: "How to lose a guy in 10 days", rating: "8.1", trailer: "https://youtu.be/2ZMGk_Ml1fc?si=zCrsDmF8XgoekL-j", poster: "moviepics/HTLAGI10D.jpg" },
  { title: "To all the boys i've loved before", rating: "7.3", trailer: "https://youtu.be/555oiY9RWM4?si=Wcf_9ejmaQ_nKH-r", poster: "moviepics/images.jfif" },
  { title: "COCO", rating: "8.0", trailer: "https://youtu.be/xlnPHQ3TLX8?si=NFlbFgv7EkPVPIdV", poster: "moviepics/coco.jpg" },
  { title: "King Kong", rating: "6.7", trailer: "https://youtu.be/9extfjDZCts?si=9oqjHPJK2ksqZ5zS", poster: "moviepics/kingkong.jfif" },
  { title: "Matrix", rating: "8.1", trailer: "https://youtu.be/vKQi3bBA1y8?si=gbbYpBNoS-5fPDVH", poster: "moviepics/matrix.jfif" }
];

const fanFavorites = [
  { title: "You", rating: "7.4", trailer: "https://www.youtube.com/watch?v=v99ooSjCVhg", poster: "moviepics/you.jpg" },
  { title: "The god father", rating: "7.5", trailer: "https://www.youtube.com/watch?v=AlBu7t_2okw", poster: "moviepics/thegodfather.jpeg" },
  { title: "Stranger things", rating: "8.2", trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU", poster: "moviepics/stranger-things.jpg" },
  { title: "Seven", rating: "8.2", trailer: "https://www.youtube.com/watch?v=KPOuJGkpblk", poster: "moviepics/7.jfif" },
  { title: "prisoners", rating: "8.2", trailer: "https://www.youtube.com/watch?v=bpXfcTF6iVk", poster: "moviepics/prison.jfif" },
];

// Helper to render a movie card
function renderMovieCard(movie) {
  return `
    <div class="movie-card">
      <img src="${movie.poster}" alt="${movie.title}" style="width:100%; border-radius: 5px;">
      <h4>${movie.title}</h4>
      <div class="rating">Rating: ${movie.rating}</div>
      <button onclick='addToWatchlist(${JSON.stringify(movie)})'>+ Watchlist</button>
      <button onclick="window.open('${movie.trailer}', '_blank')">▶ Trailer</button>
    </div>
  `;
}

function renderSection(id, movies) {
  const container = document.getElementById(id);
  container.innerHTML = movies.map(renderMovieCard).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  renderSection("top10", top10Movies);
  renderSection("fanFavorites", fanFavorites);

  const scrollBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
});

// Save to watchlist
function addToWatchlist(movie) {
  const existing = JSON.parse(localStorage.getItem("watchlist")) || [];
  const exists = existing.some(m => m.title === movie.title);
  if (!exists) {
    existing.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(existing));
    alert(`${movie.title} added to Watchlist`);
  } else {
    alert(`${movie.title} is already in your Watchlist`);
  }
}
document.getElementById('genre').addEventListener('change', (e) => {
  const genre = e.target.value;
  const filtered = top10Movies.filter(m => m.genre === genre);
  renderSection("top10", filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  const userData = localStorage.getItem("loggedInUser");
  if (userData) {
    const user = JSON.parse(userData);
    document.getElementById("profileUsername").textContent = user.username;
    document.getElementById("profileEmail").textContent = user.email;
    document.getElementById("profileSince").textContent = user.memberSince;
  }
});
function postReply(button) {
  // Find the closest post container from the clicked button
  const postDiv = button.closest('.post');
  
  // Find the textarea inside this post
  const textarea = postDiv.querySelector('.reply-form textarea');
  
  // Find the reply section inside this post
  const replySection = postDiv.querySelector('.reply-section');
  
  if (textarea.value.trim() === '') {
    alert('Reply cannot be empty!');
    return;
  }

  // Create new reply element
  const newReply = document.createElement('div');
  newReply.classList.add('reply');
  newReply.innerHTML = `<strong>You:</strong><p>${textarea.value}</p>`;

  // Append the new reply
  replySection.appendChild(newReply);

  // Clear the textarea
  textarea.value = '';
}
