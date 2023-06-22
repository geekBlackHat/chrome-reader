chrome.runtime.sendMessage({ action: "speak", text: "New Tab Opened" });

const article = document.querySelector("article");
const p = document.querySelector("p");

let totalWordsCount = 0;

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  totalWordsCount += wordCount;
}

if (p) {
  const paragraphs = document.getElementsByTagName("p");
  for(let i = 0; i < paragraphs.length; i++)
  {
    const text = paragraphs[i].textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    totalWordsCount += wordCount;
  }
}

if(totalWordsCount) {
  chrome.runtime.sendMessage({ action: "wordcount", text: totalWordsCount });
  const readingTime = Math.round(totalWordsCount / 100);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = document.querySelector("body");
  // Support for article docs with date
  const h1 = document.querySelector("h1")?.parentNode;

  (h1 ?? heading).insertAdjacentElement("afterend", badge);
}
