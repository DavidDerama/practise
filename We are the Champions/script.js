import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const form = document.getElementById("endorsement");
const commentsSection = document.querySelector(".comments-section");
const commentsDisplay = document.querySelector(".comments");
const clearBtn = document.querySelector(".clear");

const firebaseConfig = {
  databaseURL:
    "https://realtime-database-4bb1d-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const referenceInDb = ref(database, "endorsements");

onValue(referenceInDb, (snapshot) => {
  const snapshotExists = snapshot.val();
  if (snapshotExists) {
    const snapshotValues = snapshot.val();
    const comments = Object.values(snapshotValues);
    render(comments);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const message = formData.get("endorsement");
  const toSender = formData.get("to");
  const fromPerson = formData.get("from");
  sendToDb({ message, toSender, fromPerson });
  form.reset();
});

function sendToDb(obj) {
  push(referenceInDb, obj);
}

clearBtn.addEventListener("click", () => {
  remove(referenceInDb);
  render();
});

function render(arr = null) {
  if (arr) {
    commentsSection.innerHTML = "";
    const html = arr
      .map((el) => {
        return `
        <div class="comment">
            <p class="bold-text">To ${el.toSender}</p>
            <p class="message">
              ${el.message}
            </p>
            <p class="bold-text">From ${el.fromPerson}e</p>
          </div>
          `;
      })
      .join("");
    commentsSection.innerHTML = html;
    commentsDisplay.style.display = "flex";
  } else {
    commentsSection.innerHTML = "";
  }
}
