const concerts = [
  { city: "Paris", country: "France", venue: "Le 360 Paris Music Factory", date: "2026-05-31" },
  { city: "Paris", country: "France", venue: "La Marbrerie", date: "2026-06-02" },
  { city: "Paris", country: "France", venue: "La Machine du Moulin Rouge", date: "2026-07-02" },
  { city: "Roubaix", country: "France", venue: "La Condition Publique", date: "2026-07-08" },
  { city: "Saint-Avé", country: "France", venue: "L’Echova", date: "2026-08-05" },
  { city: "Marseille", country: "France", venue: "La Makeda", date: "2026-09-03" },
  { city: "Berlin", country: "Allemagne", venue: "Gretchen", date: "2026-10-17" },
  { city: "Niort", country: "France", venue: "Espace René Cassin", date: "2026-10-29" },
];

const container = document.getElementById("concertsContainer");
const searchInput = document.getElementById("searchInput");
const filterLabel = document.getElementById("filterLabel");

const filters = [
  "TOUS",
  "JANVIER",
  "FÉVRIER",
  "MARS",
  "AVRIL",
  "MAI",
  "JUIN",
  "JUILLET",
  "AOÛT",
  "SEPTEMBRE",
  "OCTOBRE",
  "NOVEMBRE",
  "DÉCEMBRE"
];

let currentIndex = 0;

function formatDate(dateStr) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateStr).toLocaleDateString("fr-FR", options);
}

function renderConcerts(list) {
  container.innerHTML = list.map(concert => `
    <div class="concert">
      <div>
        <div class="location">${concert.city}, ${concert.country}</div>
        <div class="venue">${concert.venue}</div>
      </div>
      <div class="date">${formatDate(concert.date)}</div>
    </div>
  `).join("");
}

function filterConcerts() {
  const search = searchInput.value.toLowerCase();

  let filtered = concerts.filter(c =>
    c.city.toLowerCase().includes(search) ||
    c.country.toLowerCase().includes(search)
  );

  const currentFilter = filters[currentIndex];

  if (currentFilter !== "TOUS") {
    const monthIndex = filters.indexOf(currentFilter) - 1; 
    
    filtered = filtered.filter(c => {
      const concertMonth = new Date(c.date).getMonth();
      return concertMonth === monthIndex;
    });
  }

  renderConcerts(filtered);
}

searchInput.addEventListener("input", filterConcerts);

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = filters.length - 1; 
  }

  filterLabel.textContent = filters[currentIndex];
  filterConcerts();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= filters.length) {
    currentIndex = 0; 
  }

  filterLabel.textContent = filters[currentIndex];
  filterConcerts();
});

renderConcerts(concerts);