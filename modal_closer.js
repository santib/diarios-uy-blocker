chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "if (typeof $ !== 'undefined') { $('html').removeClass('fancybox-margin').removeClass('fancybox-lock'); $('.fancybox-overlay').remove(); $('.fancybox-wrap').remove(); }"
    });
}, {});

chrome.webRequest.onBeforeRequest.addListener(function() {
  return { cancel: true };
}, { urls: ["*://www.elpais.com.uy/js/epd_sw*"] }, ["blocking"] );
