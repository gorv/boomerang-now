chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("amazon.com") > -1) {
    chrome.pageAction.show(tab.id);
  }
});

