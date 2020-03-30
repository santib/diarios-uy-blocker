chrome.webRequest.onBeforeRequest.addListener(function() {
  return { cancel: true };
}, { urls: ["*://*/js/*", "*://*/js/all*"] }, ["blocking"] );
