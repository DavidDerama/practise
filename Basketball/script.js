const homeScoreEl = document.getElementById("home-score");
const guestScoreEL = document.getElementById("guest-score");
const homeScoreHeader = document.getElementById("home-header");
const guestScoreHeader = document.getElementById("guest-header");
const timerEl = document.getElementById("timer");

let homeScore = 0;
let guestScore = 0;
let timeSeconds = 59;
let timeMinutes = 60;

const enableButtons = document.querySelectorAll(".add-btn");

document.addEventListener("click", (e) => {
  if (e.target.dataset.homeAdd) {
    homeScore += parseInt(e.target.dataset.homeAdd);
    homeScoreEl.textContent = homeScore;
  }

  if (e.target.dataset.guestAdd) {
    guestScore += parseInt(e.target.dataset.guestAdd);
    guestScoreEL.textContent = guestScore;
  }
  if (homeScore > guestScore) {
    homeScoreHeader.style.color = "red";
    guestScoreHeader.style.color = "#ffffff";
  } else if (guestScore > homeScore) {
    guestScoreHeader.style.color = "red";
    homeScoreHeader.style.color = "#ffffff";
  } else if (homeScore === guestScore) {
    homeScoreHeader.style.color = "#ffffff";
    guestScoreHeader.style.color = "#ffffff";
  }

  if (e.target.dataset.startGame) {
    timerEl.textContent = `60:00`;
    timeMinutes = 60;
    timeSeconds = 59;
    document.querySelector(".new-game").style.display = "block";
    startTimer();
    document.querySelector(".start-game").style.display = "none";
    enableButtons.forEach((button) => {
      button.disabled = false;
    });
    timerEl.style.display = "block";
  }

  if (e.target.dataset.newGame) {
    homeScore = parseInt(e.target.dataset.newGame);
    guestScore = parseInt(e.target.dataset.newGame);
    homeScoreHeader.style.color = "#ffffff";
    guestScoreHeader.style.color = "#ffffff";
    homeScoreEl.textContent = homeScore;
    guestScoreEL.textContent = guestScore;
    document.querySelector(".start-game").style.display = "block";
    document.querySelector(".new-game").style.display = "none";
    timerEl.style.display = "none";
  }
});

function startTimer() {
  timeMinutes--;
  setInterval(() => {
    if (timeSeconds > 0) {
      timeSeconds--;
      timerEl.textContent = `${timeMinutes}:${timeSeconds}`;
    }
    if (timeSeconds < 10) {
      timerEl.textContent = `${timeMinutes}:0${timeSeconds}`;
    }

    if (timeSeconds < 1) {
      timeSeconds = 59;
      timeMinutes--;
      timerEl.textContent = `${timeMinutes}:${timeSeconds}`;
    }
  }, 100);
}
