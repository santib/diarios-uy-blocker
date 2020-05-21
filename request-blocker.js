chrome.webRequest.onBeforeRequest.addListener(function() {
  return { cancel: true };
}, {
  urls: [
    "*://*/*/js/epd_*", // elpais
    "*://*/js/all*" // elobservador
  ]
}, ["blocking"] );
