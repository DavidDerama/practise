const form = document.getElementById("movie-search");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const keyword = formData.get("search");
  const results = await fetchMovies(keyword);
});

function fetchMovies(search) {
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=70717e7f`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
}
