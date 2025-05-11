document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('movies');

  moviesData.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
    <div class="poster">
    <img class='image' src=${movie.poster} alt="Movie Poster">
  </div>
  <div class="info">
    <h3  class="title"> ${movie.title} </h3>
    <p class="year">Released:  ${movie.year}  </p>
    <p class="director">Director: <span>${movie.director}</span></p>
  </div>
  `;
    container.appendChild(card);

    const image = card.querySelector(".image");
    const title = card.querySelector(".title");
    const movieTitle = title.innerText;

    //sending to individual page
      image.addEventListener('click', () => { 
       const encodedTitle = encodeURIComponent(movieTitle)
       console.log('ecn', encodedTitle)
       window.location.href = `Movie.html?title=${encodedTitle}`
  })

  }); 

})