const article = document.querySelector("article");

window.addEventListener('load', function() {
    // alert('ok');
    // const testButton = document.getElementById("dropdown-list-0-toggle");
    // const testButton = document.querySelector("button");
    // const stuff = this.document.getElementsByTagName("button");
    // const moreStuff = this.document.getElementsByClassName("devsite-thumb devsite-thumb-up");
    // const moreStuff = this.document.getElementsByTagName("button");
    // console.log('testestestsetsetsetsets');
    // console.log(11, moreStuff);
    // for (i = 0; i < moreStuff.length; i++) {
    //     console.log(i, moreStuff[i].ariaLabel);
    // }
    // console.log(22, moreStuff[0].ariaLabel);

    // moreStuff[7].click();

    const anchors  = document.getElementsByTagName("a");
    console.log(11, anchors)
    for (i = 0; i < anchors.length; i++) {
        // console.log(i, anchors[i].innerText);
        if (anchors[i].innerText === 'hide') {
            anchors[i].click();
        }
    }
})

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}