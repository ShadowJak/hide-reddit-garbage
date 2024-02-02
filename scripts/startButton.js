


const loginAnchor = Array.from(document.querySelectorAll('a')).find(a => a.textContent && a.textContent.toLowerCase().includes('log in'));
const loginSpan = Array.from(document.querySelectorAll('span')).find(span => span.textContent && span.textContent.toLowerCase().includes('log in'));
const regex = /.*\?\?.*/;
const extensionTab = regex.test(window.location.href);
const isOld = !!document.getElementById("search");
const searchElement = isOld ? document.getElementById("search") : !document.getElementById("SearchDropdown") ? document.querySelector("header") : document.getElementById("SearchDropdown");
console.log('searchElement',searchElement);
console.log('document.querySelector("search-dynamic-id-cache-controller")', document.querySelector("header"));
const startButton = document.createElement('a');

if (loginAnchor || loginSpan) {
    console.log("Found 'Log In' element");
    startButton.href = "#";
    startButton.textContent = `Log in to Hide Garbage`;
    // startButton.style.display = 'inline-block';
    // startButton.style.padding = '10px';
    // startButton.style.fontWeight = 700;
    startButton.style.cursor = 'default';
    // startButton.style.textAlign = 'center';
    // startButton.style.textDecoration = 'none';
    // startButton.style.outline = 'none';
    // startButton.style.color = 'white';
    startButton.style.backgroundColor = '#808080';
    // startButton.style.border = 'none';
} else {
    console.log("Could not find 'Log In' element");



    startButton.href = "https://old.reddit.com/r/all/??";
    startButton.target = "_blank";
    startButton.textContent = `Hide Garbage`;
    // startButton.style.display = 'inline-block';
    // startButton.style.padding = '10px';
    // startButton.style.fontWeight = 700;
    startButton.style.cursor = 'pointer';
    // startButton.style.textAlign = 'center';
    // startButton.style.textDecoration = 'none';
    // startButton.style.outline = 'none';
    // startButton.style.color = 'white';
    startButton.style.backgroundColor = '#0079d3';
    // startButton.style.border = 'none';


    // if (isOld) {
    //     startButton.style.marginTop = '7px';
    //     startButton.style.fontSize = '150%';
    //     startButton.style.borderRadius = '4px';
    // } else {
    //     startButton.style.borderRadius = '99999px';
    // }

    // const placement = isOld ? 'afterend' : 'beforebegin'

    // if (searchElement) {
    //     setTimeout(() => {
    //         searchElement.insertAdjacentElement(placement, startButton)
    //     }, 500);

    // }
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

// const placement = !isOld && document.getElementById("SearchDropdown") ? 'beforebegin' : 'afterend'
let placement;
if (!isOld && document.getElementById("SearchDropdown")) {
    placement = 'beforebegin';
} else {
    placement = 'afterend';
    if (!isOld) {
        startButton.style.float = 'right';
    }
}

console.log('document.querySelector("search-dynamic-id-cache-controllere")', document.querySelector("search-dynamic-id-cache-controller"));

if (searchElement && !extensionTab) {
    console.log(1111111)
    console.log('searchElement', searchElement)
    console.log('placement', placement)
    console.log('startButton', startButton)
    setTimeout(() => {
        searchElement.insertAdjacentElement(placement, startButton)
    }, 500);
}