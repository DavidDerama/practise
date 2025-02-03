const LOCATION_ENDPOINT =
  "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global%20Entry";
function fetchLocations() {
  fetch(LOCATION_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      const filteredLocations = data.map((loc) => ({
        id: loc.id,
        name: loc.name,
        shortName: loc.shortName,
        tzData: loc.tzData,
      }));
      filteredLocations.sort((a, b) => a.name.localeCompare(b.name));
      chrome.storage.local.set({ locations: filteredLocations });
    })
    .catch((err) => console.log(err));
}

let chachedPrefs = {};

function fetchOpenSlots(result) {
  const { locationId, startDate, endDate } = result;

  const appointmentUrl = `https://ttp.cbp.dhs.gov/schedulerapi/locations/${locationId}/slots?startTimestamp=${startDate}T00:00:00&endTimestamp=${endDate}T00:00:00`;
  fetch(appointmentUrl)
    .then((res) => res.json())
    .then((data) => data.filter((slot) => slot.active > 0))
    .then((data) => {
      handleNotifications(data);
    })
    .catch((err) => err.json);
}

function handleNotifications(appointments) {
  if (appointments.length > 0) {
    createNotification(appointments[0]);
  }
}

function createNotification(appointment) {
  console.log(appointment);
  chrome.notifications.create({
    title: "Global Entry Drops",
    message: `Found an open interview at ${appointment.timestamp}`,
    iconUrl: "./images/favicon-32.png",
    type: "basic",
  });
}

chrome.runtime.onInstalled.addListener((details) => {
  fetchLocations();
});

chrome.runtime.onMessage.addListener((data) => {
  const { event, prefs } = data;
  switch (event) {
    case "onStop":
      handleOnStop();
      break;
    case "onStart":
      handleOnStart(prefs);
      break;
    default:
      break;
  }
});

function handleOnStop() {
  console.log("On stop in background");
  setRunningStatus(false);
  stopAlarm();
  chachedPrefs = {};
}

function handleOnStart(prefs) {
  console.log("On start in background");
  chachedPrefs = prefs;
  chrome.storage.local.set(prefs);
  setRunningStatus(true);
  createAlarm();
}

function setRunningStatus(isRunning) {
  chrome.storage.local.set({ isRunning });
}

function createAlarm() {
  chrome.alarms.get("DROP_ALARM", (existingAlarm) => {
    if (!existingAlarm) {
      chrome.alarms.create("DROP_ALARM", { periodInMinutes: 0.1 });
    }
  });
}

function stopAlarm() {
  chrome.alarms.clearAll();
}

chrome.alarms.onAlarm.addListener(() => {
  console.log("onAlarm scheduled code running.....");
  fetchOpenSlots(chachedPrefs);
});

chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://www.youtube.com/watch?v=nsEG-cZJ6P4" });
});
