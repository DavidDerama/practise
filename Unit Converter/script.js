const formHtml = document.getElementById("number-form");
const container = document.getElementById("main-content");
const header = document.querySelector("header");
const boxContent = document.querySelector(".box");
const modal = document.querySelector(".modal");
const notfiCenter = document.querySelector(".notif-center");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  //   container.innerHTML = "";
  const formData = new FormData(formHtml);
  const value = Number(formData.get("conversion"));
  container.innerHTML = `
  <section class="box" id="meter-feet" data-info="${value} meters = ${(
    value * 3.28084
  ).toFixed(3)} | ${value} feet =${(value / 3.28084).toFixed(3)} meters">
          <h3 data-info="${value} meters = ${(value * 3.28084).toFixed(
    3
  )} | ${value} feet =${(value / 3.28084).toFixed(
    3
  )} meters">Length (Meter/Feet)</h3>
          <p data-info="${value} meters = ${(value * 3.28084).toFixed(
    3
  )} | ${value} feet =${(value / 3.28084).toFixed(
    3
  )} meters">${value} meters = ${(value * 3.28084).toFixed(
    3
  )} feet | ${value} feet =${(value / 3.28084).toFixed(3)} meters</p>
        </section>

        <section class="box" id="liters-gallons" data-info="${value} liters =${(
    value / 3.78541
  ).toFixed(3)} gallons | ${value} gallons = ${(value * 3.78541).toFixed(
    3
  )} liters">
          <h3  data-info="${value} liters =${(value / 3.78541).toFixed(
    3
  )} gallons | ${value} gallons = ${(value * 3.78541).toFixed(
    3
  )} liters">Volume (Liters/Gallons)</h3>
          <p  data-info="${value} liters =${(value / 3.78541).toFixed(
    3
  )} gallons | ${value} gallons = ${(value * 3.78541).toFixed(
    3
  )} liters">${value} liters =${(value / 3.78541).toFixed(
    3
  )} gallons | ${value} gallons = ${(value * 3.78541).toFixed(3)} liters</p>
        </section>
        
        
        
        
        <section class="box" id="kilograms-pounds" data-info="${value} kilos = ${(
    value * 2.2046
  ).toFixed(3)} pounds | ${value} pounds =${(value / 2.2046).toFixed(3)} kilos">
          <h3 data-info="${value} kilos = ${(value * 2.2046).toFixed(
    3
  )} pounds | ${value} pounds =${(value / 2.2046).toFixed(
    3
  )} kilos">Mass (Kilograms/Pounds)</h3>
          <p data-info="${value} kilos = ${(value * 2.2046).toFixed(
    3
  )} pounds | ${value} pounds =${(value / 2.2046).toFixed(
    3
  )} kilos">${value} kilos = ${(value * 2.2046).toFixed(
    3
  )} pounds | ${value} pounds =${(value / 2.2046).toFixed(3)} kilos</p>
        </section>
    `;
  header.classList.add("header-animate");
  document.querySelector("main").style.display = "block";
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.info) {
    navigator.clipboard.writeText(e.target.dataset.info);
    notfiCenter.innerHTML = `<div class="notif">
        <i class="fa-solid fa-check"></i>
        <label> Copied to clipboard</label>
      </div>`;
  }
});
