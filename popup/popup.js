console.log("This is a popup!")
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "wordcount") {
    const time =  Math.round(request.text / 100)
    const text = time + "mins read";
    let ele = document.getElementById('read');
    let node = document.createTextNode (text);
    ele.appendChild(node);
  }
});
