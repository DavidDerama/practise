const incrementBtn = document.getElementById("increment");
const saveBtn = document.getElementById("save");
const passengerCountEl = document.getElementById("passenger-count");
const passengerHistoryEl = document.getElementById("passenger-history");

let passengerCount = 0;
passengerCountEl.textContent = passengerCount;

let tries = 0;

let passengerHistory = [];

incrementBtn.addEventListener("click", () => {
  passengerCount++;
  passengerCountEl.textContent = passengerCount;
});

saveBtn.addEventListener("click", () => {
  tries++;
  if (tries >= 2) {
    passengerHistoryEl.textContent += " - " + passengerCount;
  } else {
    passengerHistoryEl.textContent += passengerCount;
  }
  passengerCountEl.textContent = 0;
  passengerCount = 0;
});
