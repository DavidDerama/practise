const whitelist = ["chatgpt.com", "chrome", "youtube.com", "reddit.com"];

const userSettings = {
  bedtime: 20,
  waketime: 6,
};

function redirectToBlockedPage(tabId) {
  chrome.tabs.update(tabId, {
    url: chrome.runtime.getURL("index.html"),
  });
}

function isOnDashboard(tabUrl) {
  const url = new URL(tabUrl);
  return whitelist.some((domain) => url.hostname.includes(domain));
}

function isTimeToRedirect() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  return hours >= userSettings.bedtime || hours < userSettings.waketime;
}

chrome.runtime.onMessage.addListener((message, sender) => {
  if (isOnDashboard(sender.tab.url)) {
    return;
  }

  if (
    message.action === "blockIfBlocked" ||
    (message.action === "blockIfBedtime" && isTimeToRedirect())
  ) {
    redirectToBlockedPage(sender.tab.id);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  checkAndRedirectTab(activeInfo.tabId);
});

function checkAndRedirectTab(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (!isOnDashboard(tab.url) && isTimeToRedirect()) {
      redirectToBlockedPage(tabId);
    }
  });
}
