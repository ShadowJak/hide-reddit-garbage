


const loginAnchor = Array.from(document.querySelectorAll('a')).find(a => a.textContent && a.textContent.toLowerCase().includes('log in'));
const loginSpan = Array.from(document.querySelectorAll('span')).find(span => span.textContent && span.textContent.toLowerCase().includes('log in'));

if (loginAnchor || loginSpan) {
    console.log("Found 'Log In' element");
} else {
    console.log("Could not find 'Log In' element");
    //   const oldSearchElement = document.getElementById("search");
    //   const newSearchElement = document.getElementById("SearchDropdown");

    const searchElement = !!document.getElementById("search") ? document.getElementById("search") : document.getElementById("SearchDropdown");
    const startButton = document.createElement('button');
    startButton.textContent = `Hide Garbage`;

    startButton.style.backgroundColor = 'blue'; // Set background color
    startButton.style.color = 'white'; // Set text color
    startButton.style.padding = '10px'; // Set padding
    startButton.style.border = 'none'; // Remove border

    searchElement.insertAdjacentElement("afterend", startButton);

}
