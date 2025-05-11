// Function to save movie to watchlist
function addToWatchlist(movie) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    renderWatchlist();
  }
  
  // Function to remove movie from watchlist
  function removeFromWatchlist(movieId) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist = watchlist.filter(movie => movie.id !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    renderWatchlist();
  }
  
  // Render the watchlist
  function renderWatchlist() {
    const watchlistContainer = document.getElementById('watchlist-container');
    const noWatchlistMsg = document.getElementById('no-watchlist-msg');
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    
    if (watchlist.length === 0) {
      noWatchlistMsg.style.display = 'block';
      watchlistContainer.innerHTML = '';
    } else {
      noWatchlistMsg.style.display = 'none';
      watchlistContainer.innerHTML = '';
  
      watchlist.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('watchlist-item');
        movieDiv.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}" />
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre} | ${movie.year}</p>
            <button onclick="removeFromWatchlist('${movie.id}')">Remove</button>
          </div>
        `;
        watchlistContainer.appendChild(movieDiv);
      });
    }
  }
  
  // Function to render movie comparison
  function renderComparison(movie1, movie2) {
    const comparisonTable = document.getElementById('comparison-table');
    comparisonTable.innerHTML = `
      <table>
        <tr>
          <th>Movie 1</th>
          <th>Movie 2</th>
        </tr>
        <tr>
          <td>
            <img src="${movie1.image}" alt="${movie1.title}" />
            <h3>${movie1.title}</h3>
            <p>${movie1.genre} | ${movie1.year}</p>
            <p>${movie1.rating} / 10</p>
          </td>
          <td>
            <img src="${movie2.image}" alt="${movie2.title}" />
            <h3>${movie2.title}</h3>
            <p>${movie2.genre} | ${movie2.year}</p>
            <p>${movie2.rating} / 10</p>
          </td>
        </tr>
      </table>
    `;
  }
  
  // Example of how to use the above functions
  document.addEventListener('DOMContentLoaded', () => {
    renderWatchlist();
  
    // For demonstration, compare two dummy movies (you can replace this logic to get movie IDs from URL or other methods)
    const movie1 = {
      id: '1',
      title: 'Movie 1',
      genre: 'Action',
      year: 2025,
      rating: 8.7,
      image: 'https://via.placeholder.com/150'
    };
    const movie2 = {
      id: '2',
      title: 'Movie 2',
      genre: 'Comedy',
      year: 2024,
      rating: 7.4,
      image: 'https://via.placeholder.com/150'
    };
  
    renderComparison(movie1, movie2);
  });
  