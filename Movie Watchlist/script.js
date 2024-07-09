const form = document.getElementById("movie-search");
const homeMainEl = document.getElementById("main-content");
const watchlistEl = document.querySelector(".watchlist");
const notifCenter = document.querySelector(".notif-center");
const trailerFrame = document.querySelector("iframe");
let watchlistArr = [];

const watchlist = JSON.parse(localStorage.getItem("watchlist"));

if (watchlist) {
  watchlistArr = watchlist;
}

if (watchlistEl) {
  if (watchlist) {
    getWatchlist();
  }
}

if (homeMainEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const keyword = formData.get("search");
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=70717e7f&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response.includes("False")) {
          renderNotif("Movie not found", "fa-x");
        } else {
          getMovieDesc(data.Search.slice(0, 5));
        }
      });
  });
}

document.addEventListener("click", (e) => {
  if (e.target.dataset.movieId) {
    const movieItem = e.target.dataset.movieId;
    if (watchlist) {
      if (watchlist.includes(movieItem)) {
        renderNotif("Movie already in watchlist", "fa-x");
      } else {
        watchlistArr.push(movieItem);
        localStorage.setItem("watchlist", JSON.stringify(watchlistArr));
        renderNotif("Movie added to watchlist", "fa-check");
      }
    } else {
      watchlistArr.push(movieItem);
      localStorage.setItem("watchlist", JSON.stringify(watchlistArr));
      renderNotif("Movie added to watchlist", "fa-check");
      window.location.href = "/watchlist.html";
    }
  }
  if (e.target.dataset.remove) {
    const index = parseInt(e.target.dataset.remove);
    const newArr = watchlist.splice(index, 1);
    localStorage.setItem("watchlist", JSON.stringify(newArr));
    getWatchlist();
    renderNotif("Movie removed from watchlist", "fa-check");
    if (!watchlist.length) {
      localStorage.clear();
      watchlistEl.innerHTML = `<div class="welcome">
            <h2><i class="fa-solid fa-film"></i></h2>
            <h2>Add a movie to your watchlist</h2>
        </div>`;
    }
  }

  if (e.target.dataset.trailer) {
    const movieId = e.target.dataset.trailer;
    renderTrailer(movieId);
  }

  if (!e.target.dataset.hideTrailer) {
    hideTrailer();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideTrailer();
  }
});

function renderNotif(message, status) {
  notifCenter.innerHTML = "";
  notifCenter.innerHTML = `<div class="notif">
    <i class="fa-solid ${status}"></i>
    <p class="label">${message}</p>
  </div>`;
}

function hideTrailer() {
  trailerFrame.style.display = "none";
  trailerFrame.src = "";
  document.querySelector("header").style.filter = "none";
  document.querySelector("main").style.filter = "none";
}

function getMovieDesc(arr) {
  homeMainEl.innerHTML = "";
  arr.forEach((item) => {
    fetch(
      `https://www.omdbapi.com/?i=${item.imdbID}&apikey=70717e7f&type=movie`
    )
      .then((res) => res.json())
      .then((data) => {
        homeMainEl.innerHTML += `<div class="movie main-movie">
              <div class="movie-image" data-trailer="${data.imdbID}">
                  <img src="${data.Poster}" alt="" data-trailer="${data.imdbID}">
              </div>
              <div class="movie-info">
                  <div class="title-rating" data-trailer="${data.imdbID}"><h3 data-trailer="${data.imdbID}">${data.Title}</h3><p>⭐${data.imdbRating}</p></div>
                  <ul>
                      <li class="mobile-hide"><p>${data.Year}</p></li>
                      <li class="mobile-hide"><p>${data.Runtime}</p></li>
                      <li class="mobile-hide"><p>${data.Genre}</p></li>
                      <li class="watchlist-btn">
                          <button class="add-watch" data-movie-id="${data.imdbID}"><i class="fa-solid fa-plus" data-movie-id="${data.imdbID}"></i></button>
                          <p>Watchlist</p>
                      </li>
                  </ul>
                  <div class="desc"><p>${data.Plot}</p></div>
              </div>
          </div> `;
      });
  });
}

function getWatchlist() {
  watchlistEl.innerHTML = "";
  watchlist.forEach((movie, index) => {
    fetch(`https://www.omdbapi.com/?i=${movie}&apikey=70717e7f&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        watchlistEl.innerHTML += `<div class="movie">
                  <div class="movie-image">
                      <img src="${data.Poster}" alt="">
                  </div>
                  <div class="movie-info">
                      <div class="title-rating"><h3>${data.Title}</h3><p>⭐${data.imdbRating}</p></div>
                      <ul>
                          <li class="mobile-hide"><p>${data.Year}</p></li>
                          <li class="mobile-hide"><p>${data.Runtime}</p></li>
                          <li class="mobile-hide"><p>${data.Genre}</p></li>
                      </ul>
                      <div class="desc">
                      <p>${data.Plot}</p><button class="remove-watch" data-remove="${index}">Remove</button>
                      </div>
                      
                  </div>
              </div> `;
      });
  });
}

function renderTrailer(movieId) {
  console.log(movieId);
  fetch(
    `https://api.themoviedb.org/3/find/${movieId}?external_source=imdb_id&api_key=3cbb651406e6c485b5275a6f20607d59`
  )
    .then((res) => res.json())
    .then((data) => {
      const tmdbId = data.movie_results[0].id;
      fetch(
        `https://api.themoviedb.org/3/movie/${tmdbId}/videos?language=en-US&api_key=3cbb651406e6c485b5275a6f20607d59`
      )
        .then((res) => res.json())
        .then((data) => {
          const results = data.results;
          const filteredResults = results.filter((movie) => {
            return movie.official && movie.type.includes("Trailer");
          });

          if (filteredResults.length) {
            const randomOrder = Math.floor(
              Math.random() * filteredResults.length
            );
            console.log(results);
            const trailerLink = `https://www.youtube.com/embed/${filteredResults[randomOrder].key}?si=-l0VOGSng81FHOP8`;

            trailerFrame.src = trailerLink;
            document.querySelector("header").style.filter = "blur(10px)";
            document.querySelector("main").style.filter = "blur(10px)";
            trailerFrame.style.display = "block";
          } else {
            renderNotif("Trailer not found", "fa-x");
          }
        });
    });
}
