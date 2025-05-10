document.addEventListener("DOMContentLoaded", () => {
const container = document.getElementById('tvshows');

tvshowsData.forEach(tvshow => {
  const card = document.createElement("div");
  card.className = "tvshow-card";
  card.innerHTML = `
    <div class="poster">
    <img src=${tvshow.poster} alt="Tvshow Poster">
  </div>
  <div class="info">
    <h3 class="title"> ${tvshow.title} </h3>
    <p class="year">Released:  ${tvshow.year}  </p>
    <p class="director">Director: <span>${tvshow.director}</span></p>
  </div>
  `;
  container.appendChild(card)


})
})