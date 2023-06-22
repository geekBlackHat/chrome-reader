console.log("I am background");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "speak") {
    chrome.tts.speak(request.text);
  }
  if (request.action === "wordcount") {
    const time =  Math.round(request.text / 100)
    const text = time + "mins read";
    chrome.tts.speak(text);
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "speak") {
    chrome.tts.speak(request.text);
  }
});
