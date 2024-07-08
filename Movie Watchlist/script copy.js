const form = document.getElementById("movie-search");
const mainEL = document.querySelector(".main-content");
const notifCenter = document.querySelector(".notif-center");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const keyword = formData.get("search");
  try {
    const results = await fetchMovies(keyword);
    const resultsFull = await fetchMovieDetails(results);
  } catch (err) {
    notifCenter.innerHTML = "";
    notifCenter.innerHTML = `<div class="notif">
        <i class="fa-solid fa-check"></i>
        <p class="label">${err.message}</p>
      </div>`;
  }
});

function fetchMovies(search) {
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=70717e7f`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response.includes("False")) {
          reject({ message: "Movie not found" });
        } else {
          resolve(data.Search.slice(0, 10));
        }
      });
  });
}

function fetchMovieDetails(arr) {
  let html = "";
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      const arrMovies = [];
      fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=70717e7f`)
        .then((res) => res.json())
        .then((data) => {
          html += `TEST`;
        });
      return arrMovies;
    });
    console.log(html);
    mainEL.innerHTML = html;
    resolve(html);
  });
}

// function fetchMovieDetails12(movieId) {
//   return new Promise((resolve, reject) => {
//     fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=70717e7f`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.Response.includes("False")) {
//           reject({ message: "Movie Not Found" });
//         } else {
//           resolve(data);
//         }
//       });
//   });
// }
