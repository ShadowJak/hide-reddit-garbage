


const loginAnchor = Array.from(document.querySelectorAll('a')).find(a => a.textContent && a.textContent.toLowerCase().includes('log in'));
const loginSpan = Array.from(document.querySelectorAll('span')).find(span => span.textContent && span.textContent.toLowerCase().includes('log in'));
const regex = /.*\?\?.*/;
const extensionTab = regex.test(window.location.href);
const isOld = !!document.getElementById("search");
const searchElement = isOld ?
    document.getElementById("search") :
    !document.getElementById("SearchDropdown") ?
        document.querySelector("header") :
        document.getElementById("SearchDropdown");
const startButton = document.createElement('a');

if (loginAnchor || loginSpan) {
    startButton.href = "#";
    startButton.textContent = `Log in to Hide Garbage`;
    startButton.style.cursor = 'default';
    startButton.style.backgroundColor = '#808080';
} else {
    startButton.href = "https://old.reddit.com/r/all/??";
    startButton.target = "_blank";
    startButton.textContent = `Hide Garbage`;
    startButton.style.cursor = 'pointer';
    startButton.style.backgroundColor = '#0079d3';
}

startButton.style.display = 'inline-block';
startButton.style.padding = '10px';
startButton.style.fontWeight = 700;
startButton.style.textAlign = 'center';
startButton.style.textDecoration = 'none';
startButton.style.outline = 'none';
startButton.style.color = 'white';
startButton.style.border = 'none';

if (isOld) {
    startButton.style.marginTop = '7px';
    startButton.style.fontSize = '150%';
    startButton.style.borderRadius = '4px';
} else {
    startButton.style.borderRadius = '99999px';
}

let placement;
if (!isOld && document.getElementById("SearchDropdown")) {
    placement = 'beforebegin';
} else {
    placement = 'afterend';
    if (!isOld) {
        startButton.style.float = 'right';
    }
}

if (searchElement && !extensionTab) {
    setTimeout(() => {
        searchElement.insertAdjacentElement(placement, startButton)
    }, 500);
}