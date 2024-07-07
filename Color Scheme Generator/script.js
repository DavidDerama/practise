const form = document.getElementById("color-form");
const resultsEl = document.querySelector(".color-results");
const notifCenter = document.querySelector(".notif-center");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const colorInput = formData.get("color-select");
  const colorInputEdited = colorInput.slice(1);
  const colorScheme = formData.get("color-scheme");
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInputEdited}&mode=${colorScheme.toLowerCase()}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const results = data.colors;
      resultsEl.innerHTML = "";

      const html = results
        .map((color) => {
          return `
        <div class="color">
            <div class="display" style="background-color: ${color.hex.value}; border:none;" data-color-value="${color.hex.value}"></div>
            <div class="info" data-color-value="${color.hex.value}"><p class="label" data-color-value="${color.hex.value}">${color.hex.value}</p></div>
          </div>
          `;
        })
        .join("");

      resultsEl.innerHTML = html;
    });
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.colorValue) {
    notifCenter.innerHTML = "";
    const colorValue = e.target.dataset.colorValue;
    navigator.clipboard.writeText(colorValue);
    notifCenter.innerHTML = `<div class="notif">
        <i class="fa-solid fa-check"></i>
        <p>Copied to clipboard</p>
      </div>`;
  }
});
