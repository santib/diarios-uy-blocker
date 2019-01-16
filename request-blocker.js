chrome.webRequest.onBeforeRequest.addListener(function() {
  return { cancel: true };
}, { urls: ["*://*/js/epd_sw*", "*://*/js/all*"] }, ["blocking"] );
