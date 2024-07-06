const autotContainer = document.getElementById("autot-koti");
const hakuTulos = document.getElementById("hakutulos");
const hakuForm = document.getElementById("auto-haku");
const hakuLocal = JSON.parse(localStorage.getItem("hakutulos"));
const lisaaBtn = document.getElementById("lisaa-btn");
const lisaaForm = document.getElementById("lisaa-form");

if (autotContainer) {
  document.addEventListener("DOMContentLoaded", () => {
    lisaaForm.style.display = "none";
    renderAutot();
  });
}

function renderAutot() {
  fetch("/api/autot", {
    method: "GET",
    headers: { "Content-Type": "applciation/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const html = data
        .map((el) => {
          return `<div class="auto">
        <div class="auto-img">
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div class="auto-desc">
          <p>${el.vuosimalli}</p>
          <h4>${el.merkki}, ${el.malli}</h4>
          <p>${el.omistaja}</p>
        </div>
      </div>`;
        })
        .join("");
      autotContainer.innerHTML = html;
    });
}

hakuForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(hakuForm);
  const hakusana = formData.get("hakusana");
  fetch("/hae", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      hakusana: hakusana,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const json = [...data];
      localStorage.setItem("hakutulos", JSON.stringify(json));
      window.location.href = "/hakutulos";
    });
});

if (hakuTulos) {
  lisaaForm.style.display = "none";

  const hakuHtml = hakuLocal
    .map((el) => {
      return `<div class="auto">
    <div class="auto-img">
      <img
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div class="auto-desc">
      <p>${el.vuosimalli}</p>
      <h4>${el.merkki}, ${el.malli}</h4>
      <p>${el.omistaja}</p>
    </div>
  </div>`;
    })
    .join("");
  hakuTulos.innerHTML = hakuHtml;
}

lisaaBtn.addEventListener("click", () => {
  lisaaForm.style.display = "flex";
});

lisaaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(lisaaForm);
  const merkki = formData.get("merkki");
  const malli = formData.get("malli");
  const vuosimalli = formData.get("vuosimalli");
  const omistaja = formData.get("omistaja");

  fetch("/lisaa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merkki: merkki,
      malli: malli,
      vuosimalli: vuosimalli,
      omistaja: omistaja,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      renderAutot();
      lisaaForm.style.display = "none";
    });
});
