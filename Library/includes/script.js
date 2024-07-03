const formBtn = document.getElementById("form-submit");
const workersEl = document.getElementById("workers");
const form = document.getElementById("worker-form");
const editForm = document.getElementById("edit-form");
const notifCenter = document.querySelector(".notif-center");
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel");
const dialog = document.querySelector("dialog");

document.addEventListener("DOMContentLoaded", renderWorkers);

function renderWorkers() {
  fetch("/tyontekijat", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.forEach((worker, index) => {
        html += `
          <div class="worker">
          <div class="avatar-info">
        <div class="avatar">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="info">
          <p class="full-name"><span class="highlight">${worker.etunimi} ${worker.sukunimi}</span></p>
          <p class="company">
            <span class="highlight">Company: </span>${worker.yritys}
          </p>
          <p class="job-desc">
            <span class="highlight">Job Description: </span>${worker.osasto}
          </p>
          <p class="city"><span class="highlight">City: </span>${worker.kaupunki}</p>
        </div>
        </div>
        <div class="tools">
        <i class="fa-regular fa-pen-to-square open-edit" data-modify=${worker.sukunimi}></i></i>
        <i class="fa-regular fa-trash-can" data-remove="${index}"></i></i>
        </div>
          
      </div>`;
      });

      workersEl.innerHTML = html;
    });
}

document.addEventListener("click", (e) => {
  if (e.target.dataset.modify) {
    const tyontekija = e.target.dataset.modify;
    fetch(`tyontekija/${tyontekija}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const formHtml = `
          <form class="edit-form" id="edit-form">
        <legend>Edit details</legend>
        <label for="etunimi">Etunimi:</label>
        <input type="text" placeholder="Etunimi:" name="etunimi" value=${data.etunimi} id="edit-etunimi"/>
        <label for="sukunimi">Sukunimi:</label>
        <input type="text" placeholder="Sukunimi:" name="sukunimi" value=${data.sukunimi} id="edit-sukunimi"/>
        <label for="yritys">Yritys:</label>
        <input type="text" placeholder="Yritys:" name="yritys" value=${data.yritys} id="edit-yritys"/>
        <label for="osasto">Osasto:</label>
        <input type="text" placeholder="Osasto:" name="osasto" value=${data.osasto} id="edit-osasto"/>
        <label for="kaupunki">Kaupunki:</label>
        <input type="text" placeholder="Kaupunki:" name="kaupunki" value=${data.kaupunki} id="edit-kaupunki"/>
        <button type="submit" id="edit-form-submit">Save Changes</button>
        </form>
    `;
        modal.innerHTML = formHtml;
        modal.showModal();
      });
  }
  if (e.target.dataset.remove) {
    const index = parseInt(e.target.dataset.remove);
    fetch(`poista/${index}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        sendNotification(data);
        renderWorkers();
      });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const etunimi = formData.get("etunimi");
  const sukunimi = formData.get("sukunimi");
  const yritys = formData.get("yritys");
  const osasto = formData.get("osasto");
  const kaupunki = formData.get("kaupunki");

  fetch("/lisaa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      etunimi: etunimi,
      sukunimi: sukunimi,
      yritys: yritys,
      osasto: osasto,
      kaupunki: kaupunki,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      sendNotification(data);
      renderWorkers();
    });
});

dialog.addEventListener("submit", (e) => {
  e.preventDefault();

  const etunimi = document.querySelector("#edit-etunimi").value;
  const sukunimi = document.querySelector("#edit-sukunimi").value;
  const yritys = document.querySelector("#edit-yritys").value;
  const osasto = document.querySelector("#edit-osasto").value;
  const kaupunki = document.querySelector("#edit-kaupunki").value;
  fetch("/paivita", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      etunimi: etunimi,
      sukunimi: sukunimi,
      yritys: yritys,
      osasto: osasto,
      kaupunki: kaupunki,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      sendNotification(data);
      renderWorkers();
      dialog.close();
    });
});

if (editForm) {
  cancelBtn.addEventListener("click", () => {
    alert("TEST");
    sendNotification({ message: "Action interrupted" });
    dialog.close();
  });
}

function sendNotification(data) {
  notifCenter.innerHTML = `<div class="notif notif-animation">
    <i class="fa-solid fa-check"></i
    ><label>${data.message}</label>
  </div>`;
}
