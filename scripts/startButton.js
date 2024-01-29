


const loginAnchor = Array.from(document.querySelectorAll('a')).find(a => a.textContent && a.textContent.toLowerCase().includes('log in'));
const loginSpan = Array.from(document.querySelectorAll('span')).find(span => span.textContent && span.textContent.toLowerCase().includes('log in'));
const regex = /.*\?\?.*/;
const extensionTab = regex.test(window.location.href);

if (loginAnchor || loginSpan || extensionTab) {
    console.log("Found 'Log In' element");
} else {
    console.log("Could not find 'Log In' element");
    const isOld = !!document.getElementById("search");
    const searchElement = isOld ? document.getElementById("search") : document.getElementById("SearchDropdown");

    const startButton = document.createElement('a');
    startButton.href = "https://old.reddit.com/r/all/??";
    startButton.target = "_blank";
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

    if (searchElement) {
        setTimeout(() => {
            searchElement.insertAdjacentElement(placement, startButton)
        }, 500);

    }
}
