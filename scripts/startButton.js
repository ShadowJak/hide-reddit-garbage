


const loginAnchor = Array.from(document.querySelectorAll('a')).find(a => a.textContent && a.textContent.toLowerCase().includes('log in'));
const loginSpan = Array.from(document.querySelectorAll('span')).find(span => span.textContent && span.textContent.toLowerCase().includes('log in'));

if (loginAnchor || loginSpan) {
    console.log("Found 'Log In' element");
} else {
    console.log("Could not find 'Log In' element");
    //   const oldSearchElement = document.getElementById("search");
    //   const newSearchElement = document.getElementById("SearchDropdown");

    const isOld = !!document.getElementById("search");
    const searchElement = isOld ? document.getElementById("search") : document.getElementById("SearchDropdown");
    const startButton = document.createElement('a');
    startButton.textContent = `Hide Garbage`;

    startButton.style.display = 'inline-block';
    startButton.style.padding = '10px';
    startButton.style.fontWeight = 700;
    startButton.style.cursor = 'pointer';
    startButton.style.textAlign = 'center';
    startButton.style.textDecoration = 'none';
    startButton.style.outline = 'none';
    startButton.style.color = 'white';
    startButton.style.backgroundColor = '#0079d3';
    startButton.style.border = 'none';
    

    if (isOld) {
        startButton.style.marginTop = '7px';
        startButton.style.fontSize = '150%';
        startButton.style.borderRadius = '4px';
    } else {
        startButton.style.borderRadius = '99999px';
    }

    const placement = isOld ? 'afterend' : 'beforebegin'

    setTimeout(() => {
        searchElement.insertAdjacentElement(placement, startButton)
    }, 500);

}
