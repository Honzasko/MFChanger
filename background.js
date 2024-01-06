browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'changeFrequency') {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, { type: 'changeFrequency', frequencyIn: request.frequencyIn ,frequencyOut: request.frequencyOut});
    });
  }
});

// Send 'LoopMusic' message every 1000 milliseconds (1 second)
setInterval(function() {
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    browser.tabs.sendMessage(tabs[0].id, { type: 'LoopMusic' });
  });
}, 1000);
