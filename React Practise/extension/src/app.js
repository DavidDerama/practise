const site = window.location.hostname;

const site_list = ["google.com", "facebook.com", "apple.com"];

if (site_list.includes(site)) {
  document.querySelector("body").innerHTML = "";
}
