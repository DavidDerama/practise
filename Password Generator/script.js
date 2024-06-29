import { characters } from "./characters.js";

const generateBtn = document.getElementById("generate");
const firstEl = document.getElementById("first-result");
const secondEl = document.getElementById("second-result");
const lengthInput = document.getElementById("password-length");
const gearEl = document.querySelector(".fa-gear");
const closeEl = document.querySelector(".close");
const moreEl = document.getElementById("more-options");
const resultEl = document.querySelectorAll(".result");
const resultsEl = document.getElementById("results");
const symbolCheck = document.getElementById("symbols");
const numbersCheck = document.getElementById("numbers");

const letterChar = characters.slice(0, characters.indexOf("z"));
const symbolsChar = characters.slice(
  characters.indexOf("~"),
  characters.indexOf("/")
);

generateBtn.addEventListener("click", () => {
  resultsEl.innerHTML = "";
  if (lengthInput.value >= 15 && lengthInput.value <= 30) {
    const generateFirst = renderPassword(lengthInput.value);
    const generateSecond = renderPassword(lengthInput.value);
    resultsEl.innerHTML += `<div id="first-result" class="result" data-password="${generateFirst}">${generateFirst}</div>
          <div id="second-result" class="result" data-password="${generateSecond}">${generateSecond}</div>`;
  }
  if (!lengthInput.value) {
    const generateFirst = renderPassword();
    const generateSecond = renderPassword();
    resultsEl.innerHTML += `<div id="first-result" class="result" data-password="${generateFirst}">${generateFirst}</div>
          <div id="second-result" class="result" data-password="${generateSecond}">${generateSecond}</div>`;
  }
  resultsEl.style.display = "flex";
});

function renderPassword(number = 15) {
  const lengthNum = parseInt(number);
  let password = "";
  if (!numbersCheck.checked && symbolCheck.checked) {
    const noNumbersArr = [...letterChar, ...symbolsChar];
    for (let i = 0; i < lengthNum; i++) {
      let randomOrder = Math.floor(Math.random() * noNumbersArr.length);
      password += `${noNumbersArr[randomOrder]}`;
    }
    return password;
  } else if (!symbolCheck.checked && numbersCheck.checked) {
    const noSymbolsArr = characters.slice(0, characters.indexOf("~"));
    for (let i = 0; i < lengthNum; i++) {
      let randomOrder = Math.floor(Math.random() * noSymbolsArr.length);
      password += `${noSymbolsArr[randomOrder]}`;
    }
    return password;
  } else if (symbolCheck.checked && numbersCheck.checked) {
    for (let i = 0; i < lengthNum; i++) {
      let randomOrder = Math.floor(Math.random() * characters.length);
      password += `${characters[randomOrder]}`;
    }
    return password;
  } else if (!symbolCheck.checked && !numbersCheck.checked) {
    for (let i = 0; i < lengthNum; i++) {
      let randomOrder = Math.floor(Math.random() * letterChar.length);
      password += `${letterChar[randomOrder]}`;
    }
    return password;
  }
}

gearEl.addEventListener("click", () => {
  moreEl.style.display = "flex";
  gearEl.style.display = "none";
});

closeEl.addEventListener("click", () => {
  moreEl.style.display = "none";
  gearEl.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.password) {
    const text = e.target.dataset.password;
    navigator.clipboard.writeText(text);
    alert("Copied the password: " + text);
  }
});
