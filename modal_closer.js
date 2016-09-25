chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "$('html').removeClass('fancybox-margin').removeClass('fancybox-lock'); $('.fancybox-overlay').remove(); $('.fancybox-wrap').remove();"
    });
}, {});
