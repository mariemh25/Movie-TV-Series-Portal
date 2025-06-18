const moviesData = {
  "The Last of Us": {
    year: 2023,
    rating: "9.2",
    director: "Craig Mazin",
    duration: "60 min",
    poster: "moviepics/thelastofus.jpg"
  },
  "Tangled": {
    year: 2010,
    rating: "7.7",
    director: "Nathan Greno",
    duration: "100 min",
    poster: "moviepics/tangled.jpeg"
  },
  "Alien": {
    year: 1979,
    rating: "8.5",
    director: "Ridley Scott",
    duration: "117 min",
    poster: "moviepics/alien.jpeg"
  },
  "Us": {
    year: 2019,
    rating: "6.8",
    director: "Jordan Peele",
    duration: "116 min",
    poster: "moviepics/us.jpg"
  },
  "You": {
    year: 2018,
    rating: "7.7",
    director: "Greg Berlanti",
    duration: "45 min",
    poster: "moviepics/you.jpg"
  },
  "The Godfather": {
    year: 1972,
    rating: "9.2",
    director: "Francis Ford Coppola",
    duration: "175 min",
    poster: "moviepics/thegodfather.jpeg"
  },
  "Stranger Things": {
    year: 2016,
    rating: "8.7",
    director: "The Duffer Brothers",
    duration: "51 min",
    poster: "moviepics/stranger-things.jpg"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const select1 = document.getElementById("selectMovie1");
  const select2 = document.getElementById("selectMovie2");

  Object.keys(moviesData).forEach((title) => {
    const option1 = document.createElement("option");
    option1.value = title;
    option1.textContent = title;

    const option2 = option1.cloneNode(true);
    select1.appendChild(option1);
    select2.appendChild(option2);
  });
});

function compareSelectedMovies() {
  const movie1Title = document.getElementById("selectMovie1").value;
  const movie2Title = document.getElementById("selectMovie2").value;

  const m1 = moviesData[movie1Title];
  const m2 = moviesData[movie2Title];
  const tableDiv = document.getElementById("comparison-table");

  if (!m1 || !m2) {
    tableDiv.innerHTML = `<p style="color:red;">One or both movies not found in database.</p>`;
    return;
  }

  const tableHTML = `
    <table>
      <tr>
        <th>Property</th>
        <th>${movie1Title}</th>
        <th>${movie2Title}</th>
      </tr>
      <tr>
        <td>Poster</td>
        <td><img src="${m1.poster}" alt="${movie1Title}" width="100"></td>
        <td><img src="${m2.poster}" alt="${movie2Title}" width="100"></td>
      </tr>
      <tr>
        <td>Release Year</td>
        <td>${m1.year}</td>
        <td>${m2.year}</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td>${m1.rating}</td>
        <td>${m2.rating}</td>
      </tr>
      <tr>
        <td>Duration</td>
        <td>${m1.duration}</td>
        <td>${m2.duration}</td>
      </tr>
      <tr>
        <td>Director</td>
        <td>${m1.director}</td>
        <td>${m2.director}</td>
      </tr>
    </table>
  `;

  tableDiv.innerHTML = tableHTML;
}
