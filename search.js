const data = [
    { title: "Inception", year: 2010, image: "assets/inception.jpg", desc: "A thief who steals corporate secrets..." },
    { title: "Avengers: Endgame", year: 2019, image: "assets/endgame.jpg", desc: "The final battle of the Avengers..." },
    { title: "The Witcher", year: 2021, image: "assets/witcher.jpg", desc: "Geralt of Rivia hunts monsters..." },
    { title: "Black Mirror", year: 2023, image: "assets/blackmirror.jpg", desc: "Dark satire of modern society..." },
    { title: "Dune", year: 2024, image: "assets/dune.jpg", desc: "Epic sci-fi saga of desert warfare..." },
    { title: "Wednesday", year: 2023, image: "assets/wednesday.jpg", desc: "Addams family’s gothic daughter..." },
  ];
  
  let currentPage = 1;
  const perPage = 3;
  let currentView = 'grid';
  
  function performSearch() {
    currentPage = 1;
    renderResults();
  }
  
  function setView(view) {
    currentView = view;
    renderResults();
  }
  
  function renderResults() {
    const container = document.getElementById('search-results');
    const pagination = document.getElementById('pagination');
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const results = data.slice(start, end);
  
    container.className = currentView + "-view";
    container.innerHTML = results.map(item => {
      if (currentView === 'list') {
        return `
          <div class="list-item">
            <img src="${item.image}" alt="${item.title}">
            <div>
              <h3>${item.title} (${item.year})</h3>
              <p>${item.desc}</p>
            </div>
          </div>`;
      } else if (currentView === 'details') {
        return `
          <div class="details-item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title} (${item.year})</h3>
            <p>${item.desc}</p>
          </div>`;
      } else {
        return `
          <figure class="movie-card">
            <img src="${item.image}" alt="${item.title}">
            <figcaption>${item.title} (${item.year})</figcaption>
          </figure>`;
      }
    }).join('');
  
    // Pagination Buttons
    const totalPages = Math.ceil(data.length / perPage);
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `<button onclick="goToPage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
    }
  }
  
  function goToPage(page) {
    currentPage = page;
    renderResults();
  }
  
  // Initial render
  renderResults();
  