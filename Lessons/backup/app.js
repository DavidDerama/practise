const site = window.location.hostname;

const site_list = ["facebook.com", "apple.com"];

const siteUrl = site.startsWith("www.") ? site.split("www.")[1] : site;

if (site_list.includes(siteUrl)) {
  chrome.runtime.sendMessage({
    action: "blockIfBlocked",
  });
} else {
  chrome.runtime.sendMessage({
    action: "blockIfBedtime",
  });
}
