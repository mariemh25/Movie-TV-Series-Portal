// search.js
const movies = [
  { title: "The Last of Us", img: "moviepics/thelastofus.jpg" },
  { title: "tangled", img: "moviepics/tangled.jpeg" },
  { title: "alein", img: "moviepics/alien.jpeg" },
  { title: "spiderman", img: "moviepics/spiderman.jpg" },
  { title: "us", img: "moviepics/us.jpg" },
  { title: "Oppenheimer", img: "moviepics/Oppenheimer.jpg" },
  { title: "Barbie", img: "moviepics/barbie.jpg" },
  { title: "The Batman", img: "moviepics/batman.jpg" },
  { title: "Joker", img: "moviepics/jokerjpg.jpg" },
  { title: "Avatar: The Way of Water", img: "moviepics/avatar.jpg" },
  { title: "Inception", img: "moviepics/inc.jpg" },
  { title: "Interstellar", img: "moviepics/installer.jpg" },
  { title: "The Dark Knight", img: "moviepics/thedarknight.jpg" },
  { title: "Dune", img: "moviepics/Dune_(2021_film).jpg" },
  { title: "The Walking Dead", img: "moviepics/thewalkingdead.jpg" },
  { title: "How to lose a guy in 10 days", img: "moviepics/HTLAGI10D.jpg" },
  { title: "To all the boys i've loved before", img: "moviepics/images.jfif" },
  { title: "COCO", img: "moviepics/coco.jpg" },
  { title: "King Kong", img: "moviepics/kingkong.jfif" },
  { title: "Matrix", img: "moviepics/matrix.jfif" },
];

let currentPage = 1;
const itemsPerPage = 4;
let filteredMovies = [...movies]; // To hold filtered movies

function displayMovies() {
  const container = document.getElementById("resultsContainer");
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentMovies = filteredMovies.slice(start, end);

  container.innerHTML = currentMovies.map(movie => `
    <div class="movie-card">
      <img src="${movie.img}" alt="${movie.title}">
      <div class="caption">${movie.title}</div>
    </div>
  `).join("");

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredMovies.length / itemsPerPage)}`;
}

function nextPage() {
  if (currentPage * itemsPerPage < filteredMovies.length) {
    currentPage++;
    displayMovies();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayMovies();
  }
}

function searchMovies() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchInput)
  );

  currentPage = 1; // Reset to the first page
  displayMovies();

  if (filteredMovies.length === 0) {
    document.getElementById("resultsContainer").innerHTML = "<p>No movies found.</p>";
    updatePaginationInfo();
  }
}

window.onload = () => {
  displayMovies();

  // Attach event listeners
  document.getElementById("searchBtn").addEventListener("click", searchMovies);
  document.getElementById("searchInput").addEventListener("keyup", searchMovies); // Search on typing
};