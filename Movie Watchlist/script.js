const form = document.getElementById("movie-search");
const homeMainEl = document.getElementById("main-content");
const watchlistEl = document.querySelector(".watchlist");
const notifCenter = document.querySelector(".notif-center");
let watchlistArr = [];

const watchlist = JSON.parse(localStorage.getItem("watchlist"));

if (watchlist) {
  watchlistArr = watchlist;
}

if (watchlistEl) {
  form.style.display = "none";
  if (watchlist) {
    getWatchlist();
  }
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
                      <li><p>${data.Year}</p></li>
                      <li><p>${data.Runtime}</p></li>
                      <li><p>${data.Genre}</p></li>
                      <li class="watchlist-btn">
                          <button class="add-watch" data-remove="${index}"><i class="fa-solid fa-minus" data-remove"${index}"></i></button>
                          <p>Remove</p>
                      </li>
                  </ul>
                  <div class="desc"><p>${data.Plot}</p></div>
              </div>
          </div> `;
      });
  });
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
          getMovieDesc(data.Search);
        }
      });
  });
}

function getMovieDesc(arr) {
  homeMainEl.innerHTML = "";
  arr.forEach((item) => {
    fetch(
      `https://www.omdbapi.com/?i=${item.imdbID}&apikey=70717e7f&type=movie`
    )
      .then((res) => res.json())
      .then((data) => {
        homeMainEl.innerHTML += `<div class="movie">
            <div class="movie-image">
                <img src="${data.Poster}" alt="">
            </div>
            <div class="movie-info">
                <div class="title-rating"><h3>${data.Title}</h3><p>⭐${data.imdbRating}</p></div>
                <ul>
                    <li><p>${data.Year}</p></li>
                    <li><p>${data.Runtime}</p></li>
                    <li><p>${data.Genre}</p></li>
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
    const index = e.target.dataset.remove;
    watchlist.splice(index, 1);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    getWatchlist();
  }
});

function renderNotif(message, status) {
  notifCenter.innerHTML = "";
  notifCenter.innerHTML = `<div class="notif">
    <i class="fa-solid ${status}"></i>
    <p class="label">${message}</p>
  </div>`;
}
