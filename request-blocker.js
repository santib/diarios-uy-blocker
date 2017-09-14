chrome.webRequest.onBeforeRequest.addListener(function() {
  return { cancel: true };
}, { urls: ["*://www.elpais.com.uy/js/epd_sw*"] }, ["blocking"] );
