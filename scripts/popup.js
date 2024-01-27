document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });

    chrome.runtime.sendMessage({ message: "getUrlArrays" }, function (response) {
        if (response && response.urlArrays) {
            const urlArrays = response.urlArrays;
            const checkboxContainer = document.getElementById('checkboxContainer');
            const table = document.createElement('table');
            table.style.width = '100%'; // Set the table width

            Object.keys(urlArrays).forEach(key => {
                const row = table.insertRow();

                const checkboxCell = row.insertCell(0);
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;
                checkboxCell.appendChild(checkbox);

                const labelCell = row.insertCell(1);
                const label = document.createElement('label');
                label.htmlFor = key;
                const labelText = key.replace(/_/g, ' ');
                label.appendChild(document.createTextNode(`Hide ${labelText}`));
                labelCell.appendChild(label);

                chrome.storage.sync.get(key, function (settings) {
                    if (settings[key] !== undefined) {
                        checkbox.checked = settings[key];
                    }
                });

                checkbox.addEventListener('change', function () {
                    const update = {};
                    update[key] = checkbox.checked;
                    chrome.storage.sync.set(update);
                });
            });

            checkboxContainer.appendChild(table);
        } else {
            console.error("Invalid response from background script:", response);
        }
    });
});
